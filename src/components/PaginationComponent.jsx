import { Box, Pagination } from '@mui/material';

function PaginationComponent({cards, setCurrentPage, itemsPerPage}) {


  
	// Calculate the index of the first and last items to display on the current page
	// const startIndex = (currentPage - 1) * itemsPerPage
	// const endIndex = startIndex + itemsPerPage
  
	// Calculate the total number of pages needed to display all the items
	const totalPages = Math.ceil(cards.length * 1.0 / itemsPerPage)
  
	// Use the slice method to extract a subset of the cards array to display on the current page
	// const displayedCards = cards.slice(startIndex, endIndex)
  
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
				// page={currentPage}
				onChange={handlePageChange}
			/>
		</Box>
	)
}

export default PaginationComponent