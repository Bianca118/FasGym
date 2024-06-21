import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {createTheme, ThemeProvider} from "@mui/material";
import {Card, Center} from '@chakra-ui/react'
import {ChangeEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {resetAuthForm, updateFormField} from "../auth/register/registerFormReducer";
import {registerUserStart} from "../auth/register/registerReducer";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock} from "@fortawesome/free-solid-svg-icons";

const defaultTheme = createTheme();

export default function RegisterForm() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        id: 0,
        name: '',
        email: '',
        password: '',
        phone: '',
        id_card: '',
        qr_code: '',

    });

    const registered = useSelector((state: RootState) => {
        return state.register.isRegistered;
    });
    const navigate = useNavigate();
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    useEffect(() => {
        if (registered) {
            navigate('/login');
            dispatch(resetAuthForm());
        }
    }, [registered, navigate, dispatch]);

    const handleRegister = (e: any) => {
        e.preventDefault();
        dispatch(updateFormField(formData));
        dispatch(registerUserStart());
    };

    const theme = createTheme({
        components: {

            MuiTextField: {
                styleOverrides: {
                    root: {
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#19528f',
                            },
                            '&:hover fieldset': {
                                borderColor: 'blue',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#d4e4f3',
                                boxShadow: '0 0 5px 1px rgba(64, 224, 208, 0.5)',
                            },
                        },
                    },
                },
            },
        },
    });
    return (
        <Center h="100vh" style={{
            backgroundImage: "url('img.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
        }}>
            <Card sx={{maxWidth: 300}} boxShadow="2xl">
                <ThemeProvider theme={theme}>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            zIndex: 2,
                        }}
                    >
                        <Typography component="h1" variant="h5" style={{fontWeight: 'bold'}}>
                            FasGym Team
                        </Typography>
                        <br/>
                        <Avatar sx={{l: 1, bgcolor: '#9ad4ed'}}>
                            <FontAwesomeIcon icon={faLock} style={{color: "#0410be",}}/>
                        </Avatar>
                        <Typography component="h1" variant="h5" style={{fontWeight: 'bold'}}>
                            Sign in
                        </Typography>
                        <Box component="form" noValidate sx={{mt: 1}}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="nume"
                                name="name"
                                autoComplete="name"
                                value={formData.name} onChange={handleChange}
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="phone"
                                type="text"
                                label="telefon"
                                name="phone"
                                autoComplete="phone"
                                value={formData.phone} onChange={handleChange}
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="email"
                                label="email"
                                type="email"
                                id="email"
                                autoComplete="email"
                                value={formData.email} onChange={handleChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="parolă"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={formData.password} onChange={handleChange}
                            />
                            <Center>
                                <Button
                                    onClick={handleRegister}
                                    type="submit"
                                    variant="contained"
                                    sx={{mt: 3, mb: 2}}
                                >
                                    Sign In
                                </Button>

                            </Center>

                            <Center>
                                <Grid item>
                                    <Link href="/login" variant="body2"
                                          style={{textDecoration: 'none', color: 'black'}}>
                                        {"Aveți deja un cont? Autentificare"}
                                    </Link>
                                </Grid>
                            </Center>
                        </Box>
                    </Box>
                </ThemeProvider>
            </Card>
        </Center>
    );
}