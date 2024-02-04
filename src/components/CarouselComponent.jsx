import BackgroundImage1 from "../assets/bg/introduction.png";
import BackgroundImage2 from "../assets/bg/ethereum.png";
import BackgroundImage3 from "../assets/bg/wallet.png";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button'

import styled from "styled-components";

function ImageCarousel() {
  const Image = styled.img`
    display: block;
    width: 100%;
    height: 100%;
  `;

  const CustomCarousel = styled.div`
    .carousel-inner {
      height: 100% !important;
    }
    .carousel-caption {
        top: 5vh;
        padding-top: auto;
        display: flex;
        text-align: left;
        flex-wrap: wrap;
        align-content: center;
        right: 40vw;
        bottom: 30vh;
    }
    h1 {
        margin-top: 5vh;
        font-weight: 900;
        font-size: 3vw;
    }
    p {
        margin-top: 5px;
        font-size: 1.25vw;
    }
    .button {
        font-size: 1.25vw;
        padding: 0.75vw 1vw;
        margin-right: 1vw;
        margin-top: 3px;
    }
    #exr {
        background-color: black;
        color: white;
        border: 1px solid black;
        border-radius: 1vw;
        padding: 0.75vw 1vw;
    }
  `;

  return (
    <CustomCarousel>
      <Carousel style={{ maxWidth: "80vw", height: "auto", position: "relative" }}>
        <Carousel.Item
          interval={2000}
          style={{ maxWidth: "80vw", height: "auto" }}
        >
          <Image src={BackgroundImage1} alt="First slide" />
          <Carousel.Caption>
            <Link to={"/explore"}>
              {/* <Button variant="contained" className="button" style={{ borderRadius: "1vw" }}>
                Explore
              </Button> */}
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000} style={{ height: "100%" }}>
          <div style={{ width: "100%", height: "100%" }}>
            <Image src={BackgroundImage2} alt="Second slide" />
          </div>
          {/* <Carousel.Caption>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item
          interval={2000}
          style={{ width: "100%", height: "100%" }}
        >
          <Image src={BackgroundImage3} alt="Third slide" />
            {/* <Carousel.Caption>
              <Link to={{ pathname: "/wallet", search: "?open=Receive" }}>
                <Button variant="contained" className="button" style={{ borderRadius: "1vw" }}>
                  Receive
                </Button>
              </Link>
              <Link to={{ pathname: "/wallet", search: "?open=Send" }}>
                <Button variant="outlined" className="button" style={{ borderRadius: "1vw" }}>
                  Send
                </Button>
              </Link>
            </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </CustomCarousel>
  );
}

export default ImageCarousel