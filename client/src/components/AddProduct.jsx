import { useState, useEffect } from 'react';
import { Box, Button, TextField, Divider, MenuItem, Collapse, Typography} from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function AddProduct(){

	const [formUploadAsset, setFormUploadAsset] = useState({
		description: '',
		name: '',
		category: '',
		amount: '',
	});

    const categories = [
        { value: 'all-items', label: 'All Items' },
        { value: 'painting', label: 'Painting' },
        { value: 'digital', label: 'Digital' },
        { value: 'photograph', label: 'Photograph' },
    ];

    // State variables for form data and slider value
    const [formData, setFormData] = useState({
        price: 0, // Initialize price state
    });

	const handleUploadAsset = (e) => {
		const { name, value } = e.target;
		setFormUploadAsset((prevUserData) => ({
			...prevUserData,
			[name]: value,
		}));
	}
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

    return(
        <Collapse timeout={1000}>
            <Box sx={{ mt: 15, display: "flex", flexDirection: "column", alignItems: "center", width: 0.8, gap: 2 }}>
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
            </Box>
        </Collapse>
    )
}

export default AddProduct