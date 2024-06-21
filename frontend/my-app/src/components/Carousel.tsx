
import React, {useEffect, useState} from 'react';
import { Box, Heading, Image, Text, VStack } from '@chakra-ui/react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {onInitTrainers} from "../trainers/trainersReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";

const TrainerSlider: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
    };
    const trainers = useSelector((state: RootState) => {
        return state.trainers.trainers;
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(onInitTrainers());
    }, [dispatch]);

    return (
        <Box>
            <Heading as="h2" size="m" mb={6}>Antrenori</Heading>
            <Slider {...settings}>
                {null!== trainers && trainers.map((trainer, id) => (
                    <Box key={id} p={4} >
                        <Box  position="relative" borderWidth="1px" borderRadius="lg" overflow="hidden" width="150px" height="150px" bg="white" boxShadow="md" style={{backgroundImage:`url(http://localhost:8000/trainers/${trainer.image_path})`,backgroundSize: 'cover'}} >
                           <Box >
                               <VStack mt={4} position="absolute">
                                   <Heading as="h5" size="s" color="white">{trainer.name}</Heading>
                               </VStack>
                           </Box>

                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default TrainerSlider;
