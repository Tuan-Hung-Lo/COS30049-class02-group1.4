import { Box, TextField, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Tab, Tabs, Typography } from '@mui/material'

import PropTypes from 'prop-types'

import Transaction from './Transaction'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

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
        <Box sx={{ mt: 15, height: "70vh" , display: "flex", flexDirection: "column", px: "auto" }}>
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
                <Box sx={{ mt: 3 }}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>No.</TableCell>
                                    <TableCell>ETH Amount</TableCell>
                                    <TableCell>USD</TableCell>
                                    <TableCell>Date</TableCell>
                                    <TableCell>From (Name)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody></TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Box display={"flex"} flexDirection={"column"} px={"auto"}>
                    <Box sx={{ mt: 3 }}>
                        <Typography variant="h5">My Wallet ID: {generateWalletId()}</Typography>
                    </Box>
                    <Box sx={{ mt: 3 , justifyContent: "center"}}>
                        <Box sx={{display: "flex" , flexDirection: "column" , alignItems: "center" , justifyContent: "space-between"}}>
                            <h1>Transactions History</h1>
                        </Box>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>No.</TableCell>
                                        <TableCell>ETH Amount</TableCell>
                                        <TableCell>USD</TableCell>
                                        <TableCell>Date</TableCell>
                                        <TableCell>From (Name)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody></TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <Box sx={{ mt: 3 }}>
                    <Transaction />
                </Box>
            </CustomTabPanel>
        </Box>
    )
}

export default WalletPage