import React, { useState } from "react";
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';


function Login(props) {

    const paperStyle = { padding: 20, height: 'fit-content', width: 500, margin: '20px auto' }
    const avatarStyle = { backgroundColor: 'green', margin: '8px 0', width: 56, height: 56 }
    const btnStyle = { margin: '8px 0' }
    const logo = { fontSize: '175px', margin: '15px 0 0', color: '#5e9dd6' }
    const logoName = { margin: '0 0 50px', color: '#5e9dd6' }

    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);

            if (data.login.user.role === "name") {
                window.location.assign('/dashboard');
            }

        } catch (e) {
            console.error(e);
        }

        setFormState({
            email: '',
            password: '',
        });
    };

    return (

        <Grid>
            <Grid align='center'>
                <AcUnitIcon style={logo} /><Typography style={logoName} variant='h2'>Cold Order Form</Typography>
            </Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>A</Avatar>
                    <Typography variant='h4'>Sign In</Typography>
                </Grid>
                <TextField label='Email' placeholder='Enter Email' value={formState.email} onChange={handleChange} fullWidth required />
                <TextField label='Password' placeholder='Enter Password' type='password' value={formState.password} onChange={handleChange} fullWidth required />
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Remember me" />
                </FormGroup>
                <Button type='submit' color='primary' variant='contained' style={btnStyle} fullWidth onClick={handleFormSubmit}>Sign In</Button>
                <Typography align='center'><Link href="#" >Forgot my password</Link></Typography>
            </Paper>
        </Grid>
    )
};

export default Login;