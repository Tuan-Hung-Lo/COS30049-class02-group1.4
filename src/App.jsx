import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Dashboard from "./components/HomeScreen.jsx";
import Shopping from "./components/ShoppingScreen.jsx";
import Explore from "./components/ExploreScreen.jsx";
import Notification from "./components/NotificationScreen.jsx";

import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
	const StyledCounter = styled.div `
		gap: 10vh;
		height: auto;
		position: relative;
		::-webkit-scrollbar {
  			display: none;
		}
	`;

	const Main = styled.div `
		margin-top: 100px;
		overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
		::-webkit-scrollbar {
  			display: none;
		}
		background-color: #161616;

	`;

	const fetchData = async () => {
		try {
		const response = await fetch("http://api.coinlayer.com/live?access_key=7abf43d1fd7e9077861e7bb14a3d46fb");
		const data = await response.json();
		console.log(data);
		} catch (error) {
		console.error('Error fetching data:', error);
		}
   };
   fetchData()

	
	return(

		<BrowserRouter>
			<StyledCounter>
				<NavBar/>
				<Main>
					<Routes>
						<Route path="/" element={<Dashboard/>}></Route>
						<Route path="/shopping" element={<Shopping/>}></Route>
						<Route path="/explore" element={<Explore/>}></Route>
						<Route path="/notification" element={<Notification/>}></Route>
					</Routes>
				</Main>
				<Footer/>
			</StyledCounter>
		</BrowserRouter>
	);
}

export default App
