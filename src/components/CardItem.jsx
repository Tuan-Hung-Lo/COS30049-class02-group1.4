import { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PaymentDialogDemo from './PurchaseScreen';

const CardItem = ({ index, card }) => {
    // State to track hovering
    const [isHovering, setIsHovering] = useState(null);

    // Generating image URL based on index
    const [image] = useState("https://source.unsplash.com/random?wallpapers?rand=" + index);

    return (
        <Box sx={{ position: 'relative' }}>
            {/* Overlay for hover effect */}
            <Box
                sx={{
                    top: isHovering === card ? "5%" : "1%",
                    left: "1%",
                    position: "absolute",
                    width: "98%", height: "98%",
                    background: "linear-gradient(170deg, transparent, #ffffff)",
                    zIndex: 1,
                    transformOrigin: "top left",
                    transition: "0.3s ease-in-out",
                    rotate: isHovering === card ? "2deg" : "0",
                    borderRadius: "4px"
                }}
            />
            {/* Main card */}
            <Card
                onMouseOver={() => {
                    setIsHovering(card);
                }}
                onMouseOut={() => {
                    setIsHovering(null);
                }}
                sx={{
                    position: 'relative',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    zIndex: 2,
                }}
            >
                <Link to={'/product'} style={{ textDecoration: 'none' }}>
                    {/* Card media */}
                    <CardMedia
                        component="div"
                        sx={{
                            // 1:1 aspect ratio
                            pt: '100%',
                        }}
                        image={image}
                    />
                    {/* Card content */}
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography variant="h5" component="h2">
                            Item #{index}
                        </Typography>
                        <Typography>
                            @ Owner
                        </Typography>
                        <Typography variant="h7" color="primary" sx={{ fontWeight: 'bold' }}>
                            Prices (ETH)
                        </Typography>
                    </CardContent>
                </Link>
                {/* Card actions */}
                <CardActions sx={{ justifyContent: 'space-around' }}>
                    {/* Payment dialog */}
                    <PaymentDialogDemo />
                    {/* View button */}
                    <Link to={'/product'}>
                        <Button variant="outlined" style={{ borderRadius: '2vw' }}>View</Button>
                    </Link>
                </CardActions>
            </Card>
        </Box>
    );
};

// PropTypes for type checking
CardItem.propTypes = {
    card: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
};

export default CardItem;
