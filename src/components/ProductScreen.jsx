import NavBar from './NavBar'
import { Box , Divider } from "@mui/material";

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
    return (
        <>
            <NavBar />
                <Box sx={{mt: 15 , display: "flex" , flexDirection: "column" , alignItems: "center"}}>
                <h1>Product Details</h1>
                <Divider sx={styles.divider} />
            </Box>
        </>
    );
}

export default ProductScreen