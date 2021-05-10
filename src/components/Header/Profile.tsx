import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
      <Flex align="center">
        <Box mr="4" textAlign="right">
          <Text>Marco Aurélio</Text>
          <Text color="gray.300" fontSize="small">
            marco@hotmail.com
          </Text>
        </Box>

        <Avatar
          size="md"
          name="Marco Aurelio"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHvParcwUu9Sw/profile-displayphoto-shrink_800_800/0/1591747953539?e=1625702400&v=beta&t=TAK8b4l9Ro68k6sHLEX2aqfuSNIi3dI2vADJOsAUn6k"
        />
      </Flex>
  );
}
