import styled from "styled-components"
import { Box , Card , CardActions , CardMedia , CardContent , Grid , Typography , Button , Link } from "@mui/material";
import ImageCarousel from "./CarouselComponent";
import { useState } from "react";

import NavBar from "./NavBar";
import Footer from "./Footer"

function Dashboard() {

	const Header = styled.div `
		display: flex;
		flex-direction: column;
		align-items: center;
	`;

	const numberOfCards = 12;
	const cards = Array.from({ length: numberOfCards }, (_, index) => index + 1);

	const [isHovering, setIsHovering] = useState(null)

    const [isOpen, setisOpen] = useState("All Items")

	const buttons = ["All Items" , "Art" , "Collectible" , "Highest" , "Lowest" ]

	return (
		<>

			<NavBar />
			<Box sx={{mt: 15 , width: 0.9 , display: "flex" , flexDirection: "column" , gap: 5 , justifyContent: "center" }}>
				<Header>
					<h1>Home</h1>
					<p>Buy and Sell NFTs</p>
				</Header>
				<div style={{width: "95%",height: "450px",margin: "0 auto"}}>
					<ImageCarousel/>
				</div>
				<Box 
				sx={{ display: "flex" , flexDirection: "column" , gap: 5 , alignItems: "center" }}>
					<Box style={{display: "flex",	flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: '90%'}}>
						<h1>Explore Product</h1>
						<Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1vw"}}>
							{buttons.map((button) => (
								<Button onClick={() => setisOpen(button)} key={button} variant={button === isOpen ? "contained" : "outlined"} color="primary" sx={{borderRadius:"1vw"}}>
									{button}
								</Button>
							))}
							<Link to={'/explore'}>
								<Button sx={{borderRadius:"1vw"}}>
									View All →
								</Button>
							</Link>
						</Box>
					</Box>
					<Box 
					sx={{ width: 0.9, mx: "auto" }}>
                        <Grid container spacing={4}>
                            {cards.map((card) => (
                                <Grid item key={card} xs={12} sm={6} md={4} lg={3} xl={2}>
                                    <Box 
									sx={{position: "relative"}}>
                                        <Box 
                                        sx={{top: isHovering === card ? "5%" : "1%", left: "1%" , position: "absolute", width: "98%" , height: "98%", backgroundColor: "#0441D8", zIndex: 1, transformOrigin: "top left", transition: "0.3s ease-in-out" , rotate: isHovering === card ? "2deg" : "0", borderRadius: "4px"}}/>
                                        <Card onMouseOver = {() => {setIsHovering(card)}} onMouseOut = {() => {setIsHovering(null)}}
                                        sx={{ position: "relative", height: '100%', display: 'flex', flexDirection: 'column', zIndex: 2}}
                                        >
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
                                                Item
                                                </Typography>
                                                <Typography>
                                                @ Owner
                                                </Typography>
												<Typography variant="h7" sx={{color: "#0441D8" , fontWeight: "bold"}}>
                                                Prices (BTC)
                                                </Typography>
                                            </CardContent>
                                            <CardActions sx={{justifyContent: "space-around"}}>
                                                <Button variant="contained" style={{borderRadius:"1vw"}}>Buy</Button>
                                                <Button variant="outlined" style={{borderRadius:"1vw"}}>View</Button>
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

export default Dashboard
