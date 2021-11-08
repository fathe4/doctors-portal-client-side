import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import Service from '../Service/Service';

const Services = () => {
    const services = [
        {
            title: 'Fluoride',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi minima consectetur culpa saepe ut alias nesciunt optio fuga reprehenderit suscipit.',
            img: fluoride
        },
        {
            title: 'Cavity',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi minima consectetur culpa saepe ut alias nesciunt optio fuga reprehenderit suscipit.',
            img: cavity
        },
        {
            title: 'Whitening',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi minima consectetur culpa saepe ut alias nesciunt optio fuga reprehenderit suscipit.',
            img: whitening
        },
    ]
    return (
        <div>

            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Typography variant="h5" component="div" sx={{ fontWeight: 500 }}>
                        Our Services
                    </Typography>
                    <Typography variant="h3" component="div" sx={{ fontWeight: 600 }}>
                        Services we provide                    </Typography>

                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>


                        {
                            services.map(service => <Service service={service} key={service.title}></Service>)
                        }


                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default Services;