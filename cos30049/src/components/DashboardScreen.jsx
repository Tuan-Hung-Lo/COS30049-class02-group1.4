import Search from "./Search.jsx"
import styled from "styled-components"

import SmallCard from "./SmallCard.jsx";

import bidImage from "../assets/Item1.png"

function Dashboard() {
	const DashboardContainer = styled.div `
		margin: 0px;
	`;

	const Header = styled.div `
		display: flex;
		align-items: center;
		justify-content: space-between;
	`;

	const BidCard = styled.div`
		width: 60%;
		height: 360px;
		background-color: #1C1C1C;
		border-radius: 20px;
		padding: 20px;
		margin-right: 20px;
		img, h2, h3, p {
			margin: 0;
			padding: 0;
		}
	`;

	const TopArtistCard = styled.div`
		width: 40%;
		height: 360px;
		background-color: #1C1C1C;
		border-radius: 20px;
		padding: 20px;
		img, h2, h3, p {
			margin: 0;
			padding: 0;
		}
	`;

	const ItemDisplay = styled.div`
		width: 100%;
		overflow-x: auto;
		margin: 20px 0;
	`;

	const Button = styled.button`
		align-items: center;
        padding: 10px 20px;
		margin-right: 15px;
        border-radius: 50px;
        input {
            font-size: 16px;
            border: none;
            outline: none;
            background-color: transparent;
        }
        input::placeholder {
            color: #2A2A2A;
        }
        border: 1px solid #2A2A2A;
        background-color: #1C1C1C;
        max-width: 275px;
	`
	const BlueButton = styled(Button)`
	background-color: #0441D8;
  	`

	return (
		<DashboardContainer>
			<Header>
				<div>
					<h1 style={{margin: 0}}>Dashboard</h1>
					<p style={{margin: 0}}>Buy and Sell NFTs</p>
				</div>
				<Search/>
			</Header>
			<div style={{display: "flex", justifyContent: "space-between"}}>
				<BidCard>
					<div style={{display: "flex"}}>
						<div style={{width: "40%", height:"auto"}}>
							<img src={bidImage} alt="Item" style={{objectFit: "contain", width: "80%", borderRadius: "10px", margin: "0 auto"}}/>
						</div>
						<div style={{width: "60%", height:"auto"}}>
							<h2>Elon&Doge (Name) | Smart Toy (Catergory)</h2>
							<p>Auction ending in (Time)</p>
							<br />
							<p>Current Bid</p>
							<h1>0.0245 BTC</h1>
							<br />
							<BlueButton>Place a bid</BlueButton>
							<Button>View Art</Button>
						</div>
					</div>
				</BidCard>
				<TopArtistCard>
					<h2>Top Artist</h2>
				</TopArtistCard>
			</div>
			<div style={{display: "flex", justifyContent: "space-between", margin:"15px 0px"}}>
				<div>
					<BlueButton>Collectible</BlueButton>
					<Button>Arts</Button>
					<Button>Utility</Button>
					<Button>Sports</Button>
					<Button>Gaming</Button>
				</div>
				<a href="#" style={{textDecoration: "none"}}>View All →</a>
			</div>
			<ItemDisplay>
				<div style={{display: "flex",width: "fit-content"}}>
					<SmallCard></SmallCard>
					<SmallCard></SmallCard>
					<SmallCard></SmallCard>
					<SmallCard></SmallCard>
					<SmallCard></SmallCard>
					<SmallCard></SmallCard>
					<SmallCard></SmallCard>
				</div>
			</ItemDisplay>
		</DashboardContainer>
	)
}

export default Dashboard
