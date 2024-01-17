import { useEffect, useRef } from "react"
import TRUNK from "vanta/dist/vanta.trunk.min"
import styled from "styled-components"
import TextField from '@mui/material/TextField'

function LoginPage() {
    const loginBackgroundRef = useRef(null)

    useEffect(() => {
        if (loginBackgroundRef.current){
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
                chaos: 2.00
            })
        }
    }, [])

    const Hr = styled.hr`
    height: 70%;
    border: 1px solid white;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0));
    `;
    

    return (
        <div ref={loginBackgroundRef} style={{width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div style={{width: "50vw", height: "50vh", display: "flex", flexDirection: "row",justifyContent: "space-around", alignItems: "center", borderRadius: "30px", backdropFilter: "blur(2px)", backgroundColor: "#161616a6"}}>
                <div style={{display:"flex", flexDirection:"column", gap:"1vh"}}>
                    <h1>Login</h1>
                    <TextField
                      id="Username"
                      label="Username"
                      value={""}
                      onChange={""}
                    />
                    <TextField
                    id="Password"
                    label="Password"
                    value={""}
                    onChange={""}
                  />
                </div>
                <Hr/>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default LoginPage