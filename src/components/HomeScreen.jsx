import { Box , Grid , Button } from "@mui/material";
import { Link } from 'react-router-dom';
import ImageCarousel from "./CarouselComponent";
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import CardItem from "./CardItem";


function Dashboard() {

	const numberOfCards = 8;
	const cards = Array.from({ length: numberOfCards }, (_, index) => index + 1);

	return (
		<Fade in={true} timeout={1000}>
			<Box sx={{mt: 15 , width: 0.9 , display: "flex" , flexDirection: "column" , gap: 5 , justifyContent: "center" }}>
				<div style={{width: "auto",height: "auto",margin: "0 auto"}}>
					<ImageCarousel/>
				</div>
				<Box sx={{ display: "flex" , flexDirection: "column" , gap: 5 , alignItems: "center" }}>
					<Box sx={{display: "flex",	flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: 0.9}}>
						<h1>Explore Product</h1>
						<Link to='/explore' style={{textDecoration: "none"}}>
							<Button onClick={() => console.log("Button clicked")}>View All →</Button>
						</Link>
					</Box>
                    <Grow in={true} timeout={2500}>     
                        <Box sx={{ width: 0.9, mx: "auto" }}>
                            <Grid container spacing={4}>
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

export default Dashboard