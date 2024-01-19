import NavBar from './NavBar'
import Footer from './Footer'
import { useState } from 'react';
import { TextField , MenuItem , Box , Slider , Card , CardActions , CardMedia , CardContent , Grid , Typography , Collapse , Divider , Button } from '@mui/material'

function ProfileScreen() {

    const numberOfCards = 12;
    const cards = Array.from({ length: numberOfCards }, (_, index) => index + 1);

    const [isHovering, setIsHovering] = useState(null)

	return (
		<>
			<NavBar />
			<Box sx={{mt: 15 , display: "flex" , flexDirection: "column" , alignItems: "center", width: 0.9}}>
				<img src="src\assets\bg\bg-image-18.jpg" alt="" style={{objectFit: "contain" , overflow: "hidden"}}/>
				<h1>Profile</h1>
				<Box sx={{ width: 1, mx: "auto" }}>
					<Grid container spacing={4}>
						{cards.map((card) => (
							<Grid item key={card} xs={12} sm={6} md={4} lg={3} xl={2}>
								<Box sx={{position: "relative"}}>
									<Box 
									sx={{top: isHovering === card ? "5%" : "1%", left: "1%" , position: "absolute", width: "98%" , height: "98%", backgroundColor: "#0441D8", zIndex: 1, transformOrigin: "top left", transition: "0.3s ease-in-out" , rotate: isHovering === card ? "2deg" : "0", borderRadius: "4px"}}/>
									<Card onMouseOver = {() => {setIsHovering(card)}} onMouseOut = {() => {setIsHovering(null)}}
									sx={{ position: "relative", height: '100%', display: 'flex', flexDirection: 'column', zIndex: 2}}
									>
										<CardMedia
											component="div"
											sx={{
											// 16:9
											pt: '56.25%',
											}}
											image="https://source.unsplash.com/random?wallpapers"
										/>
										<CardContent sx={{ flexGrow: 1 }}>
											<Typography gutterBottom variant="h5" component="h2">
											Item
											</Typography>
											<Typography>
											This is a media card. You can use this section to describe the
											content.
											</Typography>
										</CardContent>
										<CardActions sx={{justifyContent: "space-around"}}>
											<Button variant="contained" style={{borderRadius:"1vw"}}>View</Button>
											<Button variant="outlined" style={{borderRadius:"1vw"}}>Edit</Button>
										</CardActions>
									</Card>
								</Box>
							</Grid>
						))}
					</Grid>
				</Box>
			</Box>
			<Footer />
		</>
	)
}

export default ProfileScreen