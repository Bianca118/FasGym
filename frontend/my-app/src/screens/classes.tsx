import {
    Box,
    Button,
    Center,
    Container, Divider, Flex, Grid,
    Heading,
    Text,
    VStack
} from "@chakra-ui/react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React, {useEffect} from "react";
import NavBar from "../components/Navbar";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {useNavigate} from "react-router-dom";
import {onInitClasses} from "../classes/classesReducer";
import '../style.css'
import {faAnglesRight, faCalendar} from "@fortawesome/free-solid-svg-icons";
import {onSetSelectedClass} from "../classes/bookingPlan";

export default function Classes() {
    const navigate = useNavigate();

    const user = useSelector((state: RootState) => {
        return state.loginForm;
    });

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(onInitClasses());
    }, [dispatch]);
    const plans = useSelector((state: RootState) => {
        return state.classes;
    });
    return (

        <>
            <NavBar/>
            <br/>
            <Container maxW={'7xl'}>
                <br/>
                <Container>
                    <Center>
                        <FontAwesomeIcon icon={faCalendar} bounce style={{color: "#f00000",}}/>
                        <Heading size='md' marginLeft="8px">Clase de fitness</Heading>
                    </Center>
                    <Center>
                        <Heading size='sm'>Alege ce ți se potrivește</Heading>
                    </Center>
                    <br/>
                    <br/>

                    <VStack spacing={4} align="stretch" w="100%">
                        {plans.classes !== null && plans.classes !== undefined ? (plans.classes.map(plan => (
                            <Flex key={plan.id} bg="gray.50" p={4} borderRadius="md" boxShadow="md">
                                <Box w="30%">
                                    <Text fontWeight="bold">{plan.date}</Text>
                                </Box>
                                <div>
                                    <Divider orientation="vertical" borderColor="blue.500" borderWidth="5px"
                                             borderRadius="md"/>
                                </div>
                                <Box w="70%" pl={4} position="relative">
                                    <Text fontWeight="bold">Clasa:  {plan.name}</Text>
                                    {plan.trainer.name !== '' ? <Text>Trainer: {plan.trainer.name}</Text> : ''}
                                    <Button
                                        onClick={() => {
                                            dispatch(onSetSelectedClass(plan));
                                           navigate('/class-info');}}
                                        colorScheme="white"
                                        size="sm"
                                        position="absolute"
                                        bottom="3px"
                                        right="4px"
                                    >
                                        <FontAwesomeIcon icon={faAnglesRight} style={{color: "#4e85e4",}} />
                                    </Button>
                                </Box>
                            </Flex>
                        ))) : <Text>Nu s-au găsit</Text>}
                    </VStack>


                </Container>
            </Container>
        </>
    )
}
