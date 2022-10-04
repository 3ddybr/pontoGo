import {
  Box,
  HStack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const data = [
  {
    id: 1,
    colaborador: "Joao Araujo",
    data: "04/10/22",
    hora: "12:00h",
  },
  {
    id: 2,
    colaborador: "Maria  Jose",
    data: "01/10/22",
    hora: "06:00h",
  },
  {
    id: 3,
    colaborador: "Gedson Araujo",
    data: "13/10/18",
    hora: "12:00h",
  },
];

export function DashBoardTable() {
  const ths = ["colaborador", "data", "hora"];

  return (
    <Table
      sx={{
        borderCollapse: "separate",
        borderSpacing: `0 0.38rem`,
      }}
    >
      <Thead>
        <Tr>
          {ths.map((th) => (
            <Th
              fontFamily="Poppins"
              fontStyle="normal"
              fontWeight="600"
              fontSize="1.38rem"
              lineHeight="2rem"
              letterSpacing=".02em"
              color="greyColor"
              paddingLeft="0"
            >
              {th}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {data.map((value) => (
          <Tr bg="white">
            <Td paddingLeft="1rem" borderLeftRadius="10px">
              <HStack alignItems="left">
                <Box w="5px" bg="secondaryColor" borderRadius="30px" />
                <Box>
                  <Text
                    fontStyle="normal"
                    fontWeight="700"
                    fontSize="1.37rem"
                    lineHeight="33px"
                  >
                    {value.colaborador}
                  </Text>
                  <Text
                    fontStyle="normal"
                    fontWeight="400"
                    fontSize="1rem"
                    lineHeight="24px"
                  >
                    {new Intl.NumberFormat("pt-br", {
                      minimumIntegerDigits: 3,
                      useGrouping: false,
                    }).format(value.id)}
                  </Text>
                </Box>
              </HStack>
            </Td>
            <Td>{value.data}</Td>
            <Td borderRightRadius="10px">{value.hora}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
