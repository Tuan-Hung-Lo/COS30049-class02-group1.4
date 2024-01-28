import { useState } from 'react';
import { Box , Card , CardActions , CardMedia , CardContent , Grid , Typography , Button , Collapse } from '@mui/material'

import ShareIcon from '@mui/icons-material/Share';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

import { Link } from 'react-router-dom';

import Transaction from './Transaction';


function ProfileScreen() {

    const numberOfCards = 12;
    const cards = Array.from({ length: numberOfCards }, (_, index) => index + 1);

    const [isHovering, setIsHovering] = useState(null)

    const [isOpen, setisOpen] = useState("Owned")
	const buttons = ["Wallet" , "Owned" , "Sales" , "Transactions"]

	return (
		<>
			<Box sx={{mt: 12 , width: 1 , height: "300px" ,  position: "relative" , overflow: "hidden" , zIndex: 1 }}>
				<img src="src\assets\bg\bg-image-19.jpg" alt="" style={{objectFit: "fit" , width: "100%" }} />
			</Box>
			<Box sx={{mt: -12 , zIndex: 2 , display: "flex" , flexDirection: "column" , alignItem: "center" , gap: 2}}>
				<Box sx={{mx: "auto"}}>
					<img src="src\assets\Capture.jpg" alt="ava" style={{width: "200px" , borderRadius: "5px" , boxShadow: "5px 5px #2a2a2a8a"}} />
				</Box>
				<Box sx={{display: "flex" , flexDirection: "column" , justifyContent: "center" , alignItems: "center" , gap: 1}}>
					<h2 style={{margin: 0}}>
						<b>UserName</b>
					</h2>
					<Typography variant="h6" color="grey">
						user@email.com
					</Typography>
					<Box sx={{display: "flex" , flexDirection: "row" , justifyContent: "space-around" , width: 0.5}}>
						<FacebookIcon />
						<InstagramIcon />
						<XIcon />
					</Box>
					<div>
						<Button>
							<ShareIcon />
						</Button>
						<Link to={'/profile/editprofile'}>	
							<Button>
								<ModeEditIcon />
							</Button>
						</Link>
					</div>
				</Box>
			</Box>
			<Box sx={{ mt: 5 , display: "flex" , flexDirection: "column" , alignItems: "center", width: 0.8 , gap : 2}}>
				<Box sx={{display: "flex", width: "100%" , alignItems: "center", gap: "1vw"}}>
					{buttons.map((button) => (
						<Button onClick={() => setisOpen(button)} key={button} variant={button === isOpen ? "contained" : "outlined"} color="primary" style={{borderRadius:"5px"}}>
							{button}
						</Button>
					))}
				</Box>
				<Collapse in={"Wallet" === isOpen}>
					<Box sx={{ display: "flex" , flexDirection: "column", alignItems: "center"}}>
						<h1>Wallet Details:</h1>
						<h3>Wallet ID: 4yd918374d174ynd1987235yb</h3>
						<Button variant="text" color="primary">
							<ContentCopyIcon />					
						</Button>
					</Box>
				</Collapse>
				<Collapse in={"Owned" === isOpen}>
					<Box sx={{ width: 1 }}>
					<Grid container spacing={4}>
                            {cards.map((card) => (
                                <Grid item key={card} xs={12} sm={6} md={4} lg={3}>
                                    <Box 
                                    sx={{position: "relative"}}>
                                        <Box 
                                        sx={{top: isHovering === card ? "5%" : "1%", left: "1%" , position: "absolute", width: "98%" , height: "98%", background: "linear-gradient(170deg, transparent, #ffffff)", zIndex: 1, transformOrigin: "top left", transition: "0.3s ease-in-out" , rotate: isHovering === card ? "2deg" : "0", borderRadius: "4px"}}/>
                                        <Card 
                                            onMouseOver = {() => {setIsHovering(card)}} 
                                            onMouseOut = {() => {setIsHovering(null)}} 
                                            sx={{ position: "relative", height: '100%', display: 'flex', flexDirection: 'column', zIndex: 2}}
                                            >
                                            <Link to={'/product'} style={{textDecoration: "none"}}>
                                                <CardMedia
                                                component="div"
                                                sx={{
                                                // 16:9
                                                // pt: '56.25%',
                                                // 1:1
                                                pt: '100%',
                                                }}
                                                image="https://source.unsplash.com/random?wallpapers"
                                                />
                                                <CardContent sx={{ flexGrow: 1 }}>
                                                    <Typography variant="h5" component="h2">
                                                    Item #{card}
                                                    </Typography>
                                                    <Typography>
                                                    @ Owner
                                                    </Typography>
                                                    <Typography variant="h7" color="primary" sx={{fontWeight: "bold"}}>
                                                    Prices (BTC)
                                                    </Typography>
                                                </CardContent>
                                            </Link>
                                            <CardActions sx={{justifyContent: "space-around"}}>
                                                <Link to={'/product'}>
                                                    <Button variant="contained" style={{borderRadius:"1vw"}}>View</Button>
                                                </Link>
                                            </CardActions>
                                        </Card>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
					</Box>
				</Collapse>
				<Collapse in={"Sales" === isOpen}>
					<Box sx={{ width: 1, mx: "auto" }}>
						<Grid container spacing={4}>
							{cards.map((card) => (
								<Grid item key={card} xs={12} sm={6} md={4} lg={3}>
									<Box sx={{position: "relative"}}>
										<Box 
										sx={{top: isHovering === card ? "5%" : "1%", left: "1%" , position: "absolute", width: "98%" , height: "98%", background: "linear-gradient(170deg, transparent, #ffffff)", zIndex: 1, transformOrigin: "top left", transition: "0.3s ease-in-out" , rotate: isHovering === card ? "2deg" : "0", borderRadius: "4px"}}/>
										<Card onMouseOver = {() => {setIsHovering(card)}} onMouseOut = {() => {setIsHovering(null)}}
										sx={{ position: "relative", height: '100%', display: 'flex', flexDirection: 'column', zIndex: 2}}
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
											<CardContent sx={{ flexGrow: 1 }}>
                                                <Typography variant="h5" component="h2">
                                                Item
                                                </Typography>
                                                <Typography>
                                                @ Owner
                                                </Typography>
												<Typography variant="h7" color="primary" sx={{fontWeight: "bold"}}>
                                                Prices (BTC)
                                                </Typography>
                                            </CardContent>
                                            <CardActions sx={{justifyContent: "space-around"}}>
                                                <Button variant="contained" style={{borderRadius:"1vw"}}>View</Button>
                                            </CardActions>
										</Card>
									</Box>
								</Grid>
							))}
						</Grid>
					</Box>
				</Collapse>
				<Collapse in={"Transactions" === isOpen}>
					<Transaction />
				</Collapse>
			</Box>
		</>
	)
}

export default ProfileScreen