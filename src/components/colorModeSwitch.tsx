import { HStack, Switch, useColorMode, Text } from "@chakra-ui/react";
function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text whiteSpace="nowrap">dark mode</Text>
    </HStack>
  );
}

export default ColorModeSwitch;
