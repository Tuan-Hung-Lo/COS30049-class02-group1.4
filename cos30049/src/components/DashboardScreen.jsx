import Search from "./Search.jsx"
import styled from "styled-components"

import SmallCard from "./SmallCard.jsx";

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
		width: 600px;
		height: 360px;
		background-color: #1C1C1C;
		border-radius: 20px;
		padding: 10px;
		img, h2, h3, p {
			margin: 0;
			padding: 0;
		}
	`;

	const ItemDisplay = styled.div`
		display: flex;
		overflow-x: hidden;
	`;

	return (
		<DashboardContainer>
			<Header>
				<div>
					<h1 style={{margin: 0}}>Dashboard</h1>
					<p style={{margin: 0}}>Buy and Sell NFTs</p>
				</div>
				<Search/>
			</Header>
			<div>
				<BidCard>
					<div>
						<img src="" alt="Item" />
						<h3>Elon&Doge | Smart Toy</h3>
						<p>Auction ending in</p>
						<br />
						<p>Current Bid</p>
						<h2>0.0245 BTC</h2>
						<button>Place a bid</button>
						<button>View Art</button>
					</div>
				</BidCard>
				<div>
					<h2>Top Artist</h2>
				</div>
			</div>
			<div>
				<div>
					<button>Collectible</button>
					<button>Arts</button>
					<button>Utility</button>
					<button>Sports</button>
					<button>Gaming</button>
				</div>
				<a href="#">View All →</a>
			</div>
			<ItemDisplay>
				<SmallCard></SmallCard>
				<SmallCard></SmallCard>
				<SmallCard></SmallCard>
				<SmallCard></SmallCard>
				<SmallCard></SmallCard>
			</ItemDisplay>
		</DashboardContainer>
	)
}

export default Dashboard
