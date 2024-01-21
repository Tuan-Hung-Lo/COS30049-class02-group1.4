import styled from "styled-components";
import { Box } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';

function Transaction(){

    const Header = styled.div `
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    `;

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'purchasedDate', headerName: 'Purchased Date', width: 150 },
        { field: 'name', headerName: 'NFT Name', width: 150 },
        { field: 'collection', headerName: 'Collection', width: 150 },
        { field: 'seller', headerName: 'Seller', width: 150 },
        { field: 'price', headerName: 'Price', type: 'number', width: 100, },
        { field: 'tokenId', headerName: 'Token ID', width: 150 },
        { field: 'blockchain', headerName: 'Blockchain', width: 150 },
        { field: 'transactionHash', headerName: 'Transaction Hash', width: 300 },
    ];
        
    const rows = [];
        for (let i = 0; i < 10; i++) {
        const id = i + 1;
        const purchasedDate = new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString();
        const name = `NFT #${id}`;
        const collection = `Collection #${Math.floor(Math.random() * 100)}`;
        const seller = `0x${Math.floor(Math.random() * 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0).toString(16)}`;
        const price = Math.floor(Math.random() * 10000) * 0.01;
        const tokenId = Math.floor(Math.random() * 1000000);
        const blockchain = ['Ethereum', 'Solana', 'Flow', 'Tezos', 'Binance Smart Chain'][Math.floor(Math.random() * 5)];
        const transactionHash = `0x${Math.floor(Math.random() * 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0).toString(16)}`;

        rows.push({
            id,
            purchasedDate,
            name,
            collection,
            seller,
            price,
            tokenId,
            blockchain,
            transactionHash,
        });
    }


    return(
        <>
            <Box sx={{mt: 15, display: "flex", flexDirection: "column", gap: 5, width: 0.9}}>
                <Header>
                    <h1>Transactions History</h1>
                    <p>Buy and Sell NFTs</p>
                </Header>
                <Box sx={{ width: 1, mx: "auto" }}>
                    <div style={{ height: "65vh", width: '100%' }}>
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
                    </div>
                </Box>
            </Box>
        </>
    );
}

export default Transaction

