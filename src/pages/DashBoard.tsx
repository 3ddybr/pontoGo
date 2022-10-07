import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { CalendarIcon, DragHandleIcon } from "@chakra-ui/icons";

import { ButtonModal } from "../components/ButtonModal";
import { DashBoardTable } from "../components/DashBoardTable";
import { Sidebar } from "../components/SiderBar";

interface DashboardProps {
  userType: "administrator" | "colaborador";
}
//info vem depois do login pelo cookies qual role do user
const userRoleActive = "colaborador";

export function Dashboard({ userType = userRoleActive }: DashboardProps) {
  return (
    <>
      {userType === "administrator" ? (
        <Flex h="100vh" border="4px solid primaryColor">
          <Sidebar
            description="Dashboard"
            icon={<DragHandleIcon h="1.5rem" w="1.5rem" />}
          />

          <Box w="100%" bg="#F2F2F2" padding="1.87rem">
            <DashBoardTable />
          </Box>
        </Flex>
      ) : (
        <Flex h="100vh" border="4px solid primaryColor">
          <Sidebar
            description="Meus Registros"
            icon={<CalendarIcon h="1.5rem" w="1.5rem" />}
          />

          <Box w="100%" bg="#F2F2F2" padding="1.87rem">
            <ButtonModal />

            <DashBoardTable />
          </Box>
        </Flex>
      )}
    </>
  );
}
