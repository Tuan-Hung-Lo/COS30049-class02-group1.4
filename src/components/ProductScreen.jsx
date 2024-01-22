import NavBar from './NavBar'
import { Box , Divider , Card , CardMedia } from "@mui/material";
import styled from 'styled-components';

const styles = {
  root: {
    marginTop: 15,
    width: 0.9,
    display: "flex",
    flexDirection: "column",
    gap: 5,
    justifyContent: "center",
  },
  h1: {
    fontSize: 36,
    fontWeight: "bold",
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#000",
  },
};

function ProductScreen() {

    const Header = styled.div `
        display: flex;
        flex-direction: column;
        align-items: center;
    `

    return (
        <>
            <NavBar />
                <Box sx={{mt: 15 , display: "flex" , flexDirection: "column" , alignItems: "center"}}>
                <Header>
                    <h1>Product Detail</h1>
                    <p>Buy and Sell NFTs</p>
                </Header>
                <Divider sx={styles.divider} />
                <Box sx={{width: 1, display: "flex", flexDirection: "row", justifyContent: "space-between", mx: "auto", alignItems: "center"}}>
                    <Box sx={{backgroundColor: "#2a2a2a", width: 0.5}}>
                        <Card sx={{ position: "relative", display: 'flex', flexDirection: 'column', zIndex: 2}}
                        >
                            <CardMedia
                                component="div"
                                sx={{
                                // 16:9
                                // pt: '56.25%',
                                // 1:1
                                pt: '100%'
                                }}
                                image="https://source.unsplash.com/random?wallpapers"
                            />
                        </Card>
                    </Box>
                    <Box sx={{backgroundColor: "#2a2a2a", width: 0.4}}>
                        ubfowbwoiwcnn  
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default ProductScreen