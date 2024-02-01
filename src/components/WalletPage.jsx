import { Box, TextField, Button, Tab, Tabs, Typography } from '@mui/material'

import PropTypes from 'prop-types'

import Transaction from './Transaction'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Fade from '@mui/material/Fade';
import { DataGrid } from '@mui/x-data-grid'

function generateWalletId() {
  return `${uuidv4()}`
}
console.log(generateWalletId())

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

function WalletPage() {
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
        const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
    }

    const  columnsSend = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'priceETH', headerName: 'Price (ETH)', type: 'number', width: 100, },
        { field: 'priceUSD', headerName: 'Price (USD)', type: 'number', width: 100, },
        { field: 'date', headerName: 'Date', width: 150 },
        { field: 'receiver', headerName: 'To', width: 300 },
    ];

    const  columnsReceive = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'priceETH', headerName: 'Price (ETH)', type: 'number', width: 100, },
        { field: 'priceUSD', headerName: 'Price (USD)', type: 'number', width: 100, },
        { field: 'date', headerName: 'Date', width: 150 },
        { field: 'sender', headerName: 'From', width: 300 },
    ];
        
    const rows = [];
        for (let i = 0; i < 20; i++) {
        const id = i + 1;
        const date = new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString().split('T')[0];// Generate a random price for ETH
        const priceETH = Math.floor(Math.random() * 1000) * 0.01;
        const conversionRate = 2000;
        const priceUSD = priceETH * conversionRate;
        const tokenId = Math.floor(Math.random() * 1000000);
        const blockchain = ['Ethereum', 'Solana', 'Flow', 'Tezos', 'Binance Smart Chain'][Math.floor(Math.random() * 5)];
        const receiver = generateWalletId();
        const sender = generateWalletId();

        rows.push({
            id,
            date,
            priceETH,
            priceUSD,
            tokenId,
            blockchain,
            receiver,
            sender,
        });
    }

    const [formData, setFormData] = useState({
        price: 0, // Initialize price state
    });

    const [transactionFee, setTransactionFee] = useState(0);

	useEffect(() => {
        // Calculate transaction fee whenever price changes
        const calculatetransaction = () => {
            const price = parseFloat(formData.price);
            const fee = price * 0.002; // 0.2% transaction fee
            setTransactionFee(fee);
        };

        calculatetransaction();
    }, [formData.price]);

    return (
        <Fade in={true} timeout={1000}>
            <Box sx={{ my: 15, height: "70vh" , display: "flex", flexDirection: "column", px: "auto" }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', mx: "auto" }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Send" {...a11yProps(0)} />
                        <Tab label="Receive" {...a11yProps(1)} />
                        <Tab label="Transactions" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Box className="send-section" display={'flex'} flexDirection={'column'} gap={2} mx={"auto"}>
                        <TextField  type="text" label="Wallet ID" variant="outlined" placeholder="" />
                        <TextField  type="number" label="ETH Amount" variant="outlined" placeholder="" />
                        <TextField  
                            type="number" 
                            label="USD" 
                            variant="outlined" 
                            inputProps={{ min: 0 }} // Set minimum value as 0
                            onChange={(event) => {
                                const newPrice = parseFloat(event.target.value); // Parse the entered value to a float
                                setFormData({
                                    ...formData,
                                    price: newPrice // Update the price in formData with the new value
                                });
                            }}
                        />
                        <Typography>
                            &#x2022; Transaction Fee (0.2%): ${transactionFee.toFixed(2)}
                        </Typography>
                        <Button variant="contained" color="primary">
                            Clear + Send
                        </Button>
                    </Box>
                    <Box sx={{display: "flex" , flexDirection: "column" , alignItems: "center" , justifyContent: "space-between" , mt: 3}}>
                        <h1>Transactions History</h1>
                    </Box>
                    <Box sx={{ mt: 3 }}>
                        <DataGrid
                            rows={rows}
                            columns={ columnsSend}
                            initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                            }}
                            pageSizeOptions={[5, 10]}
                            checkboxSelection
                        />
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Box display={"flex"} flexDirection={"column"} px={"auto"}>
                        <Box sx={{ mt: 3 , mx: "auto"}}>
                            <Typography variant="h5">My Wallet ID: {generateWalletId()}</Typography>
                        </Box>
                        <Box sx={{ mt: 3 , justifyContent: "center"}}>
                            <Box sx={{display: "flex" , flexDirection: "column" , alignItems: "center" , justifyContent: "space-between"}}>
                                <h1>Transactions History</h1>
                            </Box>
                            <Box mt={3}>
                                <DataGrid
                                    rows={rows}
                                    columns={ columnsReceive}
                                    initialState={{
                                    pagination: {
                                        paginationModel: { page: 0, pageSize: 5 },
                                    },
                                    }}
                                    pageSizeOptions={[5, 10]}
                                    checkboxSelection
                                />
                            </Box>   
                        </Box>
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <Box sx={{ mt: 3 }}>
                        <Transaction />
                    </Box>
                </CustomTabPanel>
            </Box>
        </Fade>
    )
}

export default WalletPage