import { useState, useEffect } from 'react';
import { Box, Grid, Typography, Button, Collapse, TextField, Divider, MenuItem, Slider, Grow, Tooltip } from '@mui/material'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import CloseIcon from '@mui/icons-material/Close';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CardItem from './CardItem';
import PaginationComponent from './PaginationComponent.jsx';
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
	const buttons = ["User Info", "Owned", "Sales", "Add Product"];

	

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

	// State variables for pagination
	const [currentPage, setCurrentPage] = useState(1)
	const [startIndex, setStartIndex] = useState((currentPage - 1) * itemsPerPage);
	const [endIndex, setEndIndex] = useState(startIndex + itemsPerPage)

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
				{/* User Info section */}
				<Collapse in={true} timeout={1000}>
					<Box sx={{ width: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
						<form onSubmit={handleSubmitUserData}>
							<Grid container spacing={2} justifyContent={'center'}>
								<Grid item xs={8} sx={{ height: 'auto', display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', p: 2 }}>
									<h3>Personal Info</h3>
									<Grid container spacing={2}>
										<Grid item xs={12} md={6}>
											<TextField
												autoComplete="given-name"
												name="firstName"
												fullWidth
												id="firstName"
												label="First Name"
												autoFocus
												value={formUserData.firstName}
												onChange={handleChangeUserData}
											/>
										</Grid>
										<Grid item xs={12} md={6}>
											<TextField
												fullWidth
												id="lastName"
												label="Last Name"
												name="lastName"
												autoComplete="family-name"
												value={formUserData.lastName}
												onChange={handleChangeUserData}
											/>
										</Grid>
										<Grid item xs={12}>
											<TextField
												fullWidth
												id="publicKey"
												label="Public Key"
												name="publicKey"
												autoComplete="publicKey"
												value={formUserData.publicKey}
												onChange={handleChangeUserData}
											/>
										</Grid>
									</Grid>
								</Grid>
								<Grid item xs={8} sx={{ height: 'auto', display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', p: 2 }}>
									<h3>Account</h3>
									<Grid container spacing={2}>
										<Grid item xs={12} md={6}>
											<TextField
												fullWidth
												id="password"
												label="New Password"
												name="password"
												placeholder=""
												type="password"
												value={formUserData.password}
												onChange={handleChangeUserData}
											/>
										</Grid>
									</Grid>
								</Grid>
								<Grid item xs={8} sx={{ height: 'auto', display: 'flex', justifyContent: 'center', p: 2 }}>
									<Button variant="contained" color="primary" type="submit">
										Update Profile
									</Button>
								</Grid>
							</Grid>
						</form>
					</Box>
				</Collapse>
				{/* Owned Products section */}
				<Collapse in={"Owned" === isOpen} timeout={1000}>
					<Box sx={{ width: 1, display: "flex", flexDirection: "column", gap: 5, mt: 2 }}>
						<Box sx={{ width: 1, display: "flex", flexDirection: "row", justifyContent: "space-between", mx: "auto", alignItems: "center" }}>
							<h1>Owned Products</h1>
							<Button onClick={() => setIsFilterOpen(!isFilterOpen)}
								variant={!isFilterOpen ? "contained" : "outlined"}
								color="primary"
								size="large"
								endIcon={!isFilterOpen ? <FilterAltOutlinedIcon sx={{ fill: "#2a2a2a" }} /> : <CloseIcon />}>
								Filter
							</Button>
						</Box>
						<Divider />
						{/* Filter options */}
						<Collapse in={isFilterOpen} timeout={750}>
							<Box sx={{ width: 1, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", mx: "auto" }}>
								<Grid container spacing={2}>
									<Grid item xs={12} md={3} sx={{ display: "flex", justifyContent: "center" }}>
										<TextField
											id="select-prices"
											select
											label="ORDER BY"
											defaultValue=""
											variant="filled"
											sx={{ width: 0.9 }}
										>
											{prices.map((option) => (
												<MenuItem key={option.value} value={option.value}>
													{option.label}
												</MenuItem>
											))}
										</TextField>
									</Grid>
									<Grid item xs={12} md={3} sx={{ display: "flex", justifyContent: "center" }}>
										<TextField
											id="select-catergory"
											select
											label="CATERGORY"
											defaultValue=""
											variant="filled"
											sx={{ width: 0.9 }}
										>
											{categories.map((option) => (
												<MenuItem key={option.value} value={option.value}>
													{option.label}
												</MenuItem>
											))}
										</TextField>
									</Grid>
									<Grid item xs={12} md={3} sx={{ display: "flex", justifyContent: "center" }}>
										<TextField
											id="select-collections"
											select
											label="PUBLISHED DATE"
											defaultValue=""
											variant="filled"
											sx={{ width: 0.9 }}
										>
											{publishedDate.map((option) => (
												<MenuItem key={option.value} value={option.value}>
													{option.label}
												</MenuItem>
											))}
										</TextField>
									</Grid>
									<Grid item xs={12} md={3} sx={{ display: "flex", justifyContent: "center" }}>
										<Box width={0.9}>
											<span>PRICE RANGE</span>
											<Slider
												getAriaLabel={() => 'Price range'}
												value={value}
												onChange={handleChange}
												getAriaValueText={valuetext}
												width={0.5}
											/>
											<span>Price: ${value[0]} - ${value[1]}</span>
										</Box>
									</Grid>
								</Grid>
							</Box>
						</Collapse>
						<Grow in={"Owned" === isOpen} timeout={2500}>
							<Grid container spacing={4}>
								{cards.map((index, card) => (
									<Grid item key={card} xs={6} sm={6} md={4} lg={3}>
										<CardItem index={index} />
									</Grid>
								))}
							</Grid>
						</Grow>
						{/* Pagination component */}
						<PaginationComponent cards={cards} setCurrentPage={setCurrentPage} itemsPerPage={itemsPerPage} />
					</Box>
				</Collapse>
				{/* For Sales Products section */}
				<Collapse in={"Sales" === isOpen} timeout={1000}>
					<Box sx={{ width: 1, mx: "auto", display: "flex", flexDirection: "column", gap: 5, mt: 2 }}>
						<Box sx={{ width: 1, display: "flex", flexDirection: "row", justifyContent: "space-between", mx: "auto", alignItems: "center" }}>
							<h1>For Sales Products</h1>
							<Button onClick={() => setIsFilterOpen(!isFilterOpen)}
								variant={!isFilterOpen ? "contained" : "outlined"}
								color="primary"
								size="large"
								endIcon={!isFilterOpen ? <FilterAltOutlinedIcon sx={{ fill: "#2a2a2a" }} /> : <CloseIcon />}>
								Filter
							</Button>
						</Box>
						<Divider />
						{/* Filter options */}
						<Collapse in={isFilterOpen} timeout={750}>
							<Box sx={{ width: 1, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", mx: "auto" }}>
								<Grid container spacing={2}>
									<Grid item xs={12} md={3} sx={{ display: "flex", justifyContent: "center" }}>
										<TextField
											id="select-prices"
											select
											label="ORDER BY"
											defaultValue=""
											variant="filled"
											sx={{ width: 0.9 }}
										>
											{prices.map((option) => (
												<MenuItem key={option.value} value={option.value}>
													{option.label}
												</MenuItem>
											))}
										</TextField>
									</Grid>
									<Grid item xs={12} md={3} sx={{ display: "flex", justifyContent: "center" }}>
										<TextField
											id="select-catergory"
											select
											label="CATERGORY"
											defaultValue=""
											variant="filled"
											sx={{ width: 0.9 }}
										>
											{categories.map((option) => (
												<MenuItem key={option.value} value={option.value}>
													{option.label}
												</MenuItem>
											))}
										</TextField>
									</Grid>
									<Grid item xs={12} md={3} sx={{ display: "flex", justifyContent: "center" }}>
										<TextField
											id="select-collections"
											select
											label="PUBLISHED DATE"
											defaultValue=""
											variant="filled"
											sx={{ width: 0.9 }}
										>
											{publishedDate.map((option) => (
												<MenuItem key={option.value} value={option.value}>
													{option.label}
												</MenuItem>
											))}
										</TextField>
									</Grid>
									<Grid item xs={12} md={3} sx={{ display: "flex", justifyContent: "center" }}>
										<Box width={0.9}>
											<span>PRICE RANGE</span>
											<Slider
												getAriaLabel={() => 'Price range'}
												value={value}
												onChange={handleChange}
												getAriaValueText={valuetext}
												width={0.5}
											/>
											<span>Price: ${value[0]} - ${value[1]}</span>
										</Box>
									</Grid>
								</Grid>
							</Box>
						</Collapse>
						<Grow in={"Sales" === isOpen} timeout={2500}>
							<Grid container spacing={4}>
								{cards.map((index, card) => (
									<Grid item key={card} xs={6} sm={6} md={4} lg={3}>
										<CardItem index={index} />
									</Grid>
								))}
							</Grid>
						</Grow>
						{/* Pagination component */}
						<PaginationComponent cards={cards} setCurrentPage={setCurrentPage} itemsPerPage={itemsPerPage} />
					</Box>
				</Collapse>
				{/* Add Product section */}
				<Collapse in={"Add Product" === isOpen} timeout={1000}>
    <Box sx={{ width: 1, mx: "auto", display: "flex", flexDirection: "column", gap: 5 }}>
        <Box sx={{ width: 1, display: "flex", flexDirection: "row", mx: "auto", alignItems: "center" }}>
            <h1>Add New Product</h1>
        </Box>
        <Divider />
        <form onSubmit={handleSubmitUpload}>
            <Box sx={{ width: 1, display: "flex", flexDirection: "column", gap: 2 }}>
                {/* Placeholder for image */}
                <Box sx={{ width: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", gap: 2, mx: "auto" }}>
                    <Box sx={{ width: 1 }}>
                        <Box sx={{ width: '100%', paddingBottom: '100%', boxShadow: "5px 5px #1a1a1a", position: 'relative' }}>
                            <img
                                src="https://source.unsplash.com/random?wallpapers"
                                alt="ava"
                                style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '5px', objectFit: 'cover' }}
                            />
                        </Box>
                    </Box>
                    <Button component="label" variant="contained" startIcon={<CloudUploadIcon sx={{ fill: "#2a2a2a" }} />}>
                        Upload File
                        <input type="file" style={{ display: 'none' }} />
                    </Button>
                </Box>
                <TextField
                    id="product-name"
                    label="Product Name"
                    variant="outlined"
                    name="name"
                    value={formUploadAsset.name}
                    onChange={handleUploadAsset}
                />
                <TextField
                    id="product-description"
                    label="Product Description"
                    variant="outlined"
                    multiline
                    rows={4}
                    name="description"
                    value={formUploadAsset.description}
                    onChange={handleUploadAsset}
                />
                <TextField
                    id="product-category"
                    select
                    label="Product Category"
                    variant="outlined"
                    defaultValue=""
                    sx={{ width: "100%" }}
                    name="category"
                    value={formUploadAsset.category}
                    onChange={handleUploadAsset}
                >
                    {categories.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="product-amount"
                    label="Product Amount"
                    variant="outlined"
                    type="number"
                    inputProps={{ min: 0 }}
                    name="amount"
                    value={formUploadAsset.amount}
                    onChange={handleUploadAsset}
                />
                {/* Add more fields as needed */}
                <Button variant="contained" color="primary" size='large' type="submit">
                    Add Product
                </Button>
            </Box>
        </form>
    </Box>
</Collapse>

			</Box>
		</>
	)
}

export default ProfileScreen