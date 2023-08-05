import { Box, Flex, Image, Spacer } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'


interface Props{
  onSearch: (searchText:string) => void;
}

const NavBar = ({onSearch}:Props) => {
  return (
    <>

    <Flex>
      <Box p={5}>
      <Image src={logo} boxSize='60px'/>  
      </Box>
      <Spacer/>
      <Box p={5}>
      <SearchInput onSearch={onSearch}/>

      </Box>
      <Spacer/>

      <Box p={5}>
      <ColorModeSwitch/>

      </Box>


      
    </Flex>

    </>

  )
}

export default NavBar