import styled from "styled-components"
import Button from '@mui/material/Button'
import ImageCarousel from "./CarouselComponent";

import NavBar from "./NavBar";

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
		justify-content: space-between;
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
		
		@media (max-width: 800px) {
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
		
		@media (max-width: 800px) {
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
			<NavBar/>
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
						<div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
							<div>
								<Button variant="text" color="primary">All Items</Button>
								<Button variant="text" color="primary">Art</Button>
								<Button variant="text" color="primary">Music</Button>
								<Button variant="text" color="primary">Video</Button>
								<Button variant="text" color="primary">Collectible</Button>
								<Button variant="text" color="primary">Highest</Button>
								<Button variant="text" color="primary">Lowest</Button>
							</div>
						</div>
					</div>
					<ResponsiveGrid>
						<div style={{ backgroundColor:"#5a5a5a"}}>Card</div>
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
						<div style={{height:"300px", backgroundColor:"#5a5a5a"}}>Card</div>
						<div style={{height:"300px", backgroundColor:"#5a5a5a"}}>Card</div>
						<div style={{height:"300px", backgroundColor:"#5a5a5a"}}>Card</div>
						<div style={{height:"300px", backgroundColor:"#5a5a5a"}}>Card</div>
						<div style={{height:"300px", backgroundColor:"#5a5a5a"}}>Card</div>
						<div style={{height:"300px", backgroundColor:"#5a5a5a"}}>Card</div>
					</ResponsiveGrid>
				</ExploreProduct>
			</DashboardContainer>
		</>
	)
}

export default Dashboard
