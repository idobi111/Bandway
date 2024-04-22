import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Container, Avatar, IconButton, InputAdornment } from '@mui/material';
import Link from '@mui/material/Link';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const SignUp: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSignUp = () => {
        // Implement sign up logic here
        console.log('Signing up with email:', email, 'and password:', password);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleClickShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const PasswordVisibilityIcon = showPassword ? <VisibilityOff /> : <Visibility />;

    const Copyright = (props: any) => {
        return (
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                {'Copyright © '}
                <Link color="inherit" href="http://127.0.0.1:5173/">
                    BandWay
                </Link>{' '}
                {new Date().getFullYear()}
            </Typography>
        );
    }

    return (
        <Container>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOpenIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box sx={{ maxWidth: 400, margin: 'auto' }}>
                    <TextField
                        label="Email"
                        fullWidth
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        margin="normal"
                    />
                    <TextField
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        required
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        margin="normal"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {PasswordVisibilityIcon}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button style={{backgroundColor: '#191970'}} fullWidth sx={{ mt: 3, mb: 2 }} variant="contained" color="primary" onClick={handleSignUp}>
                        Sign Up
                    </Button>
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    );
};

export default SignUp;
