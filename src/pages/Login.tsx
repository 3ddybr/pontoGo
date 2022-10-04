import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  chakra,
  Text,
} from "@chakra-ui/react";
import bannerLoginImg from "../assets/bannerLoginImg.png";
import logoImg from "../assets/logoPurple.svg";

import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  return (
    <chakra.div
      w="100%"
      h="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      paddingTop="5rem"
    >
      <Flex
        w="100%"
        maxW="1130px"
        align="center"
        // gap={4}
        h="100%"
        justifyContent="space-between"
        // border="1px solid red"
      >
        <Flex align="center" direction="column">
          <Image src={bannerLoginImg} alt="Login" w="36.56rem" h="41.44rem" />

          <chakra.h1
            fontStyle="normal"
            fontWeight="700"
            fontSize="2.5rem"
            color="primaryColor"
            textAlign="center"
          >
            Bem vindo ao PontoGo
          </chakra.h1>

          <Text
            fontStyle="normal"
            fontWeight="400"
            fontSize="1.56rem"
            lineHeight="2.38rem"
            maxW={380}
            color="primaryColor"
            textAlign="center"
          >
            Aqui você fará toda gestão do seu sistema de pontos.
          </Text>
        </Flex>

        <FormControl maxW="25rem">
          <Flex direction="column" gap={30}>
            <Image src={logoImg} w="20.13rem" />

            <chakra.h1
              color="primaryColor"
              fontStyle="normal"
              fontWeight="700"
              fontSize="2.5rem"
              lineHeight="3.75rem"
              textAlign="center"
            >
              Faça login
            </chakra.h1>

            <Box>
              <FormLabel
                htmlFor="email"
                fontStyle="normal"
                fontWeight="400"
                fontSize="1.25rem"
                lineHeight="1.88rem"
                color="greyColor"
              >
                Email
              </FormLabel>
              <Input
                h="2.81rem"
                bgColor="white"
                border="1px solid"
                borderColor="greyColor"
                id="email"
                type="email"
                placeholder="exemplo@email.com"
              />
            </Box>

            <Box gap={20}>
              <FormLabel
                htmlFor="email"
                fontStyle="normal"
                fontWeight="400"
                fontSize="1.25rem"
                lineHeight="1.88rem"
                color="greyColor"
              >
                Senha
              </FormLabel>
              <Input
                type="password"
                h="2.81rem"
                bgColor="white"
                border="1px solid"
                borderColor="greyColor"
                id="pass"
                placeholder="*************"
              />
              <Button
                variant="link"
                color="primaryColor"
                fontStyle="normal"
                fontWeight="400"
                fontSize="1rem"
                lineHeight="1.37rem"
                textDecorationLine="underline"
                alignSelf="flex-start"
              >
                Esqueci minha senha
              </Button>
            </Box>
            <Button
              h="3.13rem"
              bgColor="primaryColor"
              color="white"
              onClick={() => navigate("/dashboard")}
            >
              Entrar
            </Button>
          </Flex>
        </FormControl>
      </Flex>
    </chakra.div>
  );
}
