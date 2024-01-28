/* eslint-disable react/prop-types */
import { Box, Pagination } from '@mui/material';

function PaginationComponent({cards, setCurrentPage, itemsPerPage}) {

	// Calculate the total number of pages needed to display all the items
	const totalPages = Math.ceil(cards.length * 1.0 / itemsPerPage)
  
	// Function to handle page changes
	const handlePageChange = (event, newPage) => {
		setCurrentPage(newPage);
		console.log(event, newPage);
	}

	return (
		<Box sx={{ justifyContent: "center" , alignItems: "center" , display: "flex" , mt: 5 }}> 
			<Pagination 
				defaultPage={1}
				count={totalPages} 
				onChange={handlePageChange}
			/>
		</Box>
	)
}

export default PaginationComponent