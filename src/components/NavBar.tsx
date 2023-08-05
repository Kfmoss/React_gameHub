import { Box, Flex, Image, Spacer } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'


const NavBar = () => {
  return (
    <>

    <Flex>
      <Box p={5}>
      <Image src={logo} boxSize='60px'/>  
      </Box>
      <Spacer/>
      <Box p={5}>
      <SearchInput/>

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