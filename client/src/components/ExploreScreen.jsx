import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import CloseIcon from "@mui/icons-material/Close";
import {
  TextField,
  MenuItem,
  Box,
  Slider,
  Grid,
  Collapse,
  Divider,
} from "@mui/material";
import Grow from "@mui/material/Grow";
import PaginationComponent from "./PaginationComponent";
import CardItem from "./CardItem";

function valuetext(value) {
  return `${value}`;
}

function Explore() {
  // Arrays for different options
  const categories = [
    {
      value: "All categories",
      label: "All Categories",
    },
    {
      value: "painting",
      label: "Painting",
    },
    {
      value: "digital",
      label: "Digital",
    },
    {
      value: "photograph",
      label: "Photograph",
    },
  ];

  const publishedDate = [
    {
      value: "All dates",
      label: "All Dates",
    },
    {
      value: "newest",
      label: "Newest",
    },
    {
      value: "oldest",
      label: "Oldest",
    },
  ];

  const [value, setValue] = useState([10, 70]);
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [selectedDate, setSelectedDate] = useState("All dates");
  const [filteredCards, setFilteredCards] = useState([]);

  // Handle slider change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Handle apply filter button click
  const applyFilter = () => {
    // Filter the cards based on selected options
    const filteredResults = cards.filter((card) => {
      // Filter by price
      const priceInRange = card.price >= value[0] && card.price <= value[1];
      // Filter by category
      const categoryMatches =
        selectedCategory === "All categories" ||
        card.category === selectedCategory;
      // Filter by published date
      let dateMatches = true;
      if (selectedDate === "oldest") {
        // If "Oldest" is selected, compare with the oldest date
        dateMatches = card.date === "oldest";
      } else if (selectedDate === "newest") {
        // If "Newest" is selected, compare with the newest date
        dateMatches = card.date === "newest";
      } else {
        dateMatches =
          selectedDate === "All dates" || card.date === selectedDate;
      }
      return priceInRange && categoryMatches && dateMatches;
    });

    // Sort filtered cards by time if "Oldest" or "Newest" is selected
    if (selectedDate === "oldest") {
      filteredResults.sort((a, b) => {
        // Assuming "date" is in a format suitable for comparison
        return new Date(a.date) - new Date(b.date);
      });
    } else if (selectedDate === "newest") {
      filteredResults.sort((a, b) => {
        // Assuming "date" is in a format suitable for comparison
        return new Date(b.date) - new Date(a.date);
      });
    }

    // Update filtered cards
    setFilteredCards(filteredResults);
  };

  // Number of cards to display
  const numberOfCards = 12;
  const cards = Array.from({ length: numberOfCards }, (_, index) => ({
    id: index + 1,
    price: Math.floor(Math.random() * 100),
    category: categories[Math.floor(Math.random() * categories.length)].value,
    date: publishedDate[Math.floor(Math.random() * publishedDate.length)].value,
  }));
  const itemsPerPage = 8;

  // State variables
  const [isOpen, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(
    (currentPage - 1) * itemsPerPage
  );
  const [endIndex, setEndIndex] = useState(startIndex + itemsPerPage);

  // Handle change in pagination or items per page
  useEffect(() => {
    applyFilter(); // Apply filter when component mounts
    setStartIndex((currentPage - 1) * itemsPerPage);
    setEndIndex((currentPage - 1) * itemsPerPage + itemsPerPage);
  }, [itemsPerPage, currentPage]);

  // Apply default filter on component mount
  useEffect(() => {
    setFilteredCards(cards); // Set initial filtered cards to all cards
  }, []); // Empty dependency array to run only once on mount

  return (
    <Grow in={true} timeout={1500}>
      <Box
        sx={{
          mt: 15,
          width: 0.9,
          display: "flex",
          flexDirection: "column",
          gap: 5,
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
            width: 0.9,
            mx: "auto",
          }}
        >
          <Box
            sx={{
              width: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              mx: "auto",
              alignItems: "center",
            }}
          >
            <h1>NFT Products</h1>
            <Button
              onClick={() => setOpen(!isOpen)}
              variant={!isOpen ? "contained" : "outlined"}
              color="primary"
              size="large"
              endIcon={
                !isOpen ? (
                  <FilterAltOutlinedIcon sx={{ fill: "#2a2a2a" }} />
                ) : (
                  <CloseIcon />
                )
              }
            >
              Filter
            </Button>
          </Box>
          <Divider />
          <Collapse in={isOpen} timeout={750}>
            <Box
              sx={{
                width: 1,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                mx: "auto",
              }}
            >
              <Grid container spacing={2}>
                {/* Dropdown for selecting category */}
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    id="select-category"
                    select
                    label="CATEGORY"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
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
                {/* Dropdown for published date */}
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    id="select-date"
                    select
                    label="PUBLISHED DATE"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
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
                {/* Slider for selecting price range */}
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Box width={0.9}>
                    <span>PRICE RANGE</span>
                    <Slider
                      getAriaLabel={() => "Price range"}
                      value={value}
                      onChange={handleChange}
                      getAriaValueText={valuetext}
                    />
                    <span>
                      Price: ${value[0]} - ${value[1]}
                    </span>
                  </Box>
                </Grid>
                {/* Button to apply filters */}
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={applyFilter}
                  >
                    Apply Filters
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
          <Box sx={{ width: 1, mx: "auto" }}>
            <Grid container spacing={4}>
              {/* Render card items */}
              {filteredCards.slice(startIndex, endIndex).map((card) => (
                <Grid item key={card.id} xs={6} sm={6} md={4} lg={3}>
                  <CardItem index={card.id} />
                </Grid>
              ))}
            </Grid>
            {/* Pagination component */}
            <PaginationComponent
              cards={filteredCards}
              setCurrentPage={setCurrentPage}
              itemsPerPage={itemsPerPage}
            />
          </Box>
        </Box>
      </Box>
    </Grow>
  );
}

export default Explore;
