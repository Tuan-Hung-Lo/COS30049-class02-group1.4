import { BrowserRouter , Routes , Route } from "react-router-dom";
import styled from "styled-components";


import LoginPage from "./components/LoginPage.jsx";
import Dashboard from "./components/HomeScreen.jsx";
import Transaction from "./components/TransactionScreen.jsx";
import Explore from "./components/ExploreScreen.jsx";
import ProductScreen from "./components/ProductScreen.jsx";
import ProfileScreen from "./components/ProfileScreen.jsx";
import RegisterPage from "./components/RegisterPage.jsx";

function App() {
	const StyledCounter = styled.div `
		height: auto;
		position: relative;
		::-webkit-scrollbar {
  			display: none;
		}
	`;

	const Main = styled.div `
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
				<Main>
					<Routes>
						<Route path="/login" element={<LoginPage/>}></Route>
						<Route path="/register" element={<RegisterPage/>}></Route>
						<Route path="/" element={<Dashboard/>}></Route>
						<Route path="/explore" element={<Explore/>}></Route>
						<Route path="/shopping" element={<Transaction/>}></Route>
						<Route path="/product" element={<ProductScreen/>}></Route>
						<Route path="/profile" element={<ProfileScreen/>}></Route>
					</Routes>
				</Main>
			</StyledCounter>
		</BrowserRouter>	
	);
}

export default App
