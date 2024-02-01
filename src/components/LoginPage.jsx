import { useEffect, useRef, useState } from "react";
import TOPOLOGY from "vanta/dist/vanta.topology.min";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button'
import { Box } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { Link } from 'react-router-dom';
import Fade from '@mui/material/Fade';



function LoginPage() {
	const loginBackgroundRef = useRef(null);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");


	useEffect(() => {
		if (loginBackgroundRef.current) {
			TOPOLOGY({
				el: loginBackgroundRef.current,
				mouseControls: true,
				touchControls: true,
				gyroControls: false,
				minHeight: 200.00,
				minWidth: 200.00,
				scale: 1.00,
				scaleMobile: 1.00,
				color: 0x8a8a8a,
				backgroundColor: 0x0
			});
		}
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (username === "your_username" && password === "your_password") {
		// Replace with your own logic for successful login
		console.log("Login successful");
		// history.push("/");
		} else {
		// Replace with your own logic for failed login
		console.log("Invalid credentials");
		}
	};

	//   function onSignIn(googleUser) {
	//     var profile = googleUser.getBasicProfile();
	//     console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
	//     console.log('Name: ' + profile.getName());
	//     console.log('Image URL: ' + profile.getImageUrl());
	//     console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
	//   }

	return (
		<Box ref={loginBackgroundRef} sx={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
			<CssBaseline/>
			<Box sx={{ width: "50vw", height: "0vh", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", borderRadius: "30px", backdropFilter: "blur(2px)", backgroundColor: "#161616a6" }}>
				<Fade in={true} timeout={1500}>
					<div style={{ display: "flex", flexDirection: "column", gap: "2vh", alignItems: "center"}}>
						<h1>Login</h1>
						<form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", gap: "2vh",alignItems: "center" , width: "100%" }}>
							<TextField sx={{width: 1}}
							id="Username"
							label="Username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							/>
							<TextField sx={{width: 1}}
							id="Password"
							label="Password"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							/>
							<Link to={'/'} alt="Login Page" style={{textDecoration: "none"}}>
							<Button variant="contained" color="primary">
							Login
							</Button>
							</Link>
						</form>
						<div>
							<Link to={'/register'} alt="Register Page" style={{textDecoration: "none"}}>
							Haven&apos;t got an account yet? Register now.
							</Link>
						</div>
					</div>
				</Fade>
			</Box>
		</Box>
	);
}

export default LoginPage;