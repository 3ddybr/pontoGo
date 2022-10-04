import { Flex, Image, Stack } from "@chakra-ui/react";

import bg from "../assets/background.svg";
import logoBrainnyImg from "../assets/logoBrainny.png";
import logoAmoPetImg from "../assets/logoAmoPet.svg";
import logoBusImg from "../assets/logoBus.svg";
import logoGoStudyImg from "../assets/logoGoStudy.svg";

import { NavBar } from "../components/NavBar";
import { Header } from "../components/Header";
import { Plans } from "../components/Plans";
import { Footer } from "../components/Footer";

export function LandingPage() {
  return (
    <Flex
      justifyContent="center"
      bgImage={bg}
      bgRepeat="no-repeat"
      bgSize="cover"
      w="100%"
      h="100%"
    >
      <Stack w="100vw" maxW="75rem" display="flex" align="center">
        <NavBar />
        <Header />
        <Flex
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          flexWrap="wrap"
          // border="1px solid red"
        >
          <Image src={logoBrainnyImg} />
          <Image src={logoAmoPetImg} />
          <Image src={logoBusImg} />
          <Image src={logoGoStudyImg} />
        </Flex>
        <Plans />
        <Footer />
      </Stack>
    </Flex>
  );
}
