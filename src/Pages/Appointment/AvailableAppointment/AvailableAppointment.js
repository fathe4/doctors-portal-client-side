import { Alert, Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const AvailableAppointment = ({ date }) => {

    const bookings = [
        {
            id: 1,
            name: 'Teeth Orthodonics',
            time: '08.00 AM - 09.00 AM',
            space: 10,
        },
        {
            id: 2,
            name: 'Cosmetic Dentistry',
            time: '09.00 AM - 10.00 AM',
            space: 8,
        },
        {
            id: 3,
            name: 'Teeth Cleaning',
            time: '10.00 AM - 11.00 AM',
            space: 9,
        },
        {
            id: 4,
            name: 'Cavity Protection',
            time: '11.00 AM - 12.00 PM',
            space: 5,
        },
        {
            id: 5,
            name: 'Pediatric Dental',
            time: '06.00 PM - 07.00 PM',
            space: 10,
        },
        {
            id: 6,
            name: 'Oral Surgery',
            time: '07.00 PM - 08.00 PM',
            space: 10,
        },
    ]
    const [bookingSuccess, setBookingSuccess] = useState(false)

    return (
        <div style={{ marginTop: '80px' }}>
            <h1>Available Appointment {date.toDateString()}</h1>

            <Container>
                {bookingSuccess && <Alert sx={{ my: 3 }} severity="success">Booking success</Alert>}
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    {
                        bookings.map(booking => <Booking key={booking.id} booking={booking} setBookingSuccess={setBookingSuccess} date={date}></Booking>)
                    }

                </Grid>
            </Container>
        </div>
    );
};

export default AvailableAppointment;