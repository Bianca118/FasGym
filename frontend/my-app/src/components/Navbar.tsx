'use client'

import {
    Box,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useColorModeValue,
     MenuGroup,
     Heading,
} from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useDispatch, useSelector} from "react-redux";
import {onInitLogout} from "../auth/login/loginReducer";
import {onInitPhoto} from "../userPhoto/photoReducer";
import {RootState} from "../store";

interface Props {
    children: React.ReactNode
}

export default function WithAction() {

    const dispatch = useDispatch();
    const handleOnClick = () => {
        navigate("/user");
    }
    const handleOnClickClass = () => {
        navigate("/classes");
    }
    const handleOnClickPlans = () => {
        navigate("/plans");
    }
    const handleOnClickProfil = () => {
        navigate("/user");
    }
    const handleOnClickLogout = () => {
        dispatch(onInitLogout());
        navigate("/login");
    }
    const handleOnClickHome = () => {
        navigate("/Home");
    }
    const photo = useSelector((state: RootState) => {
        return state.photo;
    });
    useEffect(() => {

        dispatch(onInitPhoto());
    }, [dispatch]);

    const navigate = useNavigate();
    return (
        <>
            <Box bg={"#4e88a4"} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Menu colorScheme={"red"}>
                        <MenuButton as={Button} colorScheme={"#d4e4f3"}>
                            <HamburgerIcon></HamburgerIcon>
                        </MenuButton>
                        <MenuList>
                            <MenuGroup title='Meniu' >
                                <MenuItem onClick={handleOnClickProfil}>Profil</MenuItem>
                                <MenuItem onClick={handleOnClickPlans}>Abonamente </MenuItem>
                                <MenuItem onClick={handleOnClickClass}>Clase </MenuItem>
                            </MenuGroup>
                            <MenuDivider />
                            <MenuGroup title='Logout'>
                                <MenuItem onClick={handleOnClickLogout}><FontAwesomeIcon icon={faRightFromBracket} style={{color: "#e00000",}} /></MenuItem>
                            </MenuGroup>
                        </MenuList>
                    </Menu>
                    <Heading variant={"h1"} color={"#feffe9"} onClick={handleOnClickHome}>FasGym</Heading>
                    <Flex alignItems={'center'}>
                        <Menu>
                            <MenuButton onClick={handleOnClick}
                                        as={Button}
                                        rounded={'full'}
                                        variant={'link'}
                                        cursor={'pointer'}
                                        minW={0}>
                                {photo.image !== '' ? (
                                    <Avatar
                                        size={'sm'}
                                        src={`http://localhost:8000/${photo.image}`}
                                    />
                                ) : (
                                    <Avatar
                                        size={'sm'}
                                        src={'kindpng_6851196.png'}
                                    />

                                )}
                            </MenuButton>
                        </Menu>
                    </Flex>
                </Flex>

                {/*{isOpen ? (*/}
                {/*    <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>*/}
                {/*        <DrawerOverlay />*/}
                {/*        <DrawerContent>*/}
                {/*            <DrawerHeader borderBottomWidth='2px' >FasGym</DrawerHeader>*/}
                {/*            <DrawerBody>*/}
                {/*                <p>Clase</p>*/}
                {/*                <p>Abonamente</p>*/}
                {/*                <p>Cont</p>*/}
                {/*            </DrawerBody>*/}
                {/*        </DrawerContent>*/}
                {/*    </Drawer>*/}
                {/*) : null}*/}
            </Box>
        </>
    )
}