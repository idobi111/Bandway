import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Avatar, Container, Grid, IconButton, InputAdornment } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Link from '@mui/material/Link';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';


const SignIn: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSignIn = () => {
        // Implement sign in logic here
        console.log('Signing in with email:', email, 'and password:', password);
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
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>

                <Box sx={{ maxWidth: 400, margin: 'auto' }}>
                    <TextField
                        label="Email"
                        required
                        fullWidth
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
                    <Button style={{backgroundColor: '#191970'}} fullWidth sx={{ mt: 3, mb: 2 }} variant="contained" color="primary" onClick={handleSignIn}>
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <RouterLink to="/forgot-password">
                                Forgot password?
                            </RouterLink>
                        </Grid>
                        <Grid item>
                            <RouterLink to="/sign-up">
                                {"Don't have an account? Sign Up"}
                            </RouterLink>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    );
};

export default SignIn;
