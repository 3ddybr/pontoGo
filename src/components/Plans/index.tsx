import { Flex, Stack, Text } from "@chakra-ui/react";
import { PlansCard } from "../PlansCard";

import { dataPlains } from "../../utils/dataPlains";
import PlansCarousel from "../PlansCarousel";
import PlansCarousel2 from "../PlansCarousel2";

export function Plans() {
  return (
    <Flex
      w="100%"
      alignItems="center"
      justifyContent="center"
      direction="column"
      marginTop="5.63rem !important"
      overflow="hidden"
      // border="1px solid red"
    >
      <Stack
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        w="100%"
        maxW="40rem"
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
      <Stack
        display="flex"
        alignItems="center"
        justify="center"
        w="100vw"
        direction="row"
        gap="4"
        // border="1px solid red"
      >
        {dataPlains.map((plan) => {
          return (
            <PlansCard
              key={plan.id}
              id={plan.id}
              title={plan.title}
              value={plan.value}
              counter_user={plan.counter_user}
              benefits={plan.benefits}
            />
          );
        })}
      </Stack>

      {/* <Stack
        display="flex"
        alignItems="center"
        justify="center"
        w="100%"
        direction="row"
        border="1px solid red"
      > */}
      {/* <PlansCarousel /> */}

      {/* <PlansCarousel2 /> */}
      {/* </Stack> */}
    </Flex>
  );
}
