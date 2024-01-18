import styled from "styled-components"
import Button from '@mui/material/Button'
import ImageCarousel from "./CarouselComponent";

import NavBar from "./NavBar";
import Footer from "./Footer"

function Dashboard() {
	const DashboardContainer = styled.div `
		margin-top: 100px;
		::-webkit-scrollbar {
  			display: none;
		}
		display: flex;
		flex-direction: column;
		gap: 20px;
		width: 90vw;
		gap: 5vh;
	`;

	const Header = styled.div `
		display: flex;
		flex-direction: column;
		align-items: center;
	`;
	
	const TopCollection = styled.div`
		display: flex;
		flex-direction: column;
		gap: 5vh;
		align-items: center;
	`

	const ExploreProduct = styled.div`
		display: flex;
		flex-direction: column;
		gap: 5vh;
		align-items: center;
	`

	const ResponsiveGrid = styled.div`
		display: grid;
		width: 90%;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		gap: 20px;

		
		@media (max-width: 1600px) {
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}

		@media (max-width: 1200px) {
			grid-template-columns: 1fr 1fr 1fr;
		}
		
		@media (max-width: 1000px) {
			grid-template-columns: 1fr 1fr;
		}
		
		@media (max-width: 400px) {
			grid-template-columns: 1fr;
		}
	`

	const CustomGrid = styled(ResponsiveGrid)`

		grid-template-columns: 1fr 1fr 1fr 1fr;

		@media (max-width: 1500px) {
			grid-template-columns: 1fr 1fr 1fr;
		}
		
		@media (max-width: 1000px) {
			grid-template-columns: 1fr 1fr;
		}
		
		@media (max-width: 400px) {
			grid-template-columns: 1fr;
		}
	`

	const SquareItem = styled.div`
		display: block;
		content: "";
		padding-top: 100%;
		background-color: #5a5a5a;
		position: relative;
		div {
			top: 0;
			position: absolute;
			width: 100%;
			height: 100%;
		}
	`

	return (
		<>
			<NavBar />
			<DashboardContainer>
				<Header>
					<h1>Home</h1>
					<p>Buy and Sell NFTs</p>
				</Header>
				<div style={{width: "95%",height: "450px",margin: "0 auto"}}>
					<ImageCarousel/>
				</div>
				<TopCollection>
					<div style={{display: "flex",	flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: '90%'}}>
						<h1>Top Collections</h1>
						<a href="#" style={{textDecoration: "none"}}>View All →</a>
					</div>
					<CustomGrid>
						<SquareItem><div>Card</div></SquareItem>
						<SquareItem><div>Card</div></SquareItem>
						<SquareItem><div>Card</div></SquareItem>
						<SquareItem><div>Card</div></SquareItem>
					</CustomGrid>
				</TopCollection>
				<ExploreProduct>
					<div style={{display: "flex",	flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: '90%'}}>
						<h1>Explore Product</h1>
						<div style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1vw"}}>
							<Button variant="contained" color="primary" style={{borderRadius:"1vw"}}>All Items</Button>
							<Button variant="outlined" color="primary" style={{borderRadius:"1vw"}}>Art</Button>
							<Button variant="outlined" color="primary" style={{borderRadius:"1vw"}}>Music</Button>
							<Button variant="outlined" color="primary" style={{borderRadius:"1vw"}}>Video</Button>
							<Button variant="outlined" color="primary" style={{borderRadius:"1vw"}}>Collectible</Button>
							<Button variant="outlined" color="primary" style={{borderRadius:"1vw"}}>Highest</Button>
							<Button variant="outlined" color="primary" style={{borderRadius:"1vw"}}>Lowest</Button>
						</div>
					</div>
					<ResponsiveGrid>
						<div style={{height:"300px", backgroundColor:"#5a5a5a"}}>Card</div>
						<div style={{height:"300px", backgroundColor:"#5a5a5a"}}>Card</div>
						<div style={{height:"300px", backgroundColor:"#5a5a5a"}}>Card</div>
						<div style={{height:"300px", backgroundColor:"#5a5a5a"}}>Card</div>
						<div style={{height:"300px", backgroundColor:"#5a5a5a"}}>Card</div>
						<div style={{height:"300px", backgroundColor:"#5a5a5a"}}>Card</div>
						<div style={{height:"300px", backgroundColor:"#5a5a5a"}}>Card</div>
						<div style={{height:"300px", backgroundColor:"#5a5a5a"}}>Card</div>
						<div style={{height:"300px", backgroundColor:"#5a5a5a"}}>Card</div>
						<div style={{height:"300px", backgroundColor:"#5a5a5a"}}>Card</div>
					</ResponsiveGrid>
				</ExploreProduct>
			</DashboardContainer>
			<Footer />
		</>
	)
}

export default Dashboard
