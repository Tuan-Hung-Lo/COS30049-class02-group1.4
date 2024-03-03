import { useState, useEffect } from 'react';
import { Box , Grid , Typography , Button , Collapse, TextField, Divider, MenuItem, Slider , Grow, Tooltip } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import CloseIcon from '@mui/icons-material/Close';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CardItem from './CardItem';


function ProfileScreen() {
	// Define the number of cards to display
	const numberOfCards = 12;
    const cards = Array.from({ length: numberOfCards }, (_, index) => index + 1);

	// State variables
    const [isOpen, setIsOpen] = useState("User Info");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const buttons = ["User Info", "Owned", "Sales", "Add Product"];

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
	const { name, gender} = formData

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
			<Box sx={{mt: 12 , width: 1 , height: "300px" ,  position: "relative" , overflow: "hidden" , zIndex: 1 }}>
				<img src="src\assets\bg\bg-image-19.jpg" alt="" style={{objectFit: "fit" , width: "100%" }} />
			</Box>
			{/* Profile header */}
			<Box sx={{mt: -12 , zIndex: 2 , display: "flex" , flexDirection: "column" , alignItem: "center" , gap: 2}}>
				<Box sx={{mx: "auto"}}>
					<img src="src\assets\Capture.jpg" alt="ava" style={{width: "200px" , borderRadius: "5px" , boxShadow: "5px 5px #2a2a2a8a"}} />
				</Box>
				<Box sx={{display: "flex" , flexDirection: "column" , justifyContent: "center" , alignItems: "center" , gap: 1}}>
					<h2 style={{margin: 0}}>
						<b>UserName</b>
					</h2>
					{/* Social media icons */}
					<Box sx={{display: "flex" , flexDirection: "row" , justifyContent: "space-around" , width: 0.5}}>
						<FacebookIcon />
						<InstagramIcon />
						<XIcon />
					</Box>
					{/* Action buttons */}
					<Box>
						<Tooltip title="Share your profile">
							<Button>
								<ShareIcon />
							</Button>
						</Tooltip>
					</Box>
				</Box>
			</Box>
			{/* Content section */}
			<Box sx={{ mt: 5 , display: "flex" , flexDirection: "column" , alignItems: "center", width: 0.8 , gap : 2}}>
				{/* Buttons for section navigation */}
				<Box sx={{display: "flex", width: "100%" , alignItems: "center", gap: "1vw"}}>
					{buttons.map((button) => (
						<Button onClick={() => setIsOpen(button)} key={button} variant={button === isOpen ? "contained" : "outlined"} color="primary" style={{borderRadius:"5px"}}>
							{button}
						</Button>
					))}
				</Box>
				{/* Section content */}
				{/* User Info section */}
				<Collapse in={"User Info" === isOpen} timeout={1000}>
					{/* User information fields */}
					<Box sx={{ width: 1 , display: "flex" , flexDirection: "column", alignItems: "center" , gap: 2 }}>
						<Grid container spacing={2} justifyContent={"center"} >
							<Grid item xs={8} sx={{ height: "auto" , display: "flex" , flexDirection: "column" , gap: 2 , alignItems: "center" , p: 2}}>
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
										/>
									</Grid>
									<Grid item xs={12} md={6}>
										<TextField
										fullWidth
										id="lastName"
										label="Last Name"
										name="lastName"
										autoComplete="family-name"
										/>
									</Grid>
									<Grid item xs={12}>
										{/* Public Address Key field */}
										<TextField
										fullWidth
										id="publicKey"
										label="Public Key"
										name="publicKey"
										autoComplete="publicKey"
										/>
									</Grid>
									<Grid item xs={12}>
										{/* Private Address Key field */}
										<TextField
										fullWidth
										id="privateKey"
										label="Private Key"
										name="privateKey"
										autoComplete="privateKey"
										/>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={8} sx={{ height: "auto" , display: "flex" , flexDirection: "column" , gap: 2 , alignItems: "center" , p: 2}}>
								<h3>Account</h3>
								<Grid container spacing={2}>
									<Grid item xs={12}>
										<TextField
										autoComplete="username"
										name="username"
										fullWidth
										id="username"
										label="Username"
										placeholder='Username'
										value={"UserName"}
										InputProps={{
											focused: true,
										}}
										/>
									</Grid>
									<Grid item xs={12} md={6}>
										<TextField
										fullWidth
										id="currentPassword"
										label="Current Password"
										name="currentPassword"
										autoComplete="currentPassword"
										/>
									</Grid>
									<Grid item xs={12} md={6}>
										<TextField
										fullWidth
										id="newPassword"
										label="New Password"
										name="newPassword"
										placeholder=''
										/>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Box>
				</Collapse>
				{/* Owned Products section */}
				<Collapse in={"Owned" === isOpen} timeout={1000}> 
					<Box sx={{ width: 1 , display: "flex" , flexDirection: "column" , gap: 5 , mt: 2}}>
						<Box sx={{width: 1, display: "flex", flexDirection: "row", justifyContent: "space-between", mx: "auto", alignItems: "center"}}>
							<h1>Owned Products</h1>
							<Button onClick={() => setIsFilterOpen(!isFilterOpen)}
							variant={!isFilterOpen ? "contained" : "outlined"} 
							color="primary" 
							size="large" 
							endIcon={!isFilterOpen ? <FilterAltOutlinedIcon sx={{fill: "#2a2a2a"}}/> : <CloseIcon />}>
							Filter
							</Button>
						</Box>
						<Divider/>
						{/* Filter options */}
						<Collapse in={isFilterOpen} timeout={750}>
							<Box sx={{width: 1, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", mx: "auto"}}>
								<Grid container spacing={2}>
									<Grid item xs={12} md={3} sx={{display: "flex", justifyContent: "center"}}>
										<TextField
											id="select-prices"
											select
											label="ORDER BY"
											defaultValue=""
											variant="filled"
											sx={{width: 0.9}}
											>
											{prices.map((option) => (
												<MenuItem key={option.value} value={option.value}>
												{option.label}
												</MenuItem>
											))}
										</TextField>
									</Grid>
									<Grid item xs={12} md={3} sx={{display: "flex", justifyContent: "center"}}>
										<TextField
											id="select-catergory"
											select
											label="CATERGORY"
											defaultValue=""
											variant="filled"
											sx={{width: 0.9}}
											>
											{categories.map((option) => (
												<MenuItem key={option.value} value={option.value}>
												{option.label}
												</MenuItem>
											))}
										</TextField>
									</Grid>
									<Grid item xs={12} md={3} sx={{display: "flex", justifyContent: "center"}}>
										<TextField
											id="select-collections"
											select
											label="PUBLISHED DATE"
											defaultValue=""
											variant="filled"
											sx={{width: 0.9}}
											>
											{publishedDate.map((option) => (
												<MenuItem key={option.value} value={option.value}>
												{option.label}
												</MenuItem>
											))}
										</TextField>
									</Grid>
									<Grid item xs={12} md={3} sx={{display: "flex", justifyContent: "center"}}>
										<Box  width={0.9}>
											<span>PRICE RANGE</span>
											<Slider
												getAriaLabel={() => 'Price range'}
												value={value}
												onChange={handleChange}
												getAriaValueText={valuetext}
												width= {0.5}
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
					</Box>
				</Collapse>
				{/* For Sales Products section */}
				<Collapse in={"Sales" === isOpen} timeout={1000}>
					<Box sx={{ width: 1, mx: "auto" , display: "flex" , flexDirection: "column" , gap: 5 , mt: 2 }}>
						<Box sx={{width: 1, display: "flex", flexDirection: "row", justifyContent: "space-between", mx: "auto", alignItems: "center"}}>
							<h1>For Sales Products</h1>
							<Button onClick={() => setIsFilterOpen(!isFilterOpen)}
							variant={!isFilterOpen ? "contained" : "outlined"} 
							color="primary" 
							size="large" 
							endIcon={!isFilterOpen ? <FilterAltOutlinedIcon sx={{fill: "#2a2a2a"}}/> : <CloseIcon />}>
							Filter
							</Button>
						</Box>
						<Divider/>
						{/* Filter options */}
						<Collapse in={isFilterOpen} timeout={750}>
							<Box sx={{width: 1, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", mx: "auto"}}>
								<Grid container spacing={2}>
									<Grid item xs={12} md={3} sx={{display: "flex", justifyContent: "center"}}>
										<TextField
											id="select-prices"
											select
											label="ORDER BY"
											defaultValue=""
											variant="filled"
											sx={{width: 0.9}}
											>
											{prices.map((option) => (
												<MenuItem key={option.value} value={option.value}>
												{option.label}
												</MenuItem>
											))}
										</TextField>
									</Grid>
									<Grid item xs={12} md={3} sx={{display: "flex", justifyContent: "center"}}>
										<TextField
											id="select-catergory"
											select
											label="CATERGORY"
											defaultValue=""
											variant="filled"
											sx={{width: 0.9}}
											>
											{categories.map((option) => (
												<MenuItem key={option.value} value={option.value}>
												{option.label}
												</MenuItem>
											))}
										</TextField>
									</Grid>
									<Grid item xs={12} md={3} sx={{display: "flex", justifyContent: "center"}}>
										<TextField
											id="select-collections"
											select
											label="PUBLISHED DATE"
											defaultValue=""
											variant="filled"
											sx={{width: 0.9}}
											>
											{publishedDate.map((option) => (
												<MenuItem key={option.value} value={option.value}>
												{option.label}
												</MenuItem>
											))}
										</TextField>
									</Grid>
									<Grid item xs={12} md={3} sx={{display: "flex", justifyContent: "center"}}>
										<Box  width={0.9}>
											<span>PRICE RANGE</span>
											<Slider
												getAriaLabel={() => 'Price range'}
												value={value}
												onChange={handleChange}
												getAriaValueText={valuetext}
												width= {0.5}
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
					</Box>
				</Collapse>
				{/* Add Product section */}
				<Collapse in={"Add Product" === isOpen} timeout={1000}>
					<Box sx={{ width: 1, mx: "auto" , display: "flex" , flexDirection: "column" , gap: 5}}>
						<Box sx={{width: 1, display: "flex", flexDirection: "row", mx: "auto", alignItems: "center"}}>
							<h1>Add New Product</h1>
						</Box>
						<Divider/>
						<Box sx={{width: 1, display: "flex", flexDirection: "column", gap: 2}}>
							{/* Placeholder for image */}
							<Box sx={{ width: 1, display: "flex", flexDirection: "column" , justifyContent: "space-between" , alignItems: "center" , gap: 2 , mx: "auto"}}>
								<Box sx={{ width: 1}}>
									<Box sx={{ width: '100%', paddingBottom: '100%' , boxShadow: "5px 5px #1a1a1a" , position: 'relative' }}>
										<img
											src="https://source.unsplash.com/random?wallpapers"
											alt="ava"
											style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '5px', objectFit: 'cover' }}
										/>
									</Box>
								</Box>
								<Button component="label" variant="contained" startIcon={<CloudUploadIcon sx={{fill: "#2a2a2a"}} />}>
									Upload File
									<input type="file" style={{ display: 'none' }} />
								</Button>
							</Box>
							<TextField
								id="product-name"
								label="Product Name"
								variant="outlined"
							/>
							<TextField
								id="product-description"
								label="Product Description"
								variant="outlined"
								multiline
								rows={4}
							/>
							<TextField
								id="product-category"
								select
								label="Product Category"
								variant="outlined"
								defaultValue=""
								sx={{ width: "100%" }}
							>
								{categories.map((option) => (
									<MenuItem key={option.value} value={option.value}>
										{option.label}
									</MenuItem>
								))}
							</TextField>
							<TextField
								id="product-price"
								label="Product Price (ETH)"
								variant="outlined"
								type="number"
								inputProps={{ min: 0 }} // Set minimum value as 0
								onChange={(event) => {
									const newPrice = parseFloat(event.target.value); // Parse the entered value to a float
									setFormData({
										...formData,
										price: newPrice // Update the price in formData with the new value
									});
								}}
								name="price"
							/>
							<TextField  
								type="number" 
								label="USD" 
								variant="outlined" 
								inputProps={{ min: 0 }} // Set minimum value as 0
								value={(formData.price * conversionRate).toFixed(2)}
								InputProps={{
									readOnly: true, // Make the input field readonly
								}}
							/>
							<Typography>
								&#x2022; Commission Fee (0.5%): ${commissionFee.toFixed(2)}
							</Typography>
							{/* Add more fields as needed */}
							<Button variant="contained" color="primary" size='large'>
								Add Product
							</Button>
						</Box>
					</Box>
				</Collapse>
			</Box>
		</>
	)
}

export default ProfileScreen