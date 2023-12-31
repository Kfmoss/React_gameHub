import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

interface Props{
    children : ReactNode;
}


const GameCardContainer = ({children}:Props) => {
  return (
    <Box  borderRadius={10} border={'1px solid white'} overflow={'hidden'}>{children}</Box>
  )
}

export default GameCardContainer