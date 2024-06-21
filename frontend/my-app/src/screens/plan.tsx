import {
    Button,
    Card,
    CardBody, CardFooter,
    CardHeader,
    Center,
    Container,
    Heading,
    Box,
    Text,
} from "@chakra-ui/react";
import React, {useEffect} from "react";
import NavBar from "../components/Navbar";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {useNavigate} from "react-router-dom";
import {onInitPlans} from "../plans/plansReducer";
import {onInitSubscription} from "../subscription/subscriptionReducer";
import {onSetSelectedPlan} from "../plans/planReducer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBook} from "@fortawesome/free-solid-svg-icons";
export default function Plan(){
    const navigate=useNavigate();

    const user =useSelector((state: RootState)=>{
        return state.loginForm;
    });

    const path ='C:/Users/fotab/PhpstormProjects/LicențaF/public/' + `{user.qr_code}`;
    const token = localStorage.getItem('token');
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(onInitPlans());
    },[dispatch]);
    const plans = useSelector((state:RootState)=>{
        return state.plans;
    });

    return(
        <>
            <NavBar/>
            <br/>
            <Container maxW={'7xl'}>
                <br/>
                <Container>
                    <Center>
                        <FontAwesomeIcon icon={faBook} bounce style={{color: "#b11616",}} />
                        <Heading size='md' marginLeft="8px">Abonamente disponibile</Heading>
                    </Center>
                    <Center>
                        <Heading size='sm'>Alege ce ți se potrivește</Heading>
                    </Center>


                        {plans.plans!== null && plans.plans !== undefined ? (plans.plans.map(plan => (
                           <div>
                               <br/>
                               <Card key={plan.id} align='center' marginBottom={4} boxShadow='2xl' p='5' rounded='md' bg='white'>
                                <CardHeader>
                                    <Center>
                                        <Heading size='md'> Abonament</Heading>
                                    </Center>
                                    <Heading size='md'>  {plan.name}</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text>
                                        <Box as="span" fontWeight="bold" color={"#043e76"}>Info: </Box>
                                        {plan.info}
                                    </Text>
                                   <Center>
                                       <Text>
                                           <Box as="span" fontWeight="bold" color={"#043e76"}>Durata: </Box>
                                           {plan.duration} zile
                                       </Text>
                                   </Center>
                                    <Center>
                                        <Text>
                                            <Box as="span" fontWeight="bold" color={"#043e76"}>Preț: </Box>
                                            {plan.price} RON
                                        </Text>
                                    </Center>
                                </CardBody>
                                <CardFooter>
                                    <Button  colorScheme={"blue"} onClick={()=>{dispatch(onSetSelectedPlan(plan));
                                        dispatch(onInitSubscription());}}>Achiziționează</Button>
                                </CardFooter>
                            </Card>

                           </div> ))) : <Text>Nu exista abonamente</Text>}
            </Container>
            </Container>
        </>
)
}