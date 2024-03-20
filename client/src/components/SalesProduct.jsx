import { useState, useEffect } from 'react';
import { Box, Grid, Typography, Button, Collapse, TextField, Divider, MenuItem, Slider, Grow, Tooltip } from '@mui/material'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import CloseIcon from '@mui/icons-material/Close';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CardItem from './CardItem';
import PaginationComponent from './PaginationComponent.jsx';
import { jwtDecode } from "jwt-decode";

function SalesProduct(){
	// Define the number of cards to display
	const numberOfCards = 12;
	const cards = Array.from({ length: numberOfCards }, (_, index) => index + 1);
	const itemsPerPage = 8;

	// State variables
	const [isOpen, setIsOpen] = useState("User Info");
	const [isFilterOpen, setIsFilterOpen] = useState(false);
    
	// Arrays for select options
	const prices = [
		{ value: 'highest-price', label: 'Highest Price ' },
		{ value: 'lowest-price', label: 'Lowest Price' },
	];

	const categories = [
		{ value: 'all-items', label: 'All Items' },
		{ value: 'painting', label: 'Painting' },
		{ value: 'digital', label: 'Digital' },
		{ value: 'photograph', label: 'Photograph' },
	];

	const publishedDate = [
		{ value: 'oldest', label: 'Oldest' },
		{ value: 'latest', label: 'Latest' },
	];

	// State variables for form data and slider value
	const [value, setValue] = useState([10, 70]);
	const [formData, setFormData] = useState({
		price: 0, // Initialize price state
	});

	// Extract name and gender from form data
	const { name, gender } = formData

	const formDataObj = new FormData()
	formDataObj.append('name', name)
	formDataObj.append('gender', gender)

	const handleChange = (event, newValue) => {
		setValue(newValue);
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	// Slider value text function
	function valuetext(value) {
		return `${value}`;
	}

	// State variables for pagination
	const [currentPage, setCurrentPage] = useState(1)
	const [startIndex, setStartIndex] = useState((currentPage - 1) * itemsPerPage);
	const [endIndex, setEndIndex] = useState(startIndex + itemsPerPage)

    return(
        <Grow in={true} timeout={2000}>
            <Box sx={{ mt: 10, display: "flex", flexDirection: "column", alignItems: "center", width: 0.8, gap: 2 }}>
                <Box sx={{ width: 1, mx: "auto", display: "flex", flexDirection: "column", gap: 5, mt: 2 }}>
                            <Box sx={{ width: 1, display: "flex", flexDirection: "row", justifyContent: "space-between", mx: "auto", alignItems: "center" }}>
                                <h1>For Sales Products</h1>
                                <Button onClick={() => setIsFilterOpen(!isFilterOpen)}
                                    variant={!isFilterOpen ? "contained" : "outlined"}
                                    color="primary"
                                    size="large"
                                    endIcon={!isFilterOpen ? <FilterAltOutlinedIcon sx={{ fill: "#2a2a2a" }} /> : <CloseIcon />}>
                                    Filter
                                </Button>
                            </Box>
                            <Divider />
                            {/* Filter options */}
                            <Collapse in={isFilterOpen} timeout={750}>
                                <Box sx={{ width: 1, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", mx: "auto" }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={3} sx={{ display: "flex", justifyContent: "center" }}>
                                    <TextField
                                        id="select-prices"
                                        select
                                        label="ORDER BY"
                                        defaultValue=""
                                        variant="filled"
                                        sx={{ width: 0.9 }}
                                    >
                                        {prices.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} md={3} sx={{ display: "flex", justifyContent: "center" }}>
                                    <TextField
                                        id="select-catergory"
                                        select
                                        label="CATERGORY"
                                        defaultValue=""
                                        variant="filled"
                                        sx={{ width: 0.9 }}
                                    >
                                        {categories.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} md={3} sx={{ display: "flex", justifyContent: "center" }}>
                                    <TextField
                                        id="select-collections"
                                        select
                                        label="PUBLISHED DATE"
                                        defaultValue=""
                                        variant="filled"
                                        sx={{ width: 0.9 }}
                                    >
                                        {publishedDate.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} md={3} sx={{ display: "flex", justifyContent: "center" }}>
                                    <Box width={0.9}>
                                        <span>PRICE RANGE</span>
                                        <Slider
                                            getAriaLabel={() => 'Price range'}
                                            value={value}
                                            onChange={handleChange}
                                            getAriaValueText={valuetext}
                                            width={0.5}
                                        />
                                        <span>Price: ${value[0]} - ${value[1]}</span>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Collapse>
                    <Grow in={"Sales" === isOpen} timeout={2500}>
                        <Grid container spacing={4}>
                            {cards.map((index, card) => (
                                <Grid item key={card} xs={6} sm={6} md={4} lg={3}>
                                    <CardItem index={index} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grow>
                    {/* Pagination component */}
                    <PaginationComponent cards={cards} setCurrentPage={setCurrentPage} itemsPerPage={itemsPerPage} />
                </Box>
            </Box>
        </Grow>
    )
}

export default SalesProduct