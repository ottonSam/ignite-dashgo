import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex
      align="center"
    >
      { showProfileData && (  
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
      )}

      <Avatar 
        size="md" 
        name="Samuel Ótton" 
        src="https://github.com/ottonsam.png"
      />
    </Flex>
  );
}