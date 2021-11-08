import React from 'react';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';


const Service = (props) => {
    const { title, description, img } = props.service


    return (
        <Grid item xs={4} sm={4} md={4}  >
            <Card sx={{ minWidth: 275, boxShadow: 0, mt: 4 }} >
                <CardContent>
                    <CardMedia
                        component="img"
                        style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                        image={img}
                        alt="Paella dish"
                    />

                    <Typography variant="h5" component="div" sx={{ my: 3 }}>
                        {title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {description}
                        <br />

                    </Typography>
                </CardContent>

            </Card>
        </Grid>
    );
};

export default Service;