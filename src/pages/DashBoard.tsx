import { CalendarIcon, WarningIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";

import logoImg from "../assets/logoPurple.svg";
import logoutImg from "../assets/logoutImg.png";
import { ButtonModal } from "../components/ButtonModal";
import { DashBoardTable } from "../components/DashBoardTable";

export function Dashboard() {
  return (
    <Flex h="100vh" border="4px solid primaryColor">
      <Flex
        w="18%"
        maxW="11.25rem"
        boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
        direction="column"
        justifyContent="space-between"
        sx={{
          zIndex: 1,
        }}
      >
        <Box>
          <Image src={logoImg} alt="Logo do PontoGo" p={30} h="6.5rem" />
          <HStack
            h="6.5rem"
            justify="center"
            borderY="1px solid rgba(0, 0, 0, 0.08)"
            borderLeft="4px solid #330693"
            cursor="pointer"
            color="primaryColor"
            transition="all 0.2s"
            _hover={{
              filter: "opacity(0.5)",
            }}
          >
            <CalendarIcon h="1.5rem" w="1.5rem" />
            <Text>Dashboard</Text>
          </HStack>
        </Box>
        <Button
          display="flex"
          alignItems="center"
          justifyContent="left"
          gap="4"
          paddingBottom="1.3rem"
        >
          <Image src={logoutImg} />
          Sair
        </Button>
      </Flex>

      <Box w="100%" bg="#F2F2F2" padding="1.87rem">
        <ButtonModal />

        <DashBoardTable />
      </Box>
    </Flex>
  );
}
