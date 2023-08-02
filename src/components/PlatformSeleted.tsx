
import { Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react"
import usePlatforms from "../hooks/usePlatforms"
import { BsChevronDown } from "react-icons/bs";





const PlatformSeleted = () => {
  const {data} = usePlatforms();

  
    

  return (

    <>
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>} >
            PLATFORMS

            <MenuList>
                {data.map(platform => <MenuItem key={platform.id}>{platform.name}</MenuItem>)}
               
            </MenuList>

        </MenuButton>
    </Menu>
    
    </>
  )
}

export default PlatformSeleted;