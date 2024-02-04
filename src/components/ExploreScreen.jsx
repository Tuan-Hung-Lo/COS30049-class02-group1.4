import Button from '@mui/material/Button'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { TextField , MenuItem , Box , Slider , Grid , Collapse , Divider } from "@mui/material";
import { useEffect, useState } from "react";
import Grow from '@mui/material/Grow';
import PaginationComponent from './PaginationComponent';
import CardItem from './CardItem';

function valuetext() {
    return '${value}';
}

function Explore(){
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

    const [value, setValue] = useState([10, 70]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const numberOfCards = 12;
    const cards = Array.from({ length: numberOfCards }, (_, index) => index + 1);

    const [isOpen, setisOpen] = useState(false)

	const itemsPerPage = 8

	const [currentPage , setCurrentPage] = useState(1)

    const [startIndex, setStartIndex] = useState((currentPage - 1) * itemsPerPage);
	const [endIndex, setEndIndex] = useState(startIndex + itemsPerPage)

    useEffect(()=>{
        setStartIndex((currentPage - 1) * itemsPerPage)
        setEndIndex(((currentPage - 1) * itemsPerPage) + itemsPerPage)
    },[itemsPerPage, currentPage])


    return(
        <Grow in={true} timeout={1500}>
            <Box sx={{mt: 15, width: 0.9, display: "flex", flexDirection: "column", gap: 5, justifyContent: "center"}}>
                <Box sx={{display: "flex", flexDirection: "column", gap: 5 , width: 0.9 ,  mx: "auto" }}>
                    <Box sx={{width: 1, display: "flex", flexDirection: "row", justifyContent: "space-between", mx: "auto", alignItems: "center"}}>
                        <h1>NFT Products</h1>
                        <Button onClick={() => setisOpen(!isOpen)}
                        variant={!isOpen ? "contained" : "outlined"} 
                        color="primary" 
                        size="large" 
                        endIcon={!isOpen ? <FilterAltOutlinedIcon sx={{fill: "#2a2a2a"}}/> : <CloseIcon />}>
                        Filter
                        </Button>
                    </Box>                        
                    <Divider/>
                    <Collapse in={isOpen} timeout={750}>
                        <Box sx={{width: 1, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", mx: "auto"}}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={3} sx={{display: "flex", justifyContent: "center"}}>
                                    <TextField
                                        id="select-prices"
                                        select
                                        label="ORDER BY"
                                        defaultValue=""
                                        variant="filled"
                                        sx={{width: 0.9}}
                                        >
                                        {prices.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} md={3} sx={{display: "flex", justifyContent: "center"}}>
                                    <TextField
                                        id="select-catergory"
                                        select
                                        label="CATERGORY"
                                        defaultValue=""
                                        variant="filled"
                                        sx={{width: 0.9}}
                                        >
                                        {categories.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} md={3} sx={{display: "flex", justifyContent: "center"}}>
                                    <TextField
                                        id="select-collections"
                                        select
                                        label="PUBLISHED DATE"
                                        defaultValue=""
                                        variant="filled"
                                        sx={{width: 0.9}}
                                        >
                                        {publishedDate.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} md={3} sx={{display: "flex", justifyContent: "center"}}>
                                    <Box width={0.9}>
                                        <span>PRICE RANGE</span>
                                        <Slider
                                            getAriaLabel={() => 'Price range'}
                                            value={value}
                                            onChange={handleChange}
                                            getAriaValueText={valuetext}
                                        />
                                        <span>Price: ${value[0]} - ${value[1]}</span>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Collapse>
                    <Box sx={{ width: 1, mx: "auto" }}>
                        <Grid container spacing={4}>
                        {cards.slice(startIndex,endIndex).map((index, card) => (
                            <Grid item key={card} xs={6} sm={6} md={4} lg={3}>
                                <CardItem index={index} />
                            </Grid>
                            ))}
                        </Grid>
                        <PaginationComponent  cards = {cards} setCurrentPage={setCurrentPage} itemsPerPage={itemsPerPage}/>
                    </Box>
                </Box>
            </Box>
        </Grow>
    )
}

export default Explore