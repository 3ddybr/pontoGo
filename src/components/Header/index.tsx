import { Button, Image, Stack, Text, chakra, Flex } from "@chakra-ui/react";

import bannerImg from "../../assets/bannerImg.png";

export function Header() {
  return (
    <Flex
      alignItems="center"
      px={1}
      justifyContent="space-between"
      w="100vw"
      maxW="1200"
      overflow="hidden"
      // gap="4"
    >
      <Stack w="100vw" minW="32.5rem" h="100%" maxH="343px">
        <Text
          color="white"
          fontStyle="normal"
          fontWeight="300"
          fontSize="1.5rem"
          lineHeight="36px"
          letterSpacing="0.165em"
        >
          ESQUECE O PONTO MANUAL
        </Text>

        <Text
          color="white"
          fontStyle="normal"
          fontWeight="800"
          fontSize="2.5rem"
          lineHeight="60px"
          marginTop="15rem"
        >
          Chegou a nova realidade para{" "}
          <chakra.span margin="0" color="secondaryColor">
            Controle de Pontos
          </chakra.span>{" "}
        </Text>
        <Text
          color="white"
          fontStyle="normal"
          fontWeight="500"
          fontSize="xl"
          lineHeight="27px"
          maxW="35rem"
          margin="0"
        >
          Com o PontoGo seus colaboradores poderão bater seus pontos de forma
          fácil e rápida, possuindo também uma Dashboard intuitiva.
        </Text>
        <Flex
          display="flex"
          align="center"
          justify="flex-start"
          gap="4"
          mt="30px"
          h="100%"
        >
          <Button
            w="10rem"
            h="3.125rem"
            bg="secondaryColor"
            color="white"
            fontStyle="normal"
            fontSize="md"
            fontWeight="400"
            lineHeight="24px"
          >
            Assinar agora
          </Button>
          <Button
            w="160px"
            h="50px"
            bg="transparent"
            border="1px solid white"
            color="white"
            fontStyle="normal"
            fontSize="md"
            fontWeight="400"
            lineHeight="24px"
          >
            Ver planos
          </Button>
        </Flex>
      </Stack>
      <Image maxW="43.93rem" h="31.68rem" src={bannerImg} />
    </Flex>
  );
}
