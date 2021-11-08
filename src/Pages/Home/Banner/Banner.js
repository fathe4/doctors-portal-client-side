import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'

const bgBanner = {
    background: `url(${bg})`
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: '600px'
}

const Banner = () => {
    return (
        <Box style={bgBanner} sx={{ my: 4 }}>
            <Container sx={{ flexGrow: 1 }} >
                <Grid container spacing={2} >
                    <Grid item xs={6} md={6} sx={{ ...verticalCenter, textAlign: 'left' }}>
                        <Box>
                            <Typography variant='h3' sx={{ fontWeight: 'bold', mb: 5 }}>
                                Your new smile <br /> starts here
                            </Typography>
                            <Typography variant='p'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt impedit officia perferendis quia animi, quo blanditiis? Temporibus pariatur reiciendis aut.
                            </Typography>
                            <Button sx={{ mt: 5 }} style={{ background: '#11D0DE' }} variant="contained">Get Appointment</Button>
                        </Box>
                    </Grid>
                    <Grid sx={{ ...verticalCenter }} item xs={6} md={6}>
                        <img style={{ width: '600px' }} src={chair} alt="" />
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;