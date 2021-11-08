import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(46, 47, 68, .8)',
    backgroundOpacity: '.9',
    backgroundBlendMode: 'darken',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    marginTop: '175px'

}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '500px', marginTop: '-110px' }} src={doctor} alt="" />
                </Grid>

                <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center' }}>
                    <Box>
                        <Typography variant='h6' style={{ color: '#11D0DE', fontWeight: 'bold' }}>
                            Appointment
                        </Typography>
                        <Typography variant='h4' sx={{ my: 5 }} style={{ color: 'white' }}>
                            Make an appointment today
                        </Typography>
                        <Typography variant='p' style={{ color: 'white' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem provident praesentium iste explicabo? Hic neque aliquid possimus corrupti quasi molestiae?
                        </Typography> <br />
                        <Button sx={{ mt: 5 }} style={{ background: '#11D0DE' }} variant="contained">Learn More</Button>

                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
};

export default AppointmentBanner;