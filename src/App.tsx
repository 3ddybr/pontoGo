import { Flex, Image, Stack } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";

import bg from "./assets/background.svg";
import logoBrainnyImg from "./assets/logoBrainny.svg";
import logoAmoPetImg from "./assets/logoAmoPet.svg";
import logoBusImg from "./assets/logoBus.svg";
import logoGoStudyImg from "./assets/logoGoStudy.svg";

import { Header } from "./components/Header";
import { Plans } from "./components/Plans";

function App() {
  return (
    <Flex
      align="top"
      justifyContent="center"
      bgImage={bg}
      bgRepeat="no-repeat"
      bgSize="100%"
      w="100%"
      h="100%"
    >
      <Stack
        w="100vw"
        maxW="75rem"
        display="flex"
        align="center"
        // border="1px solid red"
      >
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
      </Stack>
    </Flex>
  );
}

export default App;
