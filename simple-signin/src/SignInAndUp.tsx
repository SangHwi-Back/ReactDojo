import * as React from 'react';
import {FormEvent, useState} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";

export function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        // Send username and password to server for authentication
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        }).then((response) => {
            if (response.status === 200) {
                // User is authenticated, redirect to dashboard
                window.location.href = '/dashboard';
            } else {
                alert('Invalid username or password');
            }
        });
    };

    return (
        <Box>
            <Typography variant="h4" gutterBottom align="center">
                Sign In
            </Typography>
            <form onSubmit={handleSubmit} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <Button type="submit" fullWidth variant="contained" color="primary">
                    Sign In
                </Button>
            </form>
        </Box>
    );
}

export function SignUp()  {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        // Send email and password to server for sign up
        fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then((response) => {
            if (response.status === 201) {
                // User is signed up, redirect to login page
                window.location.href = '/login';
            } else {
                alert('Invalid email or password');
            }
        });
    };

    return (
        <Box>
            <Typography gutterBottom variant="h4" align="center">
                Sign Up
            </Typography>
            <form onSubmit={handleSubmit} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <Button type="submit" fullWidth variant="contained" color="primary">
                    Sign Up
                </Button>
            </form>
        </Box>
    );
}