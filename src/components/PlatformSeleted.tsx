
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

  const choosePlatform =[
    
    {label:'PC'},
    {label:'PlayStation'},
    {label:'Xbox'},
    {label:'iOS'},
    {label:'Android'},
    {label:'Apple Macintosh'},

    
  ]

  const currentPlatform = choosePlatform.find(x => x.label===PlatformSeleted.name)
    

  return (

    <>
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>} >
            {currentPlatform?.label || 'Choose a Platform'}

            <MenuList>
                {data.map(platform => <MenuItem onClick={() =>onSelectedPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
               
            </MenuList>

        </MenuButton>
    </Menu>
    
    
    
    </>
    
  )
}

export default PlatformSeleted;