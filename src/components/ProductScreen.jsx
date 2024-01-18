import React from 'react'
import NavBar from './NavBar'
import { Box , Card , CardActions , CardMedia , CardContent , Grid , Typography , Button , Divider } from "@mui/material";


function ProductScreen() {
    return (
        <>
            <NavBar />
            <Box sx={{mt: 15 , width: 0.9 , display: "flex" , flexDirection: "column" , gap: 5 , justifyContent: "center" }}>
                <h1>Product Details</h1>
                <Divider />
            </Box>
        </>
        
    )
}

export default ProductScreen