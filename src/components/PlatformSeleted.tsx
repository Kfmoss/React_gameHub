
import { Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react"
import usePlatforms from "../hooks/usePlatforms"
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/useGames";

interface Props{

  onSelectedPlatform: (platform: Platform) => void;
  
  selectedPlatform: Platform | null;
}





const PlatformSeleted = ({onSelectedPlatform}:Props) => {
  const {data} = usePlatforms();

  
    

  return (

    <>
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>} >
            PLATFORMS

            <MenuList>
                {data.map(platform => <MenuItem onClick={() =>onSelectedPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
               
            </MenuList>

        </MenuButton>
    </Menu>
    
    
    
    </>
    
  )
}

export default PlatformSeleted;