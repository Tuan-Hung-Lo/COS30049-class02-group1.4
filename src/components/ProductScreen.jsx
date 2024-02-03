import { Box , CardMedia , CardContent , Typography , CardActions , Button, Grid, Grow, Slide } from "@mui/material";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PaymentDialogDemo from './PurchaseScreen';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SubjectIcon from '@mui/icons-material/Subject';
import CardItem from './CardItem';

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

    const numberOfCards = 4;
	const cards = Array.from({ length: numberOfCards }, (_, index) => index + 1);

    return (
        <Slide in={true} timeout={1500}>
            <Box sx={{mt: 13 , display: "flex" , flexDirection: "column" , alignItems: "center" , width: 0.9 , gap: 5}}>
                <Header>
                    <h1>Product Detail</h1>
                </Header>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6} style={{display:'flex', flexDirection: "column" , justifyContent:'center'}}>
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
                        <Accordion defaultExpanded>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                                <SubjectIcon />
                                Description
                            </AccordionSummary>
                            <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12} lg={6} style={{display:'flex', flexDirection: "column"}}>
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
                    </Grid>
                </Grid>
                <Box sx={{display: "flex",	flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: 1}}>
                    <h1>Explore more Products</h1>
                    <Link to='/explore' style={{textDecoration: "none"}}>
                        <Button onClick={() => console.log("Button clicked")}>View All →</Button>
                    </Link>
                </Box>
                <Grow in={true} timeout={2500}>     
                    <Box sx={{ width: 0.9, mx: "auto" }}>
                        <Grid container spacing={4}>
                        {cards.map((index, card) => (
                            <Grid item key={card} xs={12} sm={6} md={4} lg={3}>
                                <CardItem index={index} />
                            </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Grow> 
            </Box>
        </Slide>
    );
}

export default ProductScreen