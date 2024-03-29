import { Box } from "@mui/material"; // Import Box component for layout
import { DataGrid } from '@mui/x-data-grid'; // Import DataGrid component for displaying data

function Transaction() {
    // Define columns for the data grid
    const columns = [
        { field: 'id', headerName: 'ID', type: 'number', width: 80 },
        { field: 'purchasedDate', headerName: 'Purchased Date', width: 150 },
        { field: 'name', headerName: 'NFT Name', width: 150 },
        { field: 'author', headerName: 'Author', width: 400 },
        { field: 'priceETH', headerName: 'ETH', type: 'number', width: 125 },
        { field: 'priceUSD', headerName: 'USD', type: 'number', width: 150 },
        { field: 'blockchain', headerName: 'Blockchain', width: 150 },
    ];

    // Generate sample data for rows
    const rows = [];
    for (let i = 0; i < 20; i++) {
        const id = i + 1;
        const purchasedDate = new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString().split('T')[0];
        const name = `NFT #${id}`;
        const author = `0x${Math.floor(Math.random() * 0xffffffffffffffffffffffffffffffffffffffff0).toString(16)}`;
        const priceETH = Math.floor(Math.random() * 10000) * 0.01;
        const conversionRate = 2265.65;
        const priceUSD = (priceETH * conversionRate).toFixed(2);
        const blockchain = ['Ethereum'][Math.floor(Math.random() * 1)];

        // Add each row to the rows array
        rows.push({
            id,
            purchasedDate,
            name,
            author,
            priceETH,
            priceUSD,
            blockchain,
        });
    }

    return (
        <>
            {/* Container for the transaction history */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 5, width: 1 , mx: "auto"}}>
                {/* Header */}
                <Box sx={{display: "flex" , flexDirection: "column" , alignItems: "center" , justifyContent: "space-between"}}>
                    <h1>Transactions History</h1>
                </Box>
                {/* DataGrid to display the transaction data */}
                <Box sx={{ width: "100%", height: "fit-content" , maxWidth: "fit-content", mx: "auto"}}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
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
        </>
    );
}

export default Transaction;
