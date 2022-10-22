import { Box, Center, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="gray.100"
      borderTop="1px solid"
      borderColor="gray.300"
      py="0.75rem"
      width="100%"
      fontSize="0.875rem"
      position="fixed"
      bottom="0"
    >
      <Center>
        <Flex>
          <Text as="b" color="gray.600" fontSize="0.875rem">
            &copy;2022 Copyright: Marcelo A. Gil
          </Text>
        </Flex>
      </Center>
    </Box>
  );
};

export default Footer;
