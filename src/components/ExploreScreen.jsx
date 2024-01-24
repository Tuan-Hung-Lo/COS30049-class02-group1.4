import styled from "styled-components";
import Button from '@mui/material/Button'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { TextField , MenuItem , Box , Slider , Card , CardActions , CardMedia , CardContent , Grid , Typography , Collapse , Divider } from "@mui/material";

import { useState } from "react";

import { Link } from "react-router-dom";

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

    const numberOfCards = 12;
    const cards = Array.from({ length: numberOfCards }, (_, index) => index + 1);

    const [isOpen, setisOpen] = useState(false)

    const [isHovering, setIsHovering] = useState(null)


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
                                    <Box 
                                    sx={{position: "relative"}}>
                                        <Box 
                                        sx={{top: isHovering === card ? "5%" : "1%", left: "1%" , position: "absolute", width: "98%" , height: "98%", backgroundColor: "#ffffff", zIndex: 1, transformOrigin: "top left", transition: "0.3s ease-in-out" , rotate: isHovering === card ? "2deg" : "0", borderRadius: "4px"}}/>
                                        <Card 
                                            onMouseOver = {() => {setIsHovering(card)}} 
                                            onMouseOut = {() => {setIsHovering(null)}} 
                                            sx={{ position: "relative", height: '100%', display: 'flex', flexDirection: 'column', zIndex: 2}}
                                            >
                                            <Link to={'/product'} style={{textDecoration: "none"}}>
                                                <CardMedia
                                                component="div"
                                                sx={{
                                                // 16:9
                                                // pt: '56.25%',
                                                // 1:1
                                                pt: '100%',
                                                }}
                                                image="https://source.unsplash.com/random?wallpapers"
                                                />
                                                <CardContent sx={{ flexGrow: 1 }}>
                                                    <Typography variant="h5" component="h2">
                                                    Item #{card}
                                                    </Typography>
                                                    <Typography>
                                                    @ Owner
                                                    </Typography>
                                                    <Typography variant="h7" color="primary" sx={{fontWeight: "bold"}}>
                                                    Prices (BTC)
                                                    </Typography>
                                                </CardContent>
                                            </Link>
                                            <CardActions sx={{justifyContent: "space-around"}}>
                                                <Button variant="contained" style={{borderRadius:"1vw"}}>Buy</Button>
                                                <Link to={'/product'}>
                                                    <Button variant="outlined" style={{borderRadius:"1vw"}}>View</Button>
                                                </Link>
                                            </CardActions>
                                        </Card>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Explore