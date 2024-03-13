import { useState, useEffect } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CardItem = ({ index, item }) => {
  const [data, setData] = useState([]);
  const [isHovering, setIsHovering] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/assets")
      .then((response) => response.json())
      .then((apiData) => {
        console.log("API data:", apiData); // Log received data
        setData(apiData.assets);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);

  const currentItem = item || data[index - 1];

  if (!currentItem) {
    return null; // or render a loading state or handle it as you see fit
  }
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          top: isHovering === index ? "5%" : "1%",
          left: "1%",
          position: "absolute",
          width: "98%",
          height: "98%",
          background: "linear-gradient(170deg, transparent, #ffffff)",
          zIndex: 1,
          transformOrigin: "top left",
          transition: "0.3s ease-in-out",
          rotate: isHovering === index ? "2deg" : "0",
          borderRadius: "4px",
        }}
      />
      <Card
        onMouseOver={() => {
          setIsHovering(index);
        }}
        onMouseOut={() => {
          setIsHovering(null);
        }}
        sx={{
          position: "relative",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          zIndex: 2,
        }}
      >
        <Link
          to={`/product?${Object.entries(currentItem)
            .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
            .join("&")}`}
          style={{ textDecoration: "none" }}
        >
          <CardMedia
            component="div"
            sx={{
              pt: "100%",
            }}
            image={currentItem && currentItem.link}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h5" component="h2">
              {currentItem && currentItem.name}
            </Typography>
            <Typography> {currentItem && currentItem.username}</Typography>
            <Typography
              variant="h7"
              color="primary"
              sx={{ fontWeight: "bold" }}
            >
              Prices (ETH): {currentItem && currentItem.price}
            </Typography>
          </CardContent>
        </Link>
        <CardActions sx={{ justifyContent: "space-around" }}>
          <Link
            to={`/product?${Object.entries(currentItem)
              .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
              .join("&")}`}
          >
            <Button variant="outlined" style={{ borderRadius: "2vw" }}>
              View
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
};

CardItem.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
    price: PropTypes.number,
    // Add more propTypes as needed based on your 'item' structure
  }),
  updateFetchedData: PropTypes.func.isRequired,
};

export default CardItem;
