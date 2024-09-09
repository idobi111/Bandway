import React, {useState} from 'react';
import {
    TextField,
    Button,
    Typography,
    Box,
    Avatar,
    Container,
    Grid,
    IconButton,
    InputAdornment,
    Stack, CircularProgress
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Link from '@mui/material/Link';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import {BrowserRouter as Router, Routes, Route, Link as RouterLink, useNavigate} from 'react-router-dom';
import {RegisterApi} from "../../apis/RegisterApi";
import {LoginInfo} from "../../models/LoginInfo";
import {setUserData} from "../../redux/actions";
import {useDispatch} from "react-redux";

const SignIn: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [loading, setLoading] = useState(false);
    const [signInStatus, setSignInStatus] = useState('');
    const [signInError, setSignInError] = useState('');
    const registerApi = new RegisterApi();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const signIn = async () => {
        setLoading(true);
        const loginInfo: LoginInfo = {
            email: email,
            password: password
        }
        try {
            const response = await registerApi.login(loginInfo);
            setSignInStatus('Sign in successfully');
            setSignInError('');
            setTimeout(() =>  {
                dispatch(setUserData(response));
                localStorage.setItem('userId', response.userId.toString());
                localStorage.setItem('userFirstName', response.firstName);
                localStorage.setItem('userLastName', response.lastName);
                navigate('/home');
            }, 2000);
        } catch (error) {
            console.error('Error sign in:', error);
            setSignInError(error.message.startsWith("Query") || error.message == "[object Object]" ? '' : error.message);
            setSignInStatus('The sign in has failed. Please try again or contact us via mail: bandway4@gmail.com');
        } finally {
            setLoading(false);
        }
    };


    const handleSignIn = async () => {
        const validationErrors: { [key: string]: string } = {};
        if (!validateEmail(email)) {
            setEmailError('Invalid email address');
            return;
        }
        setEmailError('');
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            signIn();
            console.log('Signing in with email:', email, 'and password:', password);
        }
    };

    const validateEmail = (email: string) => {
        const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return re.test(email);
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

    const PasswordVisibilityIcon = showPassword ? <VisibilityOff/> : <Visibility/>;

    const Copyright = (props: any) => {
        const navigate = useNavigate();
    
        const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            navigate('/home');
        };
    
        return (
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                {'Copyright © '}
                <Link
                    component="button"
                    onClick={handleClick}
                    color="inherit"
                >
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
                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>

                <Box sx={{maxWidth: 400, margin: 'auto'}}>
                    <TextField
                        label="Email"
                        required
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        margin="normal"
                        error={!!emailError}
                        helperText={emailError}
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
                    <Stack direction={'row'}>
                        <Button style={{ backgroundColor: '#191970' }} fullWidth sx={{ mt: 3, mb: 2 }} variant="contained" color="primary" onClick={handleSignIn}>
                            Sign In
                        </Button>
                        {loading && <CircularProgress sx={{ mt: 3, mb: 2, marginLeft:1}} />}
                    </Stack>
                    <Grid container>
                        <Grid item xs>
                            <Link component={RouterLink} to="/contact"
                                  sx={{textDecoration: 'none', color: 'primary.main'}}>
                                <Typography variant="body2" color="primary">
                                    Forgot password?
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link component={RouterLink} to="/sign-up"
                                  sx={{textDecoration: 'none', color: 'primary.main'}}>
                                <Stack>
                                    <Typography variant="body2" color="primary">
                                        {"Don't have an account?"}
                                    </Typography>
                                    <Typography variant="body2" color="primary" textAlign={'center'}>
                                        {"Sign Up for FREE"}
                                    </Typography>
                                </Stack>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
                <Stack>
                    {signInError && (
                        <Typography variant="body1" color={'error'} textAlign={'center'}>
                            {signInError}
                        </Typography>
                    )}
                    {signInStatus && (
                        <Typography variant="body1" color={signInStatus.startsWith('Sign in') ? 'success' : 'error'}>
                            {signInStatus}
                        </Typography>
                    )}
                </Stack>
            </Box>
            <Copyright sx={{mt: 8, mb: 4}}/>
        </Container>
    );
};

export default SignIn;
