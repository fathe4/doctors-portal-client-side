import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import loginImg from '../../images/login.png'

const Register = () => {
    const [RegisterData, setRegisterData] = useState({})
    const { user, registerWithEmailAndPass, isLoading, error } = UseAuth()
    const history = useHistory()


    const handleOnBlur = (e) => {
        const field = e.target.name
        const value = e.target.value
        const newRegisterData = { ...RegisterData }
        newRegisterData[field] = value
        setRegisterData(newRegisterData)
    }
    const handleLogin = (e) => {
        if (RegisterData.password !== RegisterData.password2) {
            alert('Password Not match')
            return
        }
        alert('Register')
        registerWithEmailAndPass(RegisterData.email, RegisterData.password, RegisterData.name, history)
        e.preventDefault()

    }
    console.log(user);
    return (
        <Container>
            <Grid container spacing={2} >
                <Grid item xs={12} md={6} sx={{ mt: 30 }}>

                    <Typography variant='h4'>
                        Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleLogin}>
                        <TextField
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard"
                            sx={{ width: '75%', mb: 2 }}
                        />
                        <TextField
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            defaultValue={user?.email}
                            onBlur={handleOnBlur}
                            variant="standard"
                            sx={{ width: '75%', mb: 2 }}
                        />
                        <TextField
                            id="standard-basic"
                            label="Your Password"
                            name="password"
                            onBlur={handleOnBlur}
                            type='password'
                            variant="standard"
                            sx={{ width: '75%', mb: 1 }}
                        />
                        <TextField
                            id="standard-basic"
                            label="Re-type Your Password"
                            name="password2"
                            onBlur={handleOnBlur}
                            type='password'
                            variant="standard"
                            sx={{ width: '75%' }}
                        />
                        <Button type="submit" sx={{ width: '75%', my: 3 }} variant="contained">Register</Button>
                        <br />
                        <NavLink to='/login'>Already Registered?</NavLink>
                    </form>}
                    {
                        isLoading && <CircularProgress />
                    }
                    {user?.email && <Alert severity="success">Successfully User Created</Alert>}
                    {error && <Alert severity="error">{error}</Alert>}





                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={loginImg} style={{ width: '100%', margin: '100px 0' }} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;