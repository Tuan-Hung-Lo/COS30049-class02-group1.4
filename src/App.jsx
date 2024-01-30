import { BrowserRouter , Routes , Route } from "react-router-dom";
import styled from "styled-components";

import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx"

import LoginPage from "./components/LoginPage.jsx";
import RegisterPage from "./components/RegisterPage.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Dashboard from "./components/HomeScreen.jsx";
import Explore from "./components/ExploreScreen.jsx";
import ProductScreen from "./components/ProductScreen.jsx";
import ProfileScreen from "./components/ProfileScreen.jsx";
import EditProfile from "./components/EditProfilePage.jsx";
import WalletPage from "./components/WalletPage.jsx";

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
		background-color: #101010;
	`;

// 	const fetchData = async () => {
// 		try {
// 		const response = await fetch("http://api.coinlayer.com/live?access_key=7abf43d1fd7e9077861e7bb14a3d46fb");
// 		const data = await response.json();
// 		console.log(data);
// 		} catch (error) {
// 		console.error('Error fetching data:', error);
// 		}
//    };
//    fetchData()

	
	return(
		<BrowserRouter>
			<StyledCounter>
				<Main>
					<Routes>
						<Route path="/login" element={<LoginPage/>}></Route>
						<Route path="/register" element={<RegisterPage/>}></Route>
						<Route path="/" element={<><NavBar/><Dashboard/><Footer /></>}></Route>
						<Route path="/explore" element={<><NavBar/><Explore/><Footer /></>}></Route>
						<Route path="/wallet" element={<><NavBar/><WalletPage/><Footer /></>}></Route>
						<Route path="/product" element={<><NavBar/><ProductScreen/><Footer /></>}></Route>
						<Route path="/profile" element={<><NavBar/><ProfileScreen/><Footer /></>}></Route>
						<Route path="/profile/editprofile" element={<><NavBar/><EditProfile/><Footer /></>}></Route>
						<Route path="*" element={<><NavBar/><ErrorPage/><Footer /></>}></Route>
					</Routes>
				</Main>
			</StyledCounter>
		</BrowserRouter>	
	);
}

export default App
