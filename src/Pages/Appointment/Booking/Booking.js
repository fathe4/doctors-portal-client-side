import { Button, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';

import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time, space } = booking
    const [openBookingForm, setOpenBookingForm] = React.useState(false);
    const handleOpenBooking = () => setOpenBookingForm(true);
    const handleCloseBooking = () => setOpenBookingForm(false);
    return (
        <>
            <Grid item xs={12} sm={4} md={4} >
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography sx={{ fontWeight: 'bold' }} variant='h4' gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant='h6' gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {space} SPACES AVAILABLE
                    </Typography>
                    <Button onClick={handleOpenBooking} sx={{ mt: 3 }} variant="contained">Book Appointment</Button>

                </Paper>

            </Grid>
            <BookingModal date={date} booking={booking} openBookingForm={openBookingForm} setBookingSuccess={setBookingSuccess} handleOpenBooking={handleOpenBooking} handleCloseBooking={handleCloseBooking}></BookingModal>
        </>

    );
};

export default Booking;