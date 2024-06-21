
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {CardMedia, createTheme, ThemeProvider} from "@mui/material";
import {Card, Center} from '@chakra-ui/react'
import {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {
    onInitModify,
    onSetUpdateUserForm
} from "../modify/updatedInfoUserReducer";
import NavBar from "../components/Navbar";

const defaultTheme = createTheme();

export default function ModifyFormUser() {
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
    const handleCompleteForm= (e: any) => {
        e.preventDefault();
        dispatch(onSetUpdateUserForm(formData));
        dispatch(onInitModify());
    };
    // const succesModify = useSelector((state: RootState) => {
    //     return state.modifyUser.succes;
    // });
    // const navigate = useNavigate();
    // useEffect(() => {
    //     let timeoutHandler:NodeJS.Timeout | null = null;
    //     if(succesModify===true){
    //         timeoutHandler = setTimeout( () =>{
    //             dispatch(onIsModifiedSucces(false));
    //             navigate('/user');
    //
    //         },5000)
    //     }
    //     return ()=>{
    //         if(null !== timeoutHandler){
    //             clearTimeout(timeoutHandler);
    //         }
    //     }
    // }, [dispatch,succesModify]);

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
        <>
        <NavBar/>
        <Center h="70vh" >
            <Card sx={{ maxWidth: 300 }}>
                <CardMedia
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
                           Modificare informații
                        </Typography>
                        <br/>

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
                            <Center>
                                <Button
                                onClick={handleCompleteForm}
                                type="submit"
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                            >
                                Salvează
                            </Button>
                            </Center>
                        </Box>
                    </Box>

                </ThemeProvider>
            </Card>
        </Center>
        </>
    );
}