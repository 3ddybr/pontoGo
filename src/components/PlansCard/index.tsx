import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Flex, Stack, Text, chakra, Button } from "@chakra-ui/react";

export function PlansCard() {
  return (
    <Flex
      w="100%"
      maxW="20.81rem"
      h="100vh"
      maxH="30.69rem"
      direction="column"
      bgColor="rgba(255, 255, 255, 0.08)"
      alignItems="center"
      color="white"
      paddingTop="2.5rem"
      border="1px solid secondaryColor"
      backdropFilter="blur(2.5px)"
      borderRadius="10px"
    >
      <Stack textAlign="center">
        <Text
          fontStyle="normal"
          fontWeight="400"
          fontSize="1.25rem"
          lineHeight="30px"
        >
          Plano Prata
        </Text>
        <Text
          fontStyle="normal"
          fontWeight="800"
          fontSize="3.125rem"
          lineHeight="75px"
          margin={0}
        >
          R$ 50
        </Text>
        <Text
          fontStyle="normal"
          fontWeight="300"
          fontSize="1rem"
          lineHeight="24px"
          color="secondaryColor"
        >
          Uso de 10 colaboradores
        </Text>
      </Stack>
      <Stack
        fontStyle="normal"
        fontWeight="300"
        fontSize="1rem"
        lineHeight="24px"
        marginTop="1.25rem"
        gap="1rem"
      >
        <chakra.p>
          <CheckIcon /> Área de meus registros
        </chakra.p>
        <chakra.p>
          <CheckIcon /> Dashboard
        </chakra.p>
        <chakra.p>
          <CheckIcon /> Acesso de 10 colaboradores
        </chakra.p>
        <chakra.p>
          <CloseIcon /> Suporte exclusivo
        </chakra.p>
        <chakra.p>
          <CloseIcon /> Email corporativo
        </chakra.p>
      </Stack>
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
    </Flex>
  );
}
