import {
    Box,
    Button,
    Card,
    CardBody, CardFooter,
    CardHeader,
    Center,
    Container, Flex,
    Heading,
    Text,
} from "@chakra-ui/react";
import React, {useEffect} from "react";
import NavBar from "../components/Navbar";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBook} from "@fortawesome/free-solid-svg-icons";
import {onCancelBooking, onInitBookings} from "../classes/bookingReducer";

export default function ClassInfo() {
    const navigate = useNavigate();

    const user = useSelector((state: RootState) => {
        return state.loginForm;
    });

    const selectedClass = useSelector((state: RootState) => {
        return state.class.selectedClass;
    });
    const handleClickPay = () => {
        toast.error("This is a toast notification !");
    }
    const path = 'C:/Users/fotab/PhpstormProjects/LicențaF/public/' + `{user.qr_code}`;
    const token = localStorage.getItem('token');
    const dispatch = useDispatch();


    return (
        <>
            <NavBar/>
            <br/>
            <Container maxW={'7xl'}>
                <br/>
                <Container>
                    <Center>
                        <FontAwesomeIcon icon={faBook} bounce style={{color: "#b11616",}}/>
                        <Heading size='md' marginLeft="8px">Informații clasă</Heading>
                    </Center>
                    <div>
                        <br/>
                        <br/>
                        <Center>
                            <Card key={selectedClass.id} align='center' marginBottom={4} boxShadow='2xl' p='5' rounded='md' bg='white'>
                                <CardHeader>
                                    <Heading size='md'> {selectedClass.name}</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text>
                                        <Box as="span" fontWeight="bold" color={"#043e76"}>Data: </Box>
                                        {selectedClass.date}
                                    </Text>

                                    <Text>
                                        <Box as="span" fontWeight="bold" color={"#043e76"}>Locuri: </Box>
                                        {selectedClass.remaining_seats} / {selectedClass.seats}
                                    </Text>
                                    {selectedClass.trainer.name !== '' ? <Text>
                                        <Box as="span" fontWeight="bold" color={"#043e76"}>Trainer: </Box>
                                        {selectedClass.trainer.name}
                                    </Text> : ''}
                                    <Center>
                                    </Center>
                                </CardBody>
                                <CardFooter>
                                    <Flex width="100%" justifyContent="space-between" alignItems="center" p={4}>

                                        <Button colorScheme={"blue"} size="md" mr={4} onClick={() => {
                                            dispatch(onInitBookings());
                                        }}>
                                            Rezervă
                                        </Button>
                                        <Button colorScheme={"red"} size="md" ml={4} onClick={() => {
                                            dispatch(onCancelBooking());
                                        }}>
                                            Anulează
                                        </Button>
                                    </Flex>
                                </CardFooter>
                            </Card>
                        </Center>
                    </div>

                </Container>
            </Container>
        </>
    )
}