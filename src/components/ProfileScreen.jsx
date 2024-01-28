import { useState } from 'react';
import { Box , Grid , Typography , Button , Collapse } from '@mui/material'

import ShareIcon from '@mui/icons-material/Share';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

import { Link } from 'react-router-dom';

import CardItem from './CardItem';
import Transaction from './Transaction';


function ProfileScreen() {

    const numberOfCards = 8;
    const cards = Array.from({ length: numberOfCards }, (_, index) => index + 1);

    const [isOpen, setisOpen] = useState("Owned")
	const buttons = ["User Info" , "Owned" , "Sales" , "Transactions"]

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
				<Collapse in={"User Info" === isOpen}>
					<h1>User Details:</h1>
					<Box sx={{ width: 1 , mt: 10}}>
						<Grid container spacing={4}>
							<Grid xs={12}>
								<Box>Email</Box>
							</Grid>
							<Grid xs={12}>
								<Box>Mobile</Box>
							</Grid>
							<Grid xs={12}>
								<Box>ID</Box>
							</Grid>
							<Grid xs={12}>
								<Box>Bank</Box>
							</Grid>
							<Grid xs={12}>
								<Box>Address</Box>
							</Grid>
						</Grid>
					</Box>
				</Collapse>
				<Collapse in={"Owned" === isOpen}>
					<Box sx={{ width: 1 }}>
					<Grid container spacing={4}>
                            {cards.map((card) => (
                                <Grid item key={card} xs={12} sm={6} md={4} lg={3}>
                                    <CardItem card={card} />
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
									<CardItem card={card} />
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