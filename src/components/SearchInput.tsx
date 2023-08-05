import { Input, InputGroup, InputLeftElement, InputRightElement, Button } from "@chakra-ui/react"
import { useRef } from "react"

import { BsSearch } from "react-icons/bs"

interface Props{
    onSearch: (searchText:string) => void;
}

const SearchInput = ({onSearch}:Props) => {

    const ref = useRef<HTMLInputElement>(null);
    const BuT = <Button type="submit" color={'green.200'} borderRadius={'30px'}>GO!</Button>
  return (


    <>
    <form onSubmit={(event)=> {

        event.preventDefault();
        if(ref.current) onSearch(ref.current.value);
    }}>

    <InputGroup>
    <InputLeftElement children={<BsSearch/>}/>
    <InputRightElement children = {BuT}/>
    <Input ref = {ref}borderRadius={'30px'} placeholder="  Search games... " variant='filled' focusBorderColor="white"></Input>
    </InputGroup>
    </form>


    </>
  )
    
  
}

export default SearchInput



// const SearchInput = ({onSearch}:Props) => {

//     const ref = useRef<HTMLInputElement>(null);
//     const BuT = <Button type="submit" color={'green.200'} borderRadius={'30px'}>GO!</Button>
//   return (


//     <>
//     <form method ='get'onSubmit={(event)=> {

//         event.preventDefault();
//         if(ref.current) onSearch(ref.current.value);
//     }}>

//     <InputGroup>
//     <InputLeftElement children={<BsSearch/>}/>
//     <InputRightElement onClick={(event)=>{ event.preventDefault(); console.log(ref.current?.value)}}  children = {BuT}/>
//     <Input ref = {ref}borderRadius={'30px'} placeholder="  Search games... " variant='filled' focusBorderColor="white"></Input>
//     </InputGroup>
//     </form>


//     </>
//   )
    
  
//}
