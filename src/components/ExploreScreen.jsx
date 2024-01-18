import NavBar from "./NavBar"
import Footer from "./Footer";
import styled from "styled-components";
import Button from '@mui/material/Button'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { TextField , MenuItem , Box , Slider , Card , CardActions , CardMedia , CardContent , Grid , Typography , Collapse , Divider } from "@mui/material";

import { useState } from "react";


function valuetext(value) {
    return `${value}`;
}

function Explore(){
    const Header = styled.div `
        display: flex;
        flex-direction: column;
        align-items: center;
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

    const [value, setValue] = useState([10, 30]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const numberOfCards = 18;
    const cards = Array.from({ length: numberOfCards }, (_, index) => index + 1);

    const [isOpen, setisOpen] = useState(false)

    const [isHovering, setIsHovering] = useState(null)


    return(
        <>
            <NavBar />
            <Box sx={{mt: 15, width: 0.8, display: "flex", flexDirection: "column", gap: 5, justifyContent: "center"}}>
                <Header>
                    <h1>Explore</h1>
                    <p>Buy and Sell NFTs</p>
                </Header>
                <Box 
                sx={{display: "flex", flexDirection: "column", gap: 5}}>
                    <Box sx={{width: 1, display: "flex", flexDirection: "row", justifyContent: "space-between", mx: "auto", alignItems: "center"}}>
                        <h1>Explore Products</h1>
                        <Button onClick={() => setisOpen(!isOpen)}
                        variant={!isOpen ? "contained" : "outlined"} color="primary" size="large" endIcon={!isOpen ? <FilterAltOutlinedIcon/> : <CloseIcon />}>
                        Filter
                        </Button>
                    </Box>                        
                    <Divider/>
                    <Collapse in={isOpen}>
                        <Box sx={{width: 1, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", mx: "auto"}}>
                            <TextField
                                id="select-likes"
                                select
                                label="LIKES"
                                defaultValue="most_liked"
                                variant="filled"
                                sx={{width: 0.15}}
                                >
                                {likes.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                id="select-catergory"
                                select
                                label="CATERGORY"
                                defaultValue="category"
                                variant="filled"
                                sx={{width: 0.15}}
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
                                label="COLLECTIONS"
                                defaultValue="collections"
                                variant="filled"
                                sx={{width: 0.15}}
                                >
                                {collections.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                id="select-sale-types"
                                select
                                label="SALE TYPES"
                                defaultValue="sale_type"
                                variant="filled"
                                sx={{width: 0.15}}
                                >
                                {saleTypes.map((option) => (
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
                                <Grid item key={card} xs={12} sm={6} md={4} lg={3} xl={2}>
                                    <Box sx={{position: "relative"}}>
                                        <Box 
                                        sx={{top: isHovering === card ? "5%" : "1%", left: "1%" , position: "absolute", width: "98%" , height: "98%", backgroundColor: "#0441D8", zIndex: 1, transformOrigin: "top left", transition: "0.3s ease-in-out" , rotate: isHovering === card ? "2deg" : "0", borderRadius: "4px"}}/>
                                        <Card onMouseOver = {() => {setIsHovering(card)}} onMouseOut = {() => {setIsHovering(null)}}
                                        sx={{ position: "relative", height: '100%', display: 'flex', flexDirection: 'column', zIndex: 2}}
                                        >
                                            <CardMedia
                                                component="div"
                                                sx={{
                                                // 16:9
                                                pt: '56.25%',
                                                }}
                                                image="https://source.unsplash.com/random?wallpapers"
                                            />
                                            <CardContent sx={{ flexGrow: 1 }}>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                Item
                                                </Typography>
                                                <Typography>
                                                This is a media card. You can use this section to describe the
                                                content.
                                                </Typography>
                                            </CardContent>
                                            <CardActions sx={{justifyContent: "space-around"}}>
                                                <Button variant="contained" style={{borderRadius:"1vw"}}>View</Button>
                                                <Button variant="outlined" style={{borderRadius:"1vw"}}>Edit</Button>
                                            </CardActions>
                                        </Card>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default Explore