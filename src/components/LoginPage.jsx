import { useEffect, useRef, useState } from "react";
import TRUNK from "vanta/dist/vanta.trunk.min";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button'
import { Link } from "@mui/material";

function LoginPage() {
  const loginBackgroundRef = useRef(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (loginBackgroundRef.current) {
      TRUNK({
        el: loginBackgroundRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x0547F0,
        backgroundColor: 0x101010,
        spacing: 8.00,
        chaos: 2.00,
      });
    }
  }, []);

  const Hr = styled.hr`
    height: 70%;
    border: 1px solid white;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0));
  `

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "your_username" && password === "your_password") {
      // Replace with your own logic for successful login
      console.log("Login successful");
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
    <div ref={loginBackgroundRef} style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div style={{ width: "50vw", height: "50vh", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", borderRadius: "30px", backdropFilter: "blur(2px)", backgroundColor: "#161616a6" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2vh", alignItems: "center"}}>
          <h1>Login</h1>
          <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", gap: "2vh",alignItems: "center" }}>
            <TextField
              id="Username"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              id="Password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link to={'/login'} alt="Login Page" style={{listStyle: "none"}}>
                <Button variant="contained" color="primary">
                    Login
                </Button>
            </Link>
          </form>
          <div>
            Haven&apos;t got an account yet? Register now.
          </div>
        </div>
        <Hr />
        <div></div>
      </div>
    </div>
  );
}

export default LoginPage;