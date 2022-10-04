import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Flex, Stack, Text, chakra, Button } from "@chakra-ui/react";

interface PlansCardProps {
  id: string;
  title: string;
  value: number;
  counter_user: string;
  benefits: Benefit[];
}

interface Benefit {
  title: string;
  active?: boolean;
}

export function PlansCard({
  id,
  title,
  value,
  counter_user,
  benefits,
}: PlansCardProps) {
  return (
    <Flex
      w="100%"
      maxW="20.81rem"
      h="30.69rem"
      direction="column"
      bgColor="rgba(255, 255, 255, 0.08)"
      backdropFilter="blur(2.5px)"
      alignItems="center"
      color="white"
      paddingY="2.5rem"
      border="1px solid #8A53FF"
      borderRadius="10px"
      margin="0 !important"
    >
      <Stack textAlign="center">
        <Text
          fontStyle="normal"
          fontWeight="400"
          fontSize="1.25rem"
          lineHeight="30px"
        >
          {title}
        </Text>
        <Text
          fontStyle="normal"
          fontWeight="800"
          fontSize="3.125rem"
          lineHeight="75px"
          margin="0 !important"
        >
          R$ {value}
        </Text>
        <Text
          fontStyle="normal"
          fontWeight="300"
          fontSize="1rem"
          lineHeight="24px"
          color="secondaryColor"
          margin="0 !important"
        >
          {counter_user}
        </Text>
      </Stack>

      <Stack
        fontStyle="normal"
        fontWeight="300"
        fontSize="1rem"
        lineHeight="24px"
        paddingTop="1.25rem"
        gap="1rem"
      >
        {benefits.map((benefit) => {
          return benefit.active ? (
            <chakra.p key={benefit.title} margin="0 !important">
              <CheckIcon /> {benefit.title}
            </chakra.p>
          ) : (
            <chakra.p key={benefit.title} margin="0 !important" opacity="0.3">
              <CloseIcon /> {benefit.title}
            </chakra.p>
          );
        })}
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
        marginTop="30px"
      >
        Assinar agora
      </Button>
    </Flex>
  );
}
