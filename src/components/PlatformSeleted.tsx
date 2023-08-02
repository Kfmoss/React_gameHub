import { Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react"
import usePlatforms from "../hooks/usePlatforms"
import { BsChevronDown } from "react-icons/bs";




const PlatformSeleted = () => {
    const {data, error} = usePlatforms();

    if(error){
        return null;
    }

    

  return (

    <>
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>} >
            PLATFORMS

            <MenuList>
                <MenuItem>please</MenuItem>
                <MenuItem>Mamma</MenuItem>
                <MenuItem>Help me!!</MenuItem>
                {data.map(platform => <MenuItem key={platform.id}>{platform.name}</MenuItem>)}
            </MenuList>

        </MenuButton>
    </Menu>
    
    </>
  )
}

export default PlatformSeleted;