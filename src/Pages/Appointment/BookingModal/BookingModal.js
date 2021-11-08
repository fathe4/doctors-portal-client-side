import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import UseAuth from '../../../hooks/UseAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ date, booking, openBookingForm, handleOpenBooking, handleCloseBooking, setBookingSuccess }) => {
    const { user } = UseAuth()
    const initialValue = { patientName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialValue)

    const handleOnBlur = (e) => {
        const field = e.target.name
        const value = e.target.value
        const newField = { ...bookingInfo }
        newField[field] = value
        setBookingInfo(newField)
    }

    const handleBookingForm = (e) => {
        const appointmentInfo = {
            ...bookingInfo,
            time: booking.time,
            date: date.toDateString(),
            serviceName: booking.name
        }

        fetch('https://fathomless-harbor-85399.herokuapp.com/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointmentInfo)
        }).then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    setBookingSuccess(true)
                    handleCloseBooking()
                }

                console.log(result)
            })


        e.preventDefault()
        handleCloseBooking()
    }

    return (
        <div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openBookingForm}
                onClose={handleCloseBooking}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openBookingForm}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {booking.name}
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            <form onSubmit={handleBookingForm}>
                                <TextField
                                    fullWidth
                                    disabled
                                    hiddenLabel
                                    id="filled-hidden-label-small"
                                    placeholder="Time"
                                    defaultValue={booking.time}
                                    variant="standard"
                                    size="small"
                                    sx={{ my: 2 }}
                                />
                                <TextField
                                    fullWidth
                                    hiddenLabel
                                    id="filled-hidden-label-small"
                                    placeholder="Your Name"
                                    defaultValue={user?.displayName}
                                    name='patientName'
                                    onBlur={handleOnBlur}
                                    variant="standard"
                                    size="small"
                                    sx={{ my: 2 }}
                                />
                                <TextField
                                    fullWidth
                                    hiddenLabel
                                    id="filled-hidden-label-small"
                                    placeholder="Email"
                                    name='email'
                                    onBlur={handleOnBlur}
                                    defaultValue={user?.email}
                                    variant="standard"
                                    size="small"
                                    sx={{ my: 2 }}
                                />
                                <TextField
                                    fullWidth
                                    id="standard-number"
                                    label="Phone Number"

                                    name='phone'
                                    onBlur={handleOnBlur}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    sx={{ my: 2 }}
                                    variant="standard"
                                />
                                <TextField
                                    disabled
                                    fullWidth
                                    hiddenLabel
                                    id="filled-hidden-label-small"
                                    placeholder="Date"
                                    defaultValue={date.toDateString()}
                                    variant="standard"
                                    size="small"
                                    sx={{ my: 2 }}
                                />
                                <Button sx={{ my: 2 }} type='submit' variant="contained">Submit</Button>

                            </form>
                        </Typography>
                    </Box>
                </Fade>
            </Modal>

        </div>
    );
};

export default BookingModal;