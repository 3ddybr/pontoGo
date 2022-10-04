import {
  Button,
  ButtonProps,
  Text,
  useDisclosure,
  VStack,
  chakra,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
} from "@chakra-ui/react";

import { TimeIcon } from "@chakra-ui/icons";

export function ButtonModal(props: ButtonProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        bg="primaryColor"
        color="white"
        fontWeight={200}
        fontSize="1rem"
        h="3.125rem"
        px="2.5rem"
        _hover={{
          bg: "secondaryColor",
        }}
        onClick={onOpen}
        {...props}
      >
        Registrar Ponto
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent px="5.75rem" py="3.75rem">
          <VStack>
            <ModalHeader color="greyColor" fontWeight="700" fontSize="1.25rem">
              Registrar novo ponto
            </ModalHeader>
            <TimeIcon boxSize="5.5rem" color="primaryColor" />
            <chakra.h1
              fontFamily="Poppins"
              color="greyColor"
              fontWeight="700"
              fontSize="1.87rem"
              lineHeight="45px"
            >
              10:30
            </chakra.h1>
            <Text
              fontStyle="normal"
              fontWeight="400"
              fontSize="1rem"
              lineHeight="1.5rem"
              color="primaryColor"
            >
              20/20/22
            </Text>
            <Button
              color="white"
              bg="primaryColor"
              fontWeight="300"
              w="12.5rem"
              h="3.13rem"
              _hover={{
                bg: "secondaryColor",
              }}
            >
              Bater Ponto
            </Button>
            <Button
              variant="outline"
              color="primaryColor"
              borderColor="primaryColor"
              fontWeight="300"
              w="12.5rem"
              h="3.13rem"
              onClick={onClose}
            >
              Cancelar
            </Button>
          </VStack>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  );
}
