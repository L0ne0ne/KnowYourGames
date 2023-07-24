import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./colorModeSwitch";
import { SearchInput } from "./searchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

function NavBar({ onSearch }: Props) {
  const pic =
    "https://cdn.discordapp.com/attachments/782660161412005918/1005132206282383461/wallpaperflare.com_wallpaper_13.jpg";
  return (
    <HStack
      justifyContent="space-between"
      paddingRight="10"
      paddingLeft="10"
      paddingTop="3"
      paddingBottom="3"
    >
      <Image src={pic} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
