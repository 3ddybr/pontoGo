import { Image, chakra, Button, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import logoImg from "../../assets/logoWhite.svg";

export function NavBar() {
  const navigate = useNavigate();

  return (
    <chakra.header
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      marginTop="42"
      px="1"
    >
      <Image
        src={logoImg}
        alt="Logo"
        width="164"
        height="38.15"
        color="black"
      />
      <chakra.div
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap="2.5rem"
      >
        <Link
          fontFamily="Poppins"
          fontStyle="normal"
          fontWeight="400"
          fontSize="16px"
          lineHeight="24px"
          color="white"
          cursor="pointer"
        >
          Início
        </Link>
        <Link
          fontFamily="Poppins"
          fontStyle="normal"
          fontWeight="400"
          fontSize="16px"
          lineHeight="24px"
          color="white"
          cursor="pointer"
        >
          Planos{" "}
        </Link>
        <Button
          paddingX="9"
          paddingY="3"
          fontStyle="normal"
          fontWeight="400"
          fontSize="16px"
          color="secondaryColor"
          onClick={() => navigate("/login")}
        >
          Fazer Login
        </Button>
      </chakra.div>
    </chakra.header>
  );
}
