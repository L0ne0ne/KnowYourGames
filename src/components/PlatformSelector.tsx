import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Link,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatforms";
import { platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: platform) => void;
  selectedPlatform: platform | null;
}

function PlatformSelector({ onSelectPlatform, selectedPlatform }: Props) {
  const { data, error } = usePlatform();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "platform"}
      </MenuButton>
      <MenuList>
        {data.map((plat) => (
          <MenuItem onClick={() => onSelectPlatform(plat)} key={plat.id}>
            {plat.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
