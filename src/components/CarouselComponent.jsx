import BackgroundImage1 from '../assets/bg/bg-image-18.jpg'
import BackgroundImage2 from '../assets/bg/bg-image-19.jpg'
import BackgroundImage3 from '../assets/bg/bg-image-20.jpg'
import Carousel from 'react-bootstrap/Carousel';

import styled from 'styled-components'

function ImageCarousel() {
    const Image = styled.img`
        display: block;
        width: 100%;
    `

    const CustomCarousel = styled.div `
        height: 100%;
        .carousel-inner {
            height: 100% !important;
        }
    `

  return (
    <CustomCarousel>
        <Carousel
         style={{width: "100%",height: "100%",position: 'relative'}}
        >
        <Carousel.Item interval={2000} style={{width: "100%", height: "100%"}}>
            <Image
            src={BackgroundImage1}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000} style={{height: "100%"}}>
            <div style={{width: "100%", height: "100%"}}>
            <Image
            src={BackgroundImage2}
            alt="Second slide"
            />
            </div>
            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000} style={{width: "100%", height: "100%"}}>
            <Image
            src={BackgroundImage3}
            alt="Third slide"
            />
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </CustomCarousel>
  )
}

export default ImageCarousel