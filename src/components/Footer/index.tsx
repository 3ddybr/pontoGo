import { Flex, Stack, chakra, Image } from "@chakra-ui/react";

import logoInstagram from "../../assets/logoInstagram.png";
import logoFacebook from "../../assets/logoFacebook.png";
import logoLinkedin from "../../assets/logoLinkedin.png";

export function Footer() {
  return (
    <Stack w="98.5vw" paddingTop="100px" margin="0 !important">
      <Stack
        borderTop=".5px solid #8A53FF"
        borderBottom=".5px solid #8A53FF"
        align="center"
        justifyContent="center"
        paddingY="1.25rem"
      >
        <Stack
          align="center"
          justifyContent="space-between"
          direction="row"
          w="32.21rem"
        >
          <Stack>
            <chakra.p
              color="white"
              fontStyle="normal"
              fontWeight="700"
              fontSize="1.25rem"
              lineHeight="1.88rem"
            >
              @pontogo
            </chakra.p>
            <chakra.span
              color="white"
              fontStyle="normal"
              fontWeight="300"
              fontSize="1rem"
              lineHeight="1.5rem"
            >
              Se conecta com a gente
            </chakra.span>
          </Stack>
          <Image src={logoInstagram} w="60px" h="60px" margin="0 !important" />
          <Image src={logoFacebook} w="60px" h="60px" margin="0 !important" />
          <Image src={logoLinkedin} w="60px" h="60px" margin="0 !important" />
        </Stack>
      </Stack>
      <Stack
        w="100%"
        align="center"
        justify="center"
        paddingY="60px"
        margin="0 !important"
      >
        <chakra.span color="white">
          PontoGo - Todos direitos reservados
        </chakra.span>
      </Stack>
    </Stack>
  );
}
