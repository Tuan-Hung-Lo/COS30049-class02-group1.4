import NavBar from "./NavBar"
import Footer from "./Footer";
import styled from "styled-components";
import Button from '@mui/material/Button'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { TextField , MenuItem , Box , Slider } from "@mui/material";

import * as React from 'react';

function valuetext(value) {
    return `${value}`;
}

function Explore(){
    const Header = styled.div `
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    `

    const ResponsiveGrid = styled.div`
        display: grid;
        width: 100%;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        gap: 20px;

        @media (max-width: 1600px) {
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }

        @media (max-width: 1200px) {
            grid-template-columns: 1fr 1fr 1fr;
        }

        @media (max-width: 1000px) {
            grid-template-columns: 1fr 1fr;
        }

        @media (max-width: 400px) {
            grid-template-columns: 1fr;
        }
    `
    const likes = [
        {
          value: 'most_liked',
          label: 'Most Liked',
        },
        {
          value: 'least_liked',
          label: 'Least Liked',
        },
    ];

    const categories = [
        {
            value: 'category',
            label: 'Category',
        },
        {
            value: 'art',
            label: 'Art',
        },
        {
            value: 'photograph',
            label: 'Photograph',
        },
        {
            value: 'metaverses',
            label: 'Metaverses',
        },
        {
            value: 'potato',
            label: 'Potato',
        },
    ];

    const collections = [
        {
            value: 'collections',
            label: 'Collections',
        },
        {
            value: 'bored_ape',
            label: 'BoredApeYatchClub',
        },
        {
            value: 'mutant_ape',
            label: 'MutantApeYatchClub',
        },
        {
            value: 'art_block_factory',
            label: 'Art Block Factory',
        },
    ];

    const saleTypes = [
        {
            value: 'sale_type',
            label: 'Sale Type',
        },
        {
            value: 'fixed_price',
            label: 'Fixed price',
        },
        {
            value: 'not_for_sale',
            label: 'Not for sale',
        },
        {
            value: 'open_for_offer',
            label: 'Open for offer',
        },
    ];

    const [value, setValue] = React.useState([10, 30]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <>
            <NavBar />
            <Box sx={{mt: 15, displayPrint: "flex", flexDirection: "column", gap: 20, width: 0.9}}>
                <Header>
                    <h1>Explore</h1>
                    <p>Buy and Sell NFTs</p>
                </Header>
                <Box sx={{display: "flex", flexDirection: "column", gap: 5}}>
                    <div style={{display: "flex",	flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: '90%'}}>
                        <h1>Explore Products</h1>
                        <Button variant="contained" color="primary" size="large" endIcon={<FilterAltOutlinedIcon/>}>
                        Filter
                        </Button>
                    </div>
                    <hr />
                    <Box sx={{width: 0.9, display: "flex", flexDirection: "row", justifyContent: "space-between", mx: "auto"}}>
                        <div style={{width: "50%", display: "flex", flexDirection:"row", justifyContent: "space-between"}}>
                            <TextField
                                id="filled-select-currency"
                                select
                                label="LIKES"
                                defaultValue="most_liked"
                                variant="filled"
                                >
                                {likes.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                id="filled-select-currency"
                                select
                                label="CATERGORY"
                                defaultValue="category"
                                variant="filled"
                                >
                                {categories.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                id="filled-select-currency"
                                select
                                label="COLLECTIONS"
                                defaultValue="collections"
                                variant="filled"
                                >
                                {collections.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                id="filled-select-currency"
                                select
                                label="SALE TYPES"
                                defaultValue="sale_type"
                                variant="filled"
                                >
                                {saleTypes.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                        <div>
                            <Box sx={{width: 300}}>
                                <span>PRICE RANGE</span>
                                <Slider
                                    getAriaLabel={() => 'Temperature range'}
                                    value={value}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"
                                    getAriaValueText={valuetext}
                                />
                                <span>Price: ${value[0]}0 - ${value[1]}0 </span>
                            </Box>
                        </div>
                    </Box>
                    <ResponsiveGrid>
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
                    </ResponsiveGrid>
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default Explore