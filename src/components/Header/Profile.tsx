import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex
      align="center"
    >
      <Box
        mr="4"
        textAlign="right"
      >
        <Text>Samuel Ótton</Text>
      
        <Text
          color="gray.300"
          fontSize="small"
        >
          ottonSam@gmail.com
        </Text>
      </Box>

      <Avatar 
        size="md" 
        name="Samuel Ótton" 
        src="https://github.com/ottonsam.png"
      />
    </Flex>
  );
}