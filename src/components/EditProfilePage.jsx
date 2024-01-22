import { useState } from 'react'
import {
	TextField,
	Button,
	FormControl,
	FormLabel,
	RadioGroup,
	FormControlLabel,
	Radio,
	Box,
	Grid,
} from '@mui/material'
import styled from 'styled-components';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import { Link } from 'react-router-dom';

function EditProfile() {

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		bio: '',
		gender: '',
		avatar: null,
		background: null,
	})

	const { name, email, bio, gender, avatar, background } = formData

	const handleChange = (e) => {
		setFormData({
		...formData,
		[e.target.name]: e.target.value,
		})
	}

	const VisuallyHiddenInput = styled('input')({
		clip: 'rect(0 0 0 0)',
		clipPath: 'inset(50%)',
		height: 1,
		overflow: 'hidden',
		position: 'absolute',
		bottom: 0,
		left: 0,
		whiteSpace: 'nowrap',
		width: 1,
	});

	const handleRadioChange = (e) => {
		setFormData({
		...formData,
		gender: e.target.value,
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		const formDataObj = new FormData()
		formDataObj.append('name', name)
		formDataObj.append('email', email)
		formDataObj.append('bio', bio)
		formDataObj.append('gender', gender)
		if (avatar) formDataObj.append('avatar', avatar)
		if (background) formDataObj.append('background', background)

		try {
		const response = await fetch('/api/user/profile', {
			method: 'PUT',
			headers: {
			// Include token in headers if required by the server
			},
			body: formDataObj,
		})

		if (response.ok) {
			// Handle successful update
		} else {
			// Handle error
		}
		} catch (error) {
		// Handle network error
		}
	}

	return (
		<Box sx={{ mt: 15 , display: "flex", flexDirection: "column", gap: 5 , width: 0.8 , justifyContent: "center" , alignItems: "center" }}>
			<Box sx={{width: 0.8 , display: "flex", flexDirection: "row", justifyContent: "space-between", mx: "auto", alignItems: "center"}}>
				<h1>Edit Profile</h1>
				<Link to={'/profile'}>
					<Button type="submit" variant="contained" color="primary">
						Save Changes
					</Button>
				</Link>
			</Box>  
			<Box component="form" noValidate onSubmit={handleSubmit} sx={{width: 0.8 , gap: 2}}>
				<Box sx={{ display: "flex-wrap", flexDirection: "row", justifyContent: "flex-start" , height: "auto" , alignItem: "center"}}>
					<Box sx={{ width: '50%', display: "flex", flexDirection: "column" , justifyContent: "space-between" , alignItems: "center" , gap: 2 , mx: "auto"}}>
						<h3>Change Your Profile Picture</h3>
						<Box sx={{ width: 200}}>
							<Box sx={{ width: '100%', paddingBottom: '100%' , boxShadow: "5px 5px #2a2a2a" , position: 'relative' }}>
								<img
									src="https://source.unsplash.com/random?wallpapers"
									alt="ava"
									style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '5px', objectFit: 'cover' }}
								/>
							</Box>
						</Box>
						<Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
							Upload file
							<VisuallyHiddenInput type="file" name="profileImage" inputProps={{ accept: 'image/*'}} />
						</Button>
					</Box>
					<Box sx={{ width: '50%', display: "flex", flexDirection: "column" , justifyContent: "space-between" , alignItems: "center" , gap: 2 ,  mx: "auto"}}>
						<h3>Change Your Background Image</h3>
						<Box sx={{ width: 400}}>
							<Box sx={{ width: '100%', paddingBottom: '50%' , boxShadow: "5px 5px #2a2a2a" , position: 'relative' }}>
								<img
									src="https://source.unsplash.com/random?wallpapers"
									alt="background"
									style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '5px', objectFit: 'cover' }}
								/>
							</Box>
						</Box>
						<Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
							Upload file
							<VisuallyHiddenInput type="file" name="backgroundImage" inputProps={{ accept: 'image/*'}}/>
						</Button>
					</Box>
				</Box>
				<Grid container spacing={2} sx={{alignItems: "center"}}>
					<Grid item xs={12} sm={6}>
						<TextField
						label="First Name"
						name="firstName"
						value={name}
						onChange={handleChange}
						fullWidth
						margin="normal"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
						label="Last Name"
						name="lastName"
						value={name}
						onChange={handleChange}
						fullWidth
						margin="normal"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
						label="Email"
						name="email"
						value={email}
						onChange={handleChange}
						fullWidth
						margin="normal"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
						label="Bio"
						name="bio"
						value={bio}
						onChange={handleChange}
						multiline
						rows={4}
						fullWidth
						margin="normal"
						/>
					</Grid>
				</Grid>
				<FormControl>
				<	FormLabel>Gender</FormLabel>
					<RadioGroup name="gender" value={gender} onChange={handleRadioChange}>
						<FormControlLabel value="male" control={<Radio />} label="Male" />
						<FormControlLabel value="female" control={<Radio />} label="Female" />
						<FormControlLabel value="other" control={<Radio />} label="Other" />
					</RadioGroup>
				</FormControl>
			</Box>
		</Box>
	)
}

export default EditProfile