import styled from "styled-components";
import Button from '@mui/material/Button'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { TextField , MenuItem , Box , Slider , Grid , Collapse , Divider } from "@mui/material";

import { useState } from "react";

import CardItem from "./CardItem";
import PaginationComponent from "./PaginationComponent";

function valuetext(value) {
    return `${value}`;
}

function Explore(){
    
    const Header = styled.div `
        display: flex;
        flex-direction: column;
        align-items: center;
    `
    const prices = [
        {
          value: 'highest-price',
          label: 'Highest Price ',
        },
        {
          value: 'lowest-price',
          label: 'Lowest Price',
        },
    ];

    const categories = [
        {
            value: 'all-items',
            label: 'All Items',
        },
        {
            value: 'painting',
            label: 'Painting',
        },
        {
            value: 'digital',
            label: 'Digital',
        },
        {
            value: 'photograph',
            label: 'Photograph',
        },
    ];

    const publishedDate = [
        {
            value: 'oldest',
            label: 'Oldest',
        },
        {
            value: 'latest',
            label: 'Latest',
        },
    ];

    const [value, setValue] = useState([10, 30]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const numberOfCards = 24;
    const cards = Array.from({ length: numberOfCards }, (_, index) => index + 1);

    const [isOpen, setisOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 8;

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage)
    }
    

    return(
        <>
            <Box sx={{mt: 15, width: 0.9, display: "flex", flexDirection: "column", gap: 5, justifyContent: "center"}}>
                <Header>
                    <h1>Explore</h1>
                    <p>Buy and Sell NFTs</p>
                </Header>
                <Box sx={{display: "flex", flexDirection: "column", gap: 5 , width: 0.9 ,  mx: "auto" }}>
                    <Box sx={{width: 1, display: "flex", flexDirection: "row", justifyContent: "space-between", mx: "auto", alignItems: "center"}}>
                        <h1>Explore Products</h1>
                        <Button onClick={() => setisOpen(!isOpen)}
                        variant={!isOpen ? "contained" : "outlined"} 
                        color="primary" 
                        size="large" 
                        endIcon={!isOpen ? <FilterAltOutlinedIcon sx={{fill: "#2a2a2a"}}/> : <CloseIcon />}>
                        Filter
                        </Button>
                    </Box>                        
                    <Divider/>
                    <Collapse in={isOpen}>
                        <Box sx={{width: 1, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", mx: "auto"}}>
                            <TextField
                                id="select-prices"
                                select
                                label="ORDER BY"
                                defaultValue=""
                                variant="filled"
                                sx={{width: 0.2}}
                                >
                                {prices.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                id="select-catergory"
                                select
                                label="CATERGORY"
                                defaultValue=""
                                variant="filled"
                                sx={{width: 0.2}}
                                >
                                {categories.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                id="select-collections"
                                select
                                label="PUBLISHED DATE"
                                defaultValue=""
                                variant="filled"
                                sx={{width: 0.2}}
                                >
                                {publishedDate.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <Box>
                                <span>PRICE RANGE</span>
                                <Slider
                                    getAriaLabel={() => 'Temperature range'}
                                    value={value}
                                    onChange={handleChange}
                                    getAriaValueText={valuetext}
                                />
                                <span>Price: ${value[0]} - ${value[1]} </span>
                            </Box>
                        </Box>
                    </Collapse>
                    <Box sx={{ width: 1, mx: "auto" }}>
                    <Grid container spacing={4}>
                            {cards.map((card) => (
                                <Grid item key={card} xs={12} sm={6} md={4} lg={3}>
                                    <CardItem card={card} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
                <PaginationComponent cards={cards} itemsPerPage={itemsPerPage} currentPage={currentPage} onPageChange={handlePageChange} />
            </Box>
        </>
    )
}

export default Explore