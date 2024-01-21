import { Box , Typography , Button } from "@mui/material";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <Box
      sx={{
        mt: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '67vh',
        gap: 5
      }}
    >
        <Typography variant="h1" style={{ color: 'white' }}>
            404
        </Typography>
        <Typography variant="h6" style={{ color: 'white' }}>
            The page you’re looking for doesn’t exist.
        </Typography>
        <Link to='/'>
            <Button variant="contained">Back Home</Button>
        </Link>
    </Box>
  )
}

export default ErrorPage