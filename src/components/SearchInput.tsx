import { Input, InputGroup, InputLeftElement, InputRightElement, Button } from "@chakra-ui/react"

import { BsSearch } from "react-icons/bs"



const SearchInput = () => {

    const BuT = <Button color={'green.200'} borderRadius={'30px'}>Go!</Button>
  return (
    <>
    <InputGroup>
    <InputLeftElement children={<BsSearch/>}/>
    <InputRightElement children = {BuT}/>
    <Input borderRadius={'30px'} placeholder="  Search games... " variant='filled' focusBorderColor="white"></Input>
    </InputGroup>

    </>
  )
    
  
}

export default SearchInput