import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UseAuth from '../../../hooks/UseAuth';
import { CircularProgress } from '@mui/material';

const Appointments = ({ date }) => {
    const { user } = UseAuth()
    const [isLoading, setIsLoading] = useState(false)
    const [appointments, setAppointments] = useState([])
    useEffect(() => {
        setIsLoading(true)
        const url = `https://fathomless-harbor-85399.herokuapp.com/appointments?email=${user.email}&date=${date.toDateString()}`
        fetch(url)
            .then(res => res.json())
            .then(data => setAppointments(data))
            .finally(() => setIsLoading(false))
    }, [date, user.email])
    return (
        <div>
            <h2>Appointments {appointments.length}</h2>
            {!isLoading && <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="center">Time</TableCell>
                            <TableCell align="center">Actions</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.patientName}
                                </TableCell>
                                <TableCell align="right">{row.time}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>}
            {isLoading && <CircularProgress></CircularProgress>}
        </div>
    );
};

export default Appointments;