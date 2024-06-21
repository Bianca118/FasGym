import {Box, Card, CardBody, CardHeader, Center, Container, Heading, Text} from "@chakra-ui/react";
import {Image} from '@chakra-ui/react'
import React, {useEffect} from "react";
import NavBar from "../components/Navbar";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";

export default function SettingsProfile() {


    const user = useSelector((state: RootState) => {
        return state.loginForm;
    });

    const token = localStorage.getItem('token');
    return (
        <>

            <NavBar/>
            <br/>
            <Container maxW={'7xl'}>

                <br/>
                <Container>
                    <Center h='100px' color='white'>
                        <Image

                            borderRadius='full'
                            boxSize='150px'
                            src='https://bit.ly/dan-abramov'
                            alt='Dan Abramov'
                        />
                    </Center>
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
                                <img src={`http://localhost:8000/${user.qr_code}`} alt="QR Code"/>
                            </Center>
                        </CardBody>
                    </Card>

                <br/>
                <br/>
            </Container>
        </>
    )

}