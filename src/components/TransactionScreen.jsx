import styled from "styled-components";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Card , CardActions , CardMedia , CardContent , Box , Grid , Typography , Button } from "@mui/material";

import * as React from 'react';

function valuetext(value) {
    return `${value}°C`;
}

function Transaction(){

    const Header = styled.div `
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    `;

    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
    setValue(newValue);
    };

    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


    return(
        <>
            <NavBar />
                <Box sx={{mt: 15, display: "flex", flexDirection: "column", gap: 20, width: 0.9}}>
                    <Header>
                        <h1>Transactions History</h1>
                        <p>Buy and Sell NFTs</p>
                    </Header>
                    <Box sx={{ width: 0.9, mx: "auto" }}>
                        <Grid container spacing={4}>
                            {cards.map((card) => (
                                <Grid item key={card} xs={12} sm={6} md={4} lg={3}>
                                    <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                    >
                                    <CardMedia
                                        component="div"
                                        sx={{
                                        // 16:9
                                        pt: '56.25%',
                                        }}
                                        image="https://source.unsplash.com/random?wallpapers"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                        Heading
                                        </Typography>
                                        <Typography>
                                        This is a media card. You can use this section to describe the
                                        content.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button variant="contained">View</Button>
                                        <Button variant="outlined">Edit</Button>
                                    </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            <Footer />
        </>
    );
}

export default Transaction