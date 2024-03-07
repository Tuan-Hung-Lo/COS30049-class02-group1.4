import { Box , Grid , Button } from "@mui/material";
import { Link } from 'react-router-dom';
import ImageCarousel from "./CarouselComponent";
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import CardItem from "./CardItem";

// Dashboard component
function Dashboard() {

    // Define the number of cards to display
    const numberOfCards = 8;
    // Create an array of cards
    const cards = Array.from({ length: numberOfCards }, (_, index) => index + 1);

    return (
        <Fade in={true} timeout={1000}>
            {/* Main container for the dashboard */}
            <Box sx={{mt: 15 , width: 0.9 , display: "flex" , flexDirection: "column" , gap: 5 , justifyContent: "center" }}>
                {/* Image carousel component */}
                <div style={{width: "auto",height: "auto",margin: "0 auto"}}>
                    <ImageCarousel/>
                </div>
                {/* Section for exploring products */}
                <Box sx={{ display: "flex" , flexDirection: "column" , gap: 5 , alignItems: "center" }}>
                    {/* Header for the explore section */}
                    <Box sx={{display: "flex",	flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: 0.9}}>
                        <h1>Explore Product</h1>
                        {/* Link to the explore page */}
                        <Link to='/explore' style={{textDecoration: "none"}}>
                            {/* Button to view all products */}
                            <Button onClick={() => console.log("Button clicked")}>View All →</Button>
                        </Link>
                    </Box>
                    {/* Grid for displaying product cards */}
                    <Grow in={true} timeout={2500}>     
                        <Box sx={{ width: 0.9, mx: "auto" }}>
                            <Grid container spacing={4}>
                                {/* Map through the cards array and render CardItem component */}
                                {cards.map((index, card) => (
                                    <Grid item key={card} xs={6} sm={6} md={4} lg={3}>
                                        <CardItem index={index} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Grow>
                </Box>
            </Box>
        </Fade>
    )
}

export default Dashboard;
