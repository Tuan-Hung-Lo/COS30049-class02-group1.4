import NavBar from './NavBar'
import { Box , Card , CardMedia , CardContent , Typography , CardActions , Button } from "@mui/material";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PaymentDialogDemo from './PurchaseScreen';

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
    ];

    return (
        <>
            <NavBar />
            <Box sx={{mt: 13 , display: "flex" , flexDirection: "column" , alignItems: "center" , width: 1 , gap: 2}}>
                <Header>
                    <h1>Product Detail</h1>
                </Header>
                <Box sx={{width: 0.8, display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center"}}>
                    <Box sx={{width: 0.75}}>
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
                            <Box sx={{ display: "flex" , flexDirection: "column" , justifyContent: "space-between" , width: 0.4}}>
                                <CardContent sx={{ display: "flex" , flexDirection: "column" , gap: 2}}>
                                    <Typography variant="h2">
                                    Item
                                    </Typography>
                                    <Typography variant="h8" color="#6A6A6A">
                                    Published Date:
                                    </Typography>
                                    <Typography variant="h8" color="#6A6A6A">
                                    Categories: {categories.map((option) => (
                                                    <Link to={"/explore"} key={option.value}>
                                                        <Button variant="contained" key={option.value} value={option.value} sx={{mx: 2}}> 
                                                            {option.label} 
                                                        </Button>
                                                    </Link>
                                                ))}
                                    </Typography>
                                    <Typography  variant="h4">
                                    @ Author
                                    </Typography>
                                    <Typography variant="h4" color="primary" sx={{fontWeight: "bold"}}>
                                    Value (ETH)
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{mx: "auto"}}>
                                    <PaymentDialogDemo />
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