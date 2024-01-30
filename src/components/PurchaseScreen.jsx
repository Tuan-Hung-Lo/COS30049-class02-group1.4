import * as React from 'react';
import { PropTypes } from 'prop-types';
import { Button, List, ListItem, ListItemText, DialogTitle, Dialog } from '@mui/material';
import { Box } from '@mui/material';

const paymentDetails = {
  purchaseDate: '2024-01-30',
  nftName: 'Sample NFT',
  contractAddress: '0x1234567890',
  valueETH: 1.5,
  valueUSD: 3000,
};

function PaymentDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} maxWidth= {false} >
        <DialogTitle>Payment Details</DialogTitle>
        <List sx={{ pt: 0 }}>
            <ListItem disableGutters>
            <ListItemText primary={`Purchase Date: ${paymentDetails.purchaseDate}`} />
            </ListItem>
            <ListItem disableGutters>
            <ListItemText primary={`NFT Name: ${paymentDetails.nftName}`} />
            </ListItem>
            <ListItem disableGutters>
            <ListItemText primary={`Contract Address: ${paymentDetails.contractAddress}`} />
            </ListItem>
            <ListItem disableGutters>
            <ListItemText primary={`Value: ${paymentDetails.valueETH} ETH / $${paymentDetails.valueUSD}`} />
            </ListItem>
            <ListItem disableGutters>
            <ListItemText primary="Accept Policy" />
            </ListItem>
            <ListItem disableGutters>
            <Button autoFocus onClick={handleClose} variant="contained">
                Confirm
            </Button>
            </ListItem>
        </List>
    </Dialog>
  );
}

PaymentDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function PaymentDialogDemo() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box mt={15}>
        <Button variant="outlined" onClick={handleClickOpen}>
            Buy
        </Button>
        <PaymentDialog open={open} onClose={handleClose} />
    </Box>
  );
}
