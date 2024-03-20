import React from 'react'; // Import React
import { Box , CardMedia , CardContent , Typography , CardActions , Button, Grid, Grow, Slide } from "@mui/material";
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import PaymentDialogDemo from './PurchaseScreen';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SubjectIcon from '@mui/icons-material/Subject';
import CardItem from './CardItem';

function ProductScreen() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const item = {
        link: queryParams.get('link'),
        name: queryParams.get('name'),
        username: queryParams.get('username'),
        price: parseFloat(queryParams.get('price')),
        description: queryParams.get('description'),
        publishDate: queryParams.get('publishDate'),
    };
    // Styled component for header
    const Header = styled.div `
        display: flex;
        flex-direction: column;
        align-items: center;
    `;

    // Array of categories
    const categories = [
        {
            value: 'digital',
            label: 'Digital',
        },
    ];



    // JSX content for ProductScreen component
    return (
        <Slide in={true} timeout={1500}>
            <Box sx={{mt: 13 , display: "flex" , flexDirection: "column" , alignItems: "center" , width: 0.9 , gap: 5}}>
                {/* Header section */}
                <Header>
                    <h1>Product Detail</h1>
                </Header>
                {/* Grid container */}
                <Grid container spacing={2}>
                    {/* Left grid item */}
                    <Grid item xs={12} lg={6} style={{display:'flex', flexDirection: "column" , justifyContent:'center'}}>
                        {/* Card media for product image */}
                        <CardMedia
                            component="div"
                            sx={{
                                width: 1,
                                pt: '56.25%' // Aspect ratio 16:9
                            }}
                            image={item ? item.link : "Product Image"} // Sample image URL
                        />
                        {/* Accordion for product description */}
                        <Accordion defaultExpanded>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <SubjectIcon />
                                Description
                            </AccordionSummary>
                            <AccordionDetails>
                                {/* Dummy product description */}
                                {item ? item.description : "Product Name"}
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    {/* Right grid item */}
                    <Grid item xs={12} lg={6} style={{display:'flex', flexDirection: "column"}}>
                        {/* Card content section */}
                        <CardContent sx={{ display: "flex" , flexDirection: "column" , gap: 2}}>
                            <Typography variant="h2">
                                {item ? item.name : "Product Name"}
                            </Typography>
                            <Typography variant="h8" color="#6A6A6A">
                                Published Date: ${item ? item.publishDate : "N/A"}
                            </Typography>
                            <Typography variant="h8" color="#6A6A6A">
                                {/* Render categories as buttons with links */}
                                {categories.map((option) => (
                                    <Link to={"/explore"} key={option.value}>
                                        <Button variant="contained" key={option.value} value={option.value} sx={{mx: 2}}>
                                            {option.label}
                                        </Button>
                                    </Link>
                                ))}
                            </Typography>
                            <Typography  variant="h4">
                                {`@ ${item ? item.username : "Author"}`}
                            </Typography>
                            <Typography variant="h4" color="primary" sx={{fontWeight: "bold"}}>
                                {`Value (HETH): ${item ? item.price : "N/A"}`}
                            </Typography>
                        </CardContent>
                        {/* Card actions section */}
                        <CardActions sx={{mx: "auto"}}>
                            {/* Payment dialog component */}
                            <PaymentDialogDemo />
                        </CardActions>
                    </Grid>
                </Grid>
                {/* Section to explore more products */}

            </Box>
        </Slide>
    );
}

export default ProductScreen;
