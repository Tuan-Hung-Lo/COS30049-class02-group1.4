import styled from "styled-components";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Slider , Box } from "@mui/material";

import * as React from 'react';

function valuetext(value) {
    return `${value}°C`;
}

function Transaction(){

    const Header = styled.div `
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    `;

    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
    setValue(newValue);
    };

    return(
        <>
            <NavBar />
                <Box sx={{mt: 15, display: "flex", flexDirection: "column", gap: 20, width: 0.9}}>
                    <Header>
                        <h1>Transactions History</h1>
                        <p>Buy and Sell NFTs</p>
                    </Header>
                    <Box sx={{ width: 300 }}>
                        <Slider
                            getAriaLabel={() => 'Temperature range'}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                        />
                    </Box>
                    <div style={{height:"300px", backgroundColor:"#5a5a5a"}}>Card</div>
                    <div style={{height:"300px", backgroundColor:"#5a5a5a"}}>Card</div>
                    <div style={{height:"300px", backgroundColor:"#5a5a5a"}}>Card</div>
                    <div style={{height:"300px", backgroundColor:"#5a5a5a"}}>Card</div>
                    <div style={{height:"300px", backgroundColor:"#5a5a5a"}}>Card</div>
                    <div style={{height:"300px", backgroundColor:"#5a5a5a"}}>Card</div>
                    <div style={{height:"300px", backgroundColor:"#5a5a5a"}}>Card</div>
                    <div style={{height:"300px", backgroundColor:"#5a5a5a"}}>Card</div>
                    <div style={{height:"300px", backgroundColor:"#5a5a5a"}}>Card</div>
                    <div style={{height:"300px", backgroundColor:"#5a5a5a"}}>Card</div>
                </Box>
            <Footer />
        </>
    );
}

export default Transaction