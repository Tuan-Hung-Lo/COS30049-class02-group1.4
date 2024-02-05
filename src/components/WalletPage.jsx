import { Box, TextField, Button, Tab, Tabs, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Transaction from './Transaction';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import Fade from '@mui/material/Fade';
import { DataGrid } from '@mui/x-data-grid';
import { useSearchParams } from 'react-router-dom';

// Function to generate a wallet ID using UUIDv4
function generateWalletId() {
  return `${uuidv4()}`;
}

// Custom TabPanel component
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

// Define prop types for CustomTabPanel component
CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

// Function to generate accessibility props for tabs
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

// WalletPage component
function WalletPage() {
    const [queryParameters] = useSearchParams(); // Get query parameters from URL

    // Function to get the index of the currently open tab
    const getOpenTab = (tabName) => {
        switch(tabName) {
            case "Send":
                return 0;
            case "Receive":
                return 1;
            case "Transactions":
                return 2;
            default:
                return 0;
        }
    }

    // State to manage the currently selected tab value
    const [value, setValue] = useState(getOpenTab(queryParameters.get('open')));

    // Handle tab change
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    // Define columns for sending transactions
    const columnsSend = [
        { field: 'id', headerName: 'ID', width: 75 },
        { field: 'priceETH', headerName: 'ETH', type: 'number', width: 125 },
        { field: 'priceUSD', headerName: 'USD', type: 'number', width: 150 },
        { field: 'date', headerName: 'Date', width: 200 },
        { field: 'receiver', headerName: 'To', width: 300 },
    ];

    // Define columns for receiving transactions
    const columnsReceive = [
        { field: 'id', headerName: 'ID', width: 75 },
        { field: 'priceETH', headerName: 'ETH', type: 'number', width: 125 },
        { field: 'priceUSD', headerName: 'USD', type: 'number', width: 150 },
        { field: 'date', headerName: 'Date', width: 200 },
        { field: 'sender', headerName: 'From', width: 300 },
    ];

    // Generate sample transaction data
    const rows = [];
    for (let i = 0; i < 10; i++) {
        const id = i + 1;
        const date = new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString().split('T')[0];
        const priceETH = Math.floor(Math.random() * 1000) * 0.01;
        const conversionRate = 2265.65;
        const priceUSD = (priceETH * conversionRate).toFixed(2);
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

    // State for form data
    const [formData, setFormData] = useState({
        price: 0, // Initialize price state
    });

    // Conversion rate for ETH to USD
    const conversionRate = 2265.65;

    // State for transaction fee
    const [transactionFee, setTransactionFee] = useState(0);

    // Calculate transaction fee whenever price changes
    useEffect(() => {
        const calculateTransaction = () => {
            const price = parseFloat(formData.price);
            const fee = price * conversionRate * 0.002; // 0.2% transaction fee
            setTransactionFee(fee);
        };

        calculateTransaction();
    }, [formData.price]);

    // Wallet balance
    const walletBalance = 12345;

    return (
        <Fade in={true} timeout={1000}>
            <Box sx={{ mt: 15, height: "auto" , display: "flex", flexDirection: "column", px: "auto" , width: 0.8 }}>
                {/* Tabs for Send, Receive, and Transactions */}
                <Box sx={{ borderBottom: 1, borderColor: 'divider', mx: "auto" }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Send" {...a11yProps(0)} />
                        <Tab label="Receive" {...a11yProps(1)} />
                        <Tab label="Transactions" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                {/* Tab Panels */}
                <CustomTabPanel value={value} index={0}>
                    {/* Send Transaction Section */}
                    <Box sx={{display: "flex" , flexDirection: "column" , alignItems: "center" , justifyContent: "space-between" , mt: 3}}>
                        <Typography variant="h5">Balance: {walletBalance} ETH</Typography>
                    </Box>
                    <Box className="send-section" display={'flex'} flexDirection={'column'} gap={2} mx={"auto"} width={0.3} mt={3}>
                        {/* Form fields for sending transactions */}
                        <TextField  type="text" label="Wallet ID" variant="outlined" placeholder="" />
                        <TextField  
                            type="number" label="ETH Amount" variant="outlined" placeholder="" 
                            inputProps={{ min: 0 }} // Set minimum value as 0
                            onChange={(event) => {
                                const newPrice = parseFloat(event.target.value); // Parse the entered value to a float
                                setFormData({
                                    ...formData,
                                    price: newPrice // Update the price in formData with the new value
                                });
                            }}
                        />
                        <TextField  
                            type="number" 
                            label="USD" 
                            variant="outlined" 
                            inputProps={{ min: 0 }} // Set minimum value as 0
                            value={(formData.price * conversionRate).toFixed(2)}
                            InputProps={{
                                readOnly: true, // Make the input field readonly
                            }}
                        />
                        {/* Display transaction fee */}
                        <Typography>
                            &#x2022; Transaction Fee (0.2%): ${transactionFee.toFixed(2)}
                        </Typography>
                        {/* Button to send transaction */}
                        <Button variant="contained" color="primary">
                            Send
                        </Button>
                    </Box>
                    {/* Transactions History */}
                    <Box sx={{display: "flex" , flexDirection: "column" , alignItems: "center" , justifyContent: "space-between" , mt: 3}}>
                        <Typography variant="h5">Transactions History</Typography>
                    </Box>
                    <Box sx={{ mt: 3 , width: 1 , mx: "auto" , maxWidth: "fit-content"}}>
                        <DataGrid
                            rows={rows}
                            columns={columnsSend}
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
                {/* Receive Tab Panel */}
                <CustomTabPanel value={value} index={1}>
                    <Box display={"flex"} flexDirection={"column"} px={"auto"}>
                        <Box sx={{ mt: 3 , mx: "auto"}}>
                            <Typography variant="h5">My Wallet ID: {generateWalletId()}</Typography>
                        </Box>
                        <Box sx={{display: "flex" , flexDirection: "column" , alignItems: "center" , justifyContent: "space-between" , mt: 3}}>
                            <Typography variant="h5">Balance: {walletBalance} ETH</Typography>
                        </Box>
                        {/* Transactions History */}
                        <Box sx={{ mt: 3 , justifyContent: "center"}}>
                            <Box sx={{display: "flex" , flexDirection: "column" , alignItems: "center" , justifyContent: "space-between"}}>
                                <Typography variant="h5">Transactions History</Typography>
                            </Box>
                            <Box sx={{ mt: 3 , width: 1 , mx: "auto" , maxWidth: "fit-content"}}>
                                <DataGrid
                                    rows={rows}
                                    columns={columnsReceive}
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
                {/* Transactions Tab Panel */}
                <CustomTabPanel value={value} index={2}>
                    <Box sx={{ mt: 3 , mx: "auto" }}>
                        <Transaction />
                    </Box>
                </CustomTabPanel>
            </Box>
        </Fade>
    )
}

export default WalletPage;
