import styled from "styled-components"
import { Box , Grid , Button } from "@mui/material";
import { Link } from 'react-router-dom';
import ImageCarousel from "./CarouselComponent";
import CardItem from "./CardItem";


function Dashboard() {

	const Header = styled.div `
		display: flex;
		flex-direction: column;
		align-items: center;
	`;

	const numberOfCards = 8;
	const cards = Array.from({ length: numberOfCards }, (_, index) => index + 1);

	return (
		<>
			<Box sx={{mt: 15 , width: 0.9 , display: "flex" , flexDirection: "column" , gap: 5 , justifyContent: "center" }}>
				<Header>
					<h1>Home</h1>
					<p>Buy and Sell NFTs</p>
				</Header>
				<div style={{width: "95%",height: "450px",margin: "0 auto"}}>
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
                                    <CardItem card={card} />
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
