import Search from "./Search.jsx"
import styled from "styled-components"

import SmallCard from "./SmallCard.jsx";

import bidImage from "../assets/Item1.png"

import artistAvatar from "../assets/Item1.png"


function Dashboard() {
	const DashboardContainer = styled.div `
		margin: 0px;
		::-webkit-scrollbar {
  			display: none;
		}
		display: grid;
		gap: 20px;
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
		display: grid;
	`;

	const ArtistAvatar = styled.img`
		width: 50px;
		height: 50px;
		border-radius: 25px;
	`

	const Hr = styled.hr`
		border: 0;
		margin: auto 100px;
		height: 1px;
		background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0));
	`

	const ItemDisplay = styled.div`
		width: 100%;
		overflow-x: auto;
	`;

	const Button = styled.button`
		align-items: center;
        padding: 15px 40px;
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
	const BlueBorderButton = styled(Button)`
		border: 1px solid #0441D8;
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
			<div style={{display: "flex", justifyContent: "space-between", gap: "20px"}}>
				<BidCard>
					<div style={{display: "flex"}}>
						<div style={{width: "40%"}}>
							<img src={bidImage} alt="Item" style={{objectFit: "contain", width: "80%", borderRadius: "10px", margin: "0 auto"}}/>
						</div>
						<div style={{width: "60%", height:"100%"}}>
							<h3>Artist Name</h3>
							<h2>Elon&Doge (Name) | Smart Toy (Catergory)</h2>
							<p>Auction ending in (Time)</p>
							<br />
							<p>Current Bid</p>
							<h1>0.0245 BTC</h1>
							<div style={{display: "flex", justifyContent: "space-between"}}>
								<BlueButton>Place a bid</BlueButton>
								<BlueBorderButton>View Art</BlueBorderButton>
							</div>
						</div>
					</div>
				</BidCard>
				<TopArtistCard>
					<h2>Top Artist</h2>
					<div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
						<div style={{display: "flex", gap: "20px", alignItems: "center"}}>
							<ArtistAvatar src={artistAvatar}></ArtistAvatar>
							<div>
								<h3>Artist name</h3>
								<p>Number of Items</p>
							</div>
						</div>
						<a href="" style={{textDecoration: "none"}}>Follow</a>
					</div>
					<Hr />
					<div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
						<div style={{display: "flex", gap: "20px", alignItems: "center"}}>
							<ArtistAvatar src={artistAvatar}></ArtistAvatar>
							<div>
								<h3>Artist name</h3>
								<p>Number of Items</p>
							</div>
						</div>
						<a href="" style={{textDecoration: "none"}}>Follow</a>
					</div>
					<Hr />
					<div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
						<div style={{display: "flex", gap: "20px", alignItems: "center"}}>
							<ArtistAvatar src={artistAvatar}></ArtistAvatar>
							<div>
								<h3>Artist name</h3>
								<p>Number of Items</p>
							</div>
						</div>
						<a href="" style={{textDecoration: "none"}}>Follow</a>
					</div>
					<a href="#" style={{textDecoration: "none", margin: "auto auto"}}>View All →</a>
				</TopArtistCard>
			</div>
			<div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
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
				<div style={{display: "flex",width: "fit-content", gap: "30px"}}>
					<SmallCard></SmallCard>
					<SmallCard></SmallCard>
					<SmallCard></SmallCard>
					<SmallCard></SmallCard>
					<SmallCard></SmallCard>
					<SmallCard></SmallCard>
					<SmallCard></SmallCard>
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
