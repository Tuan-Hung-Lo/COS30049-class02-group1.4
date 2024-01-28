import { Box , Card , CardActions , CardMedia , CardContent , Grid , Typography , Button } from "@mui/material";
import { Link } from 'react-router-dom';
import ImageCarousel from "./CarouselComponent";
import { useState } from "react";


function Dashboard() {

	const numberOfCards = 8;
	const cards = Array.from({ length: numberOfCards }, (_, index) => index + 1);

	const [isHovering, setIsHovering] = useState(null)

	return (
		<>
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
					<Box sx={{ width: 0.9, mx: "auto" }}>
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

export default Dashboard