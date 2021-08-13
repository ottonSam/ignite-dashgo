import { Box, Flex } from "@chakra-ui/react";
import { Sidebar } from "../../components/Form/Sidebar";
import { Header } from "../../components/Header";

export default function userList() {
  return (
    <Box>
      <Header />

      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
      >
        <Sidebar />

        
      </Flex>
    </Box>
  );
}