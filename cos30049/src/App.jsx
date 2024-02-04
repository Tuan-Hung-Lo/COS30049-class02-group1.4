import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Dashboard from "./components/DashboardScreen.jsx";
import Shopping from "./components/ShoppingScreen.jsx";
import Explore from "./components/ExploreScreen.jsx";
import Notification from "./components/NotificationScreen.jsx";
import Setting from "./components/SettingScreen.jsx";

import SideNavBar from "./components/SideNavBar.jsx";
import ProfileCard from "./components/ProfileCard.jsx";

function App() {
	const StyledCounter = styled.div `
		display: grid;
		grid-template-columns: 130px 1fr 400px;
		gap: 20px;
		height: 100vh;
		position: relative;
	`;

	const Main = styled.div `
		max-height: 100%;
		overflow-y: auto;
		padding: 10px;
	`;

	return(
		
		<BrowserRouter>
			<StyledCounter>
				<SideNavBar/>
				<Main>
					<Routes>
						<Route path="/" element={<Dashboard/>}></Route>
						<Route path="/shopping" element={<Shopping/>}></Route>
						<Route path="/explore" element={<Explore/>}></Route>
						<Route path="/notification" element={<Notification/>}></Route>
						<Route path="/setting" element={<Setting/>}></Route>
					</Routes>
				</Main>
				<ProfileCard/>
			</StyledCounter>
			
		</BrowserRouter>
	);
}

export default App
