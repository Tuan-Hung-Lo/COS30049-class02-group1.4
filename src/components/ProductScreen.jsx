import NavBar from './NavBar'
import { Box , Card , CardMedia , CardContent , Typography , CardActions , Button } from "@mui/material";
import styled from 'styled-components';

function ProductScreen() {

    const Header = styled.div `
        display: flex;
        flex-direction: column;
        align-items: center;
    `

    const categories = [
        {
            value: 'digital',
            label: 'Digital',
        },
        {
            value: 'photograph',
            label: 'Photograph',
        },
    ];

    return (
        <>
            <NavBar />
            <Box sx={{mt: 15 , display: "flex" , flexDirection: "column" , alignItems: "center" , width: 1 , gap: 2}}>
                <Header>
                    <h1>Product Detail</h1>
                    <p>Buy and Sell NFTs</p>
                </Header>
                <Box sx={{width: 0.8, display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center"}}>
                    <Box sx={{backgroundColor: "#2a2a2a", width: 1}}>
                        <Card sx={{width: 1, display: 'flex', flexDirection: 'row'}}
                        >
                            <CardMedia
                                component="div"
                                sx={{
                                    width: 1,
                                    // 16:9
                                    pt: '56.25%'
                                    // 1:1
                                    // pt: '100%'
                                }}
                                image="https://source.unsplash.com/random?wallpapers"
                            />
                            <Box sx={{ display: "flex" , flexDirection: "column" , justifyContent: "space-between" , width: 0.5}}>
                                <CardContent sx={{ display: "flex" , flexDirection: "column" , gap: 2}}>
                                    <Typography variant="h2">
                                    Item
                                    </Typography>
                                    <Typography variant="h8" color="#6A6A6A">
                                    Published Date:
                                    </Typography>
                                    <Typography variant="h8" color="#6A6A6A">
                                    Categories: {categories.map((option) => (
                                                    <Button variant="contained" key={option.value} value={option.value} sx={{mx: 2}}> {option.label} </Button>
                                                ))}
                                    </Typography>
                                    <Typography  variant="h4">
                                    @ Author
                                    </Typography>
                                    <Typography variant="h4" color="primary" sx={{fontWeight: "bold"}}>
                                    Value (BTC)
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{mx: "auto"}}>
                                    <Button variant="contained" size='large' style={{borderRadius:"1vw" }}>Buy</Button>
                                </CardActions>
                            </Box>
                        </Card>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default ProductScreen