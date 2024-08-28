import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Container, Avatar, IconButton, InputAdornment, Stack, CircularProgress } from '@mui/material';
import Link from '@mui/material/Link';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { RegisterApi } from '../../apis/RegisterApi';
import { RegisterInfo } from '../../models/RegisterInfo';
import {useNavigate} from "react-router-dom";

const SignUp: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [loading, setLoading] = useState(false);
    const [registerStatus, setRegisterStatus] = useState('');
    const [registerError, setRegisterError] = useState('');
    const navigate = useNavigate();




    const registerApi = new RegisterApi();

    const handleSignUp = () => {
        const validationErrors: { [key: string]: string } = {};
        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            validationErrors.email = 'Invalid email address';
        }
        if (!/^\d{10}$/.test(phone)) {
            validationErrors.phone = 'Phone number must be 10 digits';
        }
        if (password !== confirmPassword) {
            validationErrors.confirmPassword = 'Passwords do not match';
        }
        if (!firstName.trim()) {
            validationErrors.firstName = 'First Name is required';
        }
        if (!lastName.trim()) {
            validationErrors.lastName = 'Last Name is required';
        }
        if (!username.trim()) {
            validationErrors.username = 'Username is required';
        }
        if (!email.trim()) {
            validationErrors.email = 'Email is required';
        }
        if (!phone.trim()) {
            validationErrors.phone = 'Phone is required';
        }
        if (!password.trim()) {
            validationErrors.password = 'Password is required';
        }
        if (!confirmPassword.trim()) {
            validationErrors.confirmPassword = 'Confirm Password is required';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            register();
            console.log('Signing up with:', { firstName, lastName, username, email, password, phone });
        }
    };

    const buildRegisterInfo = (): RegisterInfo => {
        return {
            firstName: firstName || null,
            lastName: lastName || null,
            userName: username || null,
            email: email || null,
            phone: phone || null,
            password: password || null,
        };
    };

    const register = async () => {
        setLoading(true);
        try {
            await registerApi.register(buildRegisterInfo());
            setRegisterStatus('Sign up successfully');
            setRegisterError('');
            setTimeout(() =>  {
                navigate('/sign-in');
            }, 2000);
        } catch (error) {
            console.error('Error sign up:', error);
            setRegisterError(error.message.startsWith("Query") ? '' : error.message);
            setRegisterStatus('The sign up has failed. Please try again or contact us via mail: support@bandway.com');
        } finally {
            setLoading(false);
        }
    };


    const handleClickShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    const handleClickShowConfirmPassword = () => {
        setShowConfirmPassword((prev) => !prev);
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const PasswordVisibilityIcon = showPassword ? <VisibilityOff /> : <Visibility />;
    const ConfirmPasswordVisibilityIcon = showConfirmPassword ? <VisibilityOff /> : <Visibility />;

    const Copyright = (props: any) => {
        return (
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                {'Copyright © '}
                <Link color="inherit" href="https://bandway-client-z732mhjgfq-uc.a.run.app/home">
                    BandWay
                </Link>{' '}
                {new Date().getFullYear()}
            </Typography>
        );
    };

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
                        label="First Name"
                        fullWidth
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        margin="normal"
                        error={!!errors.firstName}
                        helperText={errors.firstName}
                    />
                    <TextField
                        label="Last Name"
                        fullWidth
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        margin="normal"
                        error={!!errors.lastName}
                        helperText={errors.lastName}
                    />
                    <TextField
                        label="Username"
                        fullWidth
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        margin="normal"
                        error={!!errors.username}
                        helperText={errors.userName}
                    />
                    <TextField
                        label="Email"
                        fullWidth
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        margin="normal"
                        error={!!errors.email}
                        helperText={errors.email}
                    />
                    <TextField
                        label="Phone"
                        fullWidth
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        margin="normal"
                        error={!!errors.phone}
                        helperText={errors.phone}
                    />
                    <TextField
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        required
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        margin="normal"
                        error={!!errors.password}
                        helperText={errors.password}
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
                    <TextField
                        label="Confirm Password"
                        type={showConfirmPassword ? 'text' : 'password'}
                        required
                        fullWidth
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        margin="normal"
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle confirm password visibility"
                                        onClick={handleClickShowConfirmPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {ConfirmPasswordVisibilityIcon}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Stack direction={'row'}>
                        <Button style={{ backgroundColor: '#191970' }} fullWidth sx={{ mt: 3, mb: 2 }} variant="contained" color="primary" onClick={handleSignUp}>
                            Sign Up
                        </Button>
                        {loading && <CircularProgress sx={{ mt: 3, mb: 2, marginLeft:1}} />}
                    </Stack>
                </Box>
                <Stack>
                {registerError && (
                    <Typography variant="body1" color={'error'} textAlign={'center'}>
                        {registerError}
                    </Typography>
                )}
                {registerStatus && (
                    <Typography variant="body1" color={registerStatus.startsWith('Sign up') ? 'success' : 'error'}>
                        {registerStatus}
                    </Typography>
                )}
                </Stack>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    );
};

export default SignUp;
