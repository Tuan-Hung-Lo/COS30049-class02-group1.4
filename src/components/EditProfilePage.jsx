import { useState } from 'react';
import { TextField, Button, Box, Grid } from '@mui/material';
import styled from 'styled-components';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Link } from 'react-router-dom';

function EditProfile() {
    // State to manage form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        bio: '',
        gender: '',
        avatar: null,
        background: null,
    });

    const { name, email, bio, gender, avatar, background } = formData;

    // Handle form input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Styled component for visually hidden input
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

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataObj = new FormData();
        formDataObj.append('name', name);
        formDataObj.append('email', email);
        formDataObj.append('bio', bio);
        formDataObj.append('gender', gender);
        if (avatar) formDataObj.append('avatar', avatar);
        if (background) formDataObj.append('background', background);

        try {
            const response = await fetch('/api/user/profile', {
                method: 'PUT',
                headers: {
                    // Include token in headers if required by the server
                },
                body: formDataObj,
            });

            if (response.ok) {
                // Handle successful update
            } else {
                // Handle error
            }
        } catch (error) {
            // Handle network error
        }
    };

    return (
        <Box sx={{ mt: 15, display: "flex", flexDirection: "column", gap: 5, width: 0.8, justifyContent: "center", alignItems: "center" }}>
            <Box sx={{ width: 0.8, display: "flex", flexDirection: "row", justifyContent: "space-between", mx: "auto", alignItems: "center" }}>
                <h1>Edit Profile</h1>
                <Link to={'/profile'}>
                    <Button type="submit" variant="contained" color="primary">
                        Save Changes
                    </Button>
                </Link>
            </Box>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ width: 0.8, gap: 2 }}>
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", height: "auto", alignItems: "center", width: 1 }}>
                    <Box sx={{ width: '50%', display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", gap: 2, mx: "auto" }}>
                        <h3>Change Profile Picture</h3>
                        <Box sx={{ width: "13vw" }}>
                            <Box sx={{ width: '100%', paddingBottom: '100%', boxShadow: "5px 5px #1a1a1a", position: 'relative' }}>
                                <img
                                    src="https://source.unsplash.com/random?wallpapers"
                                    alt="ava"
                                    style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '5px', objectFit: 'cover' }}
                                />
                            </Box>
                        </Box>
                        <Button component="label" variant="contained" startIcon={<CloudUploadIcon sx={{ fill: "#2a2a2a" }} />}>
                            Upload file
                            <VisuallyHiddenInput type="file" name="profileImage" inputProps={{ accept: 'image/*' }} />
                        </Button>
                    </Box>
                    <Box sx={{ width: '50%', display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", gap: 2, mx: "auto" }}>
                        <h3>Change Background Image</h3>
                        <Box sx={{ width: "26vw" }}>
                            <Box sx={{ width: '100%', paddingBottom: '50%', boxShadow: "5px 5px #1a1a1a", position: 'relative' }}>
                                <img
                                    src="https://source.unsplash.com/random?wallpapers"
                                    alt="background"
                                    style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '5px', objectFit: 'cover' }}
                                />
                            </Box>
                        </Box>
                        <Button component="label" variant="contained" startIcon={<CloudUploadIcon sx={{ fill: "#2a2a2a" }} />}>
                            Upload file
                            <VisuallyHiddenInput type="file" name="backgroundImage" inputProps={{ accept: 'image/*' }} />
                        </Button>
                    </Box>
                </Box>
                <Grid container spacing={2} sx={{ alignItems: "center" }}>
                    <Grid item xs={12}>
                        <TextField
                            label="Username"
                            name="username"
                            value={name}
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
            </Box>
        </Box>
    );
}

export default EditProfile;
