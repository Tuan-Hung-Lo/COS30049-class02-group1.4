import styled from "styled-components";
import { useState } from "react";

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
        background-color: #2a2a2a;
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
        </Footer>

    )
}

export default Footer