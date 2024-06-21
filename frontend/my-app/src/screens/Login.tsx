
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {CardMedia, createTheme, ThemeProvider} from "@mui/material";
import {Card, Center} from '@chakra-ui/react'
import {ChangeEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {Navigate} from "react-router-dom";
import {userSetLoginForm} from "../auth/login/loginFormReducer";
import {onInitLogin} from "../auth/login/loginReducer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLockOpen} from "@fortawesome/free-solid-svg-icons";

const defaultTheme = createTheme();

export default function LoginScreen() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        id: 0,
        name: '',
        email: '',
        password: '',
        phone:'',
        id_card: '',
        qr_code: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const isAuthenticated = useSelector((state:RootState)=> {return state.login.isAuth});
    if (isAuthenticated) {
        return <Navigate replace to="/Home" />;
    }


    const handleLogin= (e: any) => {
        e.preventDefault();
        dispatch(userSetLoginForm(formData));
        dispatch(onInitLogin());
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
            <Card sx={{ maxWidth: 300 }}>
                <CardMedia
                    component="img"
                    height="100"
                    image="work-out.png"
                    alt="Background"
                    sx={{
                        filter: 'blur(7px)',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 1,
                        bg: "rgba(255, 255, 255, 1.5)"
                    }}/>
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
                        <Typography component="h1" variant="h5" style={{  fontWeight: 'bold',fontFamily: 'Arial, sans-serif' }}>
                           Bun venit la FasGym
                        </Typography>
                        <br/>
                        <Avatar sx={{l: 1, bgcolor: '#9ad4ed'}}>
                            <FontAwesomeIcon icon={faLockOpen} style={{color: "#0410be",}} />
                        </Avatar>
                        <Typography component="h1" variant="h5" style={{ fontWeight: 'bold'}}>
                            Log in
                        </Typography>
                        <Box component="form" noValidate sx={{mt: 1}}>

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
                            <Center> <Button
                                onClick={handleLogin}
                                type="submit"
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                                // color={"#d4e4f3"}
                            >
                                Log in
                            </Button></Center>
                            <Center>
                                <Grid item>
                                <Link href="/" variant="body2" style={{textDecoration: 'none', color: 'black'}}>
                                    {"Nu ai cont? Înregistrează-te"}
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