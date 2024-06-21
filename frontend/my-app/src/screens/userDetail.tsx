import {Box, Button, Card, CardBody, CardHeader, Center, Container, Heading, Text, VStack} from "@chakra-ui/react";
import {Image} from '@chakra-ui/react'
import React, {useEffect, useState} from "react";
import NavBar from "../components/Navbar";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import { useNavigate } from "react-router-dom";
import {AuthState} from "../auth/login/loginReducer";
import axios from "axios";
import {toast} from "react-toastify";
import {onInitPhoto} from "../userPhoto/photoReducer";
import {onInitUser} from "../auth/userDetail/userInfoReducer";

export default function UserDetail() {

    const user = useSelector((state: RootState) => {
        return state.loginForm;
    });
    const navigate = useNavigate();
    const onClickInfo= ()=>{
        navigate("/modify")
    }
    const [selectedFile, setSelectedFile] = useState('');

    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        setSelectedFile(event.target.files[0]);
    };

    const onUpload = () => {
        if (!selectedFile) return;

        const formData = new FormData();
        formData.append('image', selectedFile);
        formData.append('user_id', String(user.id));
       const response = axios.post(`http://localhost:8000/api/poza`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }).then((res)=>{
            if(res.status === 200){
                toast.success('Imagine adăugată');
            }
            });
};
    const dispatch =useDispatch();
    const photo = useSelector((state: RootState) => {
        return state.photo;
    });
    useEffect(() => {
        dispatch(onInitUser());
        dispatch(onInitPhoto());
    }, [dispatch]);

    const userInfo = useSelector((state: RootState) => {
        return state.userInfo;
    });

return (
        <>

        <NavBar/>
        <br/>
        <Container maxW={'7xl'}>
            <br/>
            <Container>
                <Center h='100px' color='white'>
                    {photo.image !== '' ? (
                        <Image
                            borderRadius='full'
                            boxSize='150px'
                            src={`http://localhost:8000/${photo.image}`}
                            alt='Captured Image'
                        />
                    ) : (
                        <Image
                            borderRadius='full'
                            boxSize='150px'
                            src='kindpng_6851196.png'
                            alt='Default Image'
                        />
                    )}
                </Center>
                <br/>
                <Box>
                        <Center>
                            <input type="file" onChange={onFileChange}  style={{ display: 'none' }} id="profilFoto"/>
                            <label htmlFor="profilFoto" >
                                    Selectează o imagine
                            </label>
                        </Center>
                    <Center> <Button onClick={onUpload} disabled={!selectedFile}>
                       Încarcă imaginea
                    </Button></Center>

                </Box>

            </Container>
            <br/>
            <br/>
            <Card align='left' boxShadow='2xl' p='5' rounded='md' bg='white'>
                <Center>
                    <CardHeader>
                        <Heading size='md'> Abonament </Heading>
                    </CardHeader>
                </Center>
                <CardBody>
                    <Center>
                        <img src={`http://localhost:8000/${userInfo.qr_code}`} alt="QR Code"/>
                    </Center>
                </CardBody>
            </Card>
            <br/>
            <br/>
            <Center>
                <Box>
                    <Text>
                        <Box as="span" fontWeight="bold" color={"#043e76"}>INFORMAȚII</Box>
                    </Text>
                    <Text>
                        <Box as="span" fontWeight="bold" color={"#043e76"}>Nume: </Box>
                        {userInfo.name}
                    </Text>
                    <Text>
                        <Box as="span" fontWeight="bold" color={"#043e76"}>Telefon: </Box>
                        {userInfo.phone}
                    </Text>
                    <Text>
                        <Box as="span" fontWeight="bold" color={"#043e76"}>Email: </Box>
                        {userInfo.email}
                    </Text>
                <br/>

                </Box>
            </Center>
            <Center> <Button onClick={onClickInfo}>
                Modifică informații
            </Button></Center>

        <br/>
        <br/>
        </Container>
</>
)
}