import React, { useState, useEffect } from "react";
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
import Papa from "papaparse";

const CardItem = ({ index }) => {
  const [data, setData] = useState([]);
  const [isHovering, setIsHovering] = useState(null);

  useEffect(() => {
    fetch("../../data/dataset/assets.csv")
      .then((response) => response.text())
      .then((csvData) => {
        Papa.parse(csvData, {
          header: true,
          complete: (result) => {
            setData(result.data);
          },
        });
      })
      .catch((error) => {
        console.error("Error fetching CSV:", error);
      });
  }, []);

  const currentItem = data[index - 1];
  const [image] = useState(
    "https://source.unsplash.com/random?wallpapers?rand=" + index
  );

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
        <Link to={"/product"} style={{ textDecoration: "none" }}>
          <CardMedia
            component="div"
            sx={{
              pt: "100%",
            }}
            image={image}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h5" component="h2">
              {currentItem && currentItem.name}
            </Typography>
            <Typography>@ {currentItem && currentItem.authorId}</Typography>
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
          <Button variant="outlined" style={{ borderRadius: "2vw" }}>
            Payment
          </Button>
          <Link to={"/product"}>
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
};

export default CardItem;
