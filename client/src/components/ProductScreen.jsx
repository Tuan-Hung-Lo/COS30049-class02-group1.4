import { Box , CardMedia , CardContent , Typography , CardActions , Button, Grid, Grow, Slide } from "@mui/material";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PaymentDialogDemo from './PurchaseScreen';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SubjectIcon from '@mui/icons-material/Subject';
import CardItem from './CardItem';

function ProductScreen() {
    // Styled component for header
    const Header = styled.div `
        display: flex;
        flex-direction: column;
        align-items: center;
    `

    // Array of categories
    const categories = [
        {
            value: 'digital',
            label: 'Digital',
        },
    ];

    // Number of cards to display
    const numberOfCards = 4;
    const cards = Array.from({ length: numberOfCards }, (_, index) => index + 1);

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
                            image="https://source.unsplash.com/random?wallpapers" // Sample image URL
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    {/* Right grid item */}
                    <Grid item xs={12} lg={6} style={{display:'flex', flexDirection: "column"}}>
                        {/* Card content section */}
                        <CardContent sx={{ display: "flex" , flexDirection: "column" , gap: 2}}>
                            <Typography variant="h2">
                                Item
                            </Typography>
                            <Typography variant="h8" color="#6A6A6A">
                                Published Date:
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
                                @ Author
                            </Typography>
                            <Typography variant="h4" color="primary" sx={{fontWeight: "bold"}}>
                                Value (ETH)
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
                <Box sx={{display: "flex",	flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: 1}}>
                    <h1>Explore more Products</h1>
                    <Link to='/explore' style={{textDecoration: "none"}}>
                        <Button onClick={() => console.log("Button clicked")}>View All →</Button>
                    </Link>
                </Box>
                {/* Grid to display more cards */}
                <Grow in={true} timeout={2500}>     
                    <Box sx={{ width: 0.9, mx: "auto" }}>
                        <Grid container spacing={4}>
                            {/* Map through cards to render CardItem component */}
                            {cards.map((index, card) => (
                                <Grid item key={card} xs={12} sm={6} md={4} lg={3}>
                                    <CardItem index={index} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Grow> 
            </Box>
        </Slide>
    );
}

export default ProductScreen
