import React, { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

import { dataPlains } from "../../utils/dataPlains";
import { PlansCard } from "../PlansCard";

export default function PlansCarousel() {
  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  } as const;

  const slides = dataPlains;

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  return (
    <Flex
      w="full"
      maxW="1200px"
      p={10}
      alignItems="center"
      justifyContent="center"
      // border="1px solid red"
    >
      <Flex
        w="100%"
        maxW="1200px"
        overflow="hidden"
        pos="relative"
        // border="1px solid yellow"
        // bgColor="green"
      >
        <Flex
          h="500px"
          w="100vw"
          maxW="1200px"
          {...carouselStyle}
          // border="1px solid black"
          // bgColor="blue"
        >
          {slides.map((slide, sid) => (
            <Box
              key={`slide-${sid}`}
              boxSize="full"
              shadow="md"
              flex="none"
              w="100%"
              maxW="350px"
              // bgColor="black"
            >
              <PlansCard
                key={slide.id}
                id={slide.id}
                title={slide.title}
                value={slide.value}
                counter_user={slide.counter_user}
                benefits={slide.benefits}
              />
            </Box>
          ))}
        </Flex>
        <Text {...arrowStyles} left="0" onClick={prevSlide}>
          &#10094;
        </Text>
        <Text {...arrowStyles} right="0" onClick={nextSlide}>
          &#10095;
        </Text>
      </Flex>
    </Flex>
  );
}
