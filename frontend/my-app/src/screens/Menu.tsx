import {
    Box,
    Card,
    CardBody,
    CardHeader,
    Center,
    Container, Flex,
    Heading,
    Text,
} from "@chakra-ui/react";
import {Image} from '@chakra-ui/react'
import React, {useEffect, useRef, useState} from "react";
import NavBar from "../components/Navbar";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import { useNavigate} from "react-router-dom";
import {onInitPhoto} from "../userPhoto/photoReducer";
import {onInitUser} from "../auth/userDetail/userInfoReducer";
import TrainerSlider from "../components/Carousel";



export default function Menu() {

    const dispatch =useDispatch();
    const navigate = useNavigate();
    const photo = useSelector((state: RootState) => {
        return state.photo;
    });

    const infoSub = useSelector((state: RootState) => {
        return state.subscriptions.subscr;
    });

    const user = useSelector((state: RootState) => {
        return state.loginForm;
    });
    const userInfo = useSelector((state: RootState) => {
        return state.userInfo;
    });
    useEffect(() => {
                dispatch(onInitUser());
               dispatch(onInitPhoto());
        }, [dispatch]);
    const handleClick = () => {

        navigate("/plans");
    }
    const handleClick2 = () => {

        navigate("/classes");
    }

    const selectedPlan = JSON.parse(localStorage.getItem('selectedPlan') || '{}');
    const selectedSubscription = JSON.parse(localStorage.getItem('selectedBook') || '{}');
    const handleOnClickProfil = () => {
        navigate("/user");
    }
    return (
        <>
            <NavBar/>
            <br/>
            <br/>
            <Container maxW={'7xl'}>

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
                <Container>

                </Container>
                <Card align='left'>
                    <Center>
                        <CardHeader>

                            <Heading size='md'>Hello, {userInfo.name} </Heading>
                        </CardHeader>
                    </Center>
                    <CardBody>
                        <Text>
                            <Box as="span" fontWeight="bold" color={"#043e76"}>Tip abonament: </Box>
                             {selectedPlan.name}
                        </Text>
                        <Center>
                            { selectedSubscription.status === 1 ? (
                                <Text>
                                    <Box as="span" fontWeight="bold" color={"#043e76"}>Activ </Box>
                                    {/*activ*/}
                                </Text>): (  <Text>
                                <Box as="span" fontWeight="bold" color={"#043e76"}>Inactiv</Box></Text>)}
                        </Center>
                        <Center>
                            <Image onClick={handleOnClickProfil} src={"qr-code.png"} style={{width: 80 ,height: 80}}></Image>
                        </Center>
                    </CardBody>
                </Card>

                <br/>
                <br/>
                <TrainerSlider/>

                <Flex justifyContent="center" alignItems="center" height="30vh">
                    <Box
                        width="300px"
                        height="100px"
                        borderColor="lightblue"
                        borderWidth='2px'
                        borderStyle='solid'
                        borderRadius="15px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        marginRight="10px"
                    >
                        <Heading size='sm' onClick={handleClick} style={{fontWeight: 'bold'}}>Abonamente</Heading>

                    </Box>
                    <Box
                        width="300px"
                        height="100px"
                        borderRadius="15px"
                        borderWidth='2px'
                        borderStyle='solid'
                        borderColor="lightblue"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Heading size='sm' onClick={handleClick2} style={{fontWeight: 'bold'}}>Clase</Heading>
                    </Box>
                </Flex>
                </Container>
            </Container>
        </>
    )

}