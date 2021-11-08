import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import UseAuth from '../../../hooks/UseAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState({})
    const { token, setIsLoading, isLoading } = UseAuth()

    const handleOnBlur = (e) => {
        setEmail(e.target.value)
    }

    const handleMakeAdmin = (e) => {

        const user = { email }
        fetch('https://fathomless-harbor-85399.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => { console.log(data) })

        e.preventDefault()
    }
    return (
        <div>
            <h2>Make an admin</h2>
            <form onSubmit={handleMakeAdmin}>
                <TextField onBlur={handleOnBlur} sx={{ width: '25%' }} label="Email" name='email' variant="standard" />
                <Button type='submit' variant="contained">Make Admin</Button>

            </form>

        </div>
    );
};

export default MakeAdmin;