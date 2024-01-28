import styled from "styled-components";
import { useState } from "react";
import { Box, Divider } from "@mui/material";
import { Link } from "react-router-dom";

function Footer(){
    const Footer = styled.div `
        margin-top: 10vh;
        height: 10vh;               
        width: 100%;
        bottom: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        background-color: #1a1a1a;
    `;

    function getDate() {
        const today = new Date();
        const year = today.getFullYear();
        return ` ${year}`;
    }

    const [currentDate] = useState(getDate());

    return(
        <Footer>
            ©{currentDate} NiFTy, Inc. All rights reserved.
            <Divider/>
            <Box sx={{width: 0.15 , display: "flex" , flexDirection: "row" , justifyContent: "space-around"}}>
                <Link to='*'>Terms</Link>
                ·
                <Link to='*'>Policy</Link>
                ·
                <Link to='*'>Contact </Link>
            </Box>
            
        </Footer>

    )
}

export default Footer