import { useEffect, useRef } from "react";
import TOPOLOGY from "vanta/dist/vanta.topology.min";
import TextField from "@mui/material/TextField";
import { Button , Avatar , Grid , Box } from '@mui/material'
import { CssBaseline } from "@mui/material";
import { Link } from 'react-router-dom';
import Fade from '@mui/material/Fade';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


function RegisterPage() {
  const loginBackgroundRef = useRef(null);

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

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
        email: data.get('email'),
        password: data.get('password'),
        });
    };

  return (
    <div ref={loginBackgroundRef} style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <CssBaseline/>
        <Box sx={{ width: "50vw", height: "0vh", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", borderRadius: "30px", backdropFilter: "blur(2px)", backgroundColor: "#161616a6" }}>
            <Fade in={true} timeout={1500}>
                <Box
                sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "center" }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon sx={{fill: "#2a2a2a"}} />
                    </Avatar>
                    <h1>
                        Sign Up
                    </h1>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 , width: 0.5 , gap: 2}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                />
                            </Grid>
                        </Grid>
                        <Box sx={{display: "flex" , flexDirection: "column" ,alignItems: "center" , mt: 2 , gap: 2}}>
                            <Link to={'/'} >
                                <Button variant="contained" color="primary">
                                    Sign Up
                                </Button>
                            </Link>
                            <Link to={'/login'} variant="body2" style={{textDecoration: "none"}}>
                                Already have an account? Sign in
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Fade>
        </Box>
    </div>
  );
}

export default RegisterPage