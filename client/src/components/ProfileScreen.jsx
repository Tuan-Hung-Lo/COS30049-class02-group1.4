import { useState, useEffect } from 'react';
import { Box, Grid, Typography, Button, Collapse, TextField, Divider, MenuItem, Slider, Grow, Tooltip } from '@mui/material'
import { jwtDecode } from "jwt-decode";


function ProfileScreen() {
	// Define the number of cards to display
	const numberOfCards = 12;
	const cards = Array.from({ length: numberOfCards }, (_, index) => index + 1);
	const itemsPerPage = 8;
	const [username, setUsername] = useState('');
	const [accountID, setAccountId] = useState();

	const [formUploadAsset, setFormUploadAsset] = useState({
		description: '',
		name: '',
		category: '',
		amount: '',
	});
	const [formUserData, setFormUserData] = useState({
		firstName: '',
		lastName: '',
		publicKey: '',
		password: '',
	});
	

	useEffect(() => {
		// Get the JWT token from localStorage
		const token = localStorage.getItem('accessToken');
		if (token) {
			// Decode the JWT token
			const decoded = jwtDecode(token);
			// Extract the username and accountId from the decoded payload
			const { accountId, username } = decoded;
			// Set the username and accountId in the state
			setUsername(username);
			setAccountId(accountId);
			// Update the authorId in the form state
			setFormUploadAsset(prevState => ({
				...prevState,
				authorId: accountId,
			}));
			setFormUserData(prevState => ({	
				...prevState,
				username: username,
			}));
		}
	}, []);

	// State variables
	const [isOpen, setIsOpen] = useState("User Info");
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const buttons = ["User Info"];

	

	const handleChangeUserData = (e) => {
		const { name, value } = e.target;
		setFormUserData((prevUserData) => ({
			...prevUserData,
			[name]: value,
		}));
	};
	const handleUploadAsset = (e) => {
		const { name, value } = e.target;
		setFormUploadAsset((prevUserData) => ({
			...prevUserData,
			[name]: value,
		}));
	
	}
	const handleSubmitUserData = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch('http://localhost:3001/api/update-profile', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					// Include your authentication token here if required
					// 'Authorization': `Bearer ${token}`
				},
				body: JSON.stringify(formUserData),
			});
			if (!response.ok) {
				throw new Error('Failed to update profile');
			}
			alert('Profile updated successfully');
		} catch (error) {
			console.error('Error updating profile:', error);
			alert('Failed to update profile');
		}
	};
	const handleSubmitUpload = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch('http://localhost:3001/api/upload-product', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					// Include your authentication token here if required
					// 'Authorization': `Bearer ${token}`
				},
				body: JSON.stringify(formUploadAsset),
			});
			if (!response.ok) {
				throw new Error('Failed to upload product');
			}
			alert('Product uploaded successfully');
			// Clear form fields after successful upload
			setFormUploadAsset({
				authorId: `${accountID}`,
				description: '',
				name: '',
				category: '',
				amount: '',
			});
		} catch (error) {
			console.error('Error uploading product:', error);
			alert('Failed to upload product');
		}
	};
	// Arrays for select options
	const prices = [
		{ value: 'highest-price', label: 'Highest Price ' },
		{ value: 'lowest-price', label: 'Lowest Price' },
	];

	const categories = [
		{ value: 'all-items', label: 'All Items' },
		{ value: 'painting', label: 'Painting' },
		{ value: 'digital', label: 'Digital' },
		{ value: 'photograph', label: 'Photograph' },
	];

	const publishedDate = [
		{ value: 'oldest', label: 'Oldest' },
		{ value: 'latest', label: 'Latest' },
	];

	// State variables for form data and slider value
	const [value, setValue] = useState([10, 70]);
	const [formData, setFormData] = useState({
		price: 0, // Initialize price state
	});

	// Extract name and gender from form data
	const { name, gender } = formData

	const formDataObj = new FormData()
	formDataObj.append('name', name)
	formDataObj.append('gender', gender)

	const handleChange = (event, newValue) => {
		setValue(newValue);
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const conversionRate = 2265.65;

	const [commissionFee, setCommissionFee] = useState(0);

	// Effect to calculate commission fee based on price
	useEffect(() => {
		// Calculate commission fee whenever price changes
		const calculateCommission = () => {
			const price = parseFloat(formData.price);
			const fee = price * conversionRate * 0.005; // 0.5% commission fee
			setCommissionFee(fee);
		};

		calculateCommission();
	}, [formData.price]);

	// Slider value text function
	function valuetext(value) {
		return `${value}`;
	}

	return (
		<>
			{/* Background image */}
			<Box sx={{ mt: 12, width: 1, height: "300px", position: "relative", overflow: "hidden", zIndex: 1 }}>
				<img src="src\assets\bg\bg-image-19.jpg" alt="" style={{ objectFit: "fit", width: "100%" }} />
			</Box>
			{/* Profile header */}
			<Box sx={{ mt: -12, zIndex: 2, display: "flex", flexDirection: "column", alignItem: "center", gap: 2 }}>
				<Box sx={{ mx: "auto" }}>
					<img src="src\assets\Capture.jpg" alt="ava" style={{ width: "200px", borderRadius: "5px", boxShadow: "5px 5px #2a2a2a8a" }} />
				</Box>
				<Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 1 }}>
					<h2 style={{ margin: 0 }}>
						<b>{username}</b>
					</h2>
				</Box>
			</Box>
			{/* Content section */}
			<Box sx={{ mt: 5, display: "flex", flexDirection: "column", alignItems: "center", width: 0.8, gap: 2 }}>
				{/* Buttons for section navigation */}
				<Box sx={{ display: "flex", width: "100%", alignItems: "center", gap: "1vw" }}>
					{buttons.map((button) => (
						<Button onClick={() => setIsOpen(button)} key={button} variant={button === isOpen ? "contained" : "outlined"} color="primary" style={{ borderRadius: "5px" }}>
							{button}
						</Button>
					))}
				</Box>
				{/* Section content */}
			</Box>
		</>
	)
}

export default ProfileScreen