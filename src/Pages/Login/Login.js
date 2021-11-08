import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import loginImg from '../../images/login.png'

const Login = () => {
    const [loginData, setLoginData] = useState()
    const { user, loginWithEmailAndPass, error, isLoading, signInWithGooglePopup } = UseAuth()
    const location = useLocation()
    const history = useHistory()
    const handleOnChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = { ...loginData }
        newLoginData[field] = value
        setLoginData(newLoginData)
        console.log(loginData);
    }
    const handleLogin = (e) => {

        loginWithEmailAndPass(loginData.email, loginData.password, location, history)
        e.preventDefault()

    }
    const handleGooglePopupSignIn = () => {
        signInWithGooglePopup(location, history)
    }
    return (
        <Container>
            <Grid container spacing={2} >
                <Grid item xs={12} md={6} sx={{ mt: 30 }}>

                    <Typography variant='h4'>
                        Login
                    </Typography>
                    {!isLoading && <form onSubmit={handleLogin}>
                        <TextField
                            id="standard-basic"
                            label="Your Name"
                            name="email"
                            onBlur={handleOnChange}
                            variant="standard"
                            sx={{ width: '75%', mb: 2 }}
                        />
                        <TextField
                            id="standard-basic"
                            label="Your Password"
                            name="password"
                            onBlur={handleOnChange}
                            type='password'
                            variant="standard"
                            sx={{ width: '75%' }}
                        />
                        <Button type="submit" sx={{ width: '75%', my: 3 }} variant="contained">Login</Button>
                        <br />
                        <NavLink to='/register'>New User? Please Register</NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Successfully Logged In</Alert>}
                    {error && <Alert severity="error">{error}</Alert>}

                    <p>------------------------</p>
                    <Button variant="contained" onClick={handleGooglePopupSignIn}>Google Sign in</Button>




                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={loginImg} style={{ width: '100%', margin: '100px 0' }} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;