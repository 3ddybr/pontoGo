import { Flex, Stack, Text } from "@chakra-ui/react";
import { PlansCard } from "../PlansCard";

export function Plans() {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      maxW="40rem"
      direction="column"
      marginTop="5.63rem !important"
      // border="1px solid red"
    >
      <Stack
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text
          fontStyle="normal"
          fontWeight="800"
          fontSize="2.5rem"
          lineHeight="60px"
        >
          Encontre o plano perfeito
        </Text>
        <Text
          fontStyle="normal"
          fontWeight="400"
          fontSize="xl"
          lineHeight="30px"
          textAlign="center"
          opacity="0.7"
          marginBottom="4.38rem !important"
        >
          Escolha o plano que melhor se encaixa na sua empresa e faça sua
          assinatura, dentro de 72h iremos liberar seus acessos.
        </Text>
      </Stack>
      <PlansCard />
    </Flex>
  );
}
