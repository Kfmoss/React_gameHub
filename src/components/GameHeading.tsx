import { Heading, Text } from "@chakra-ui/react"
import { GameQuery } from "../App"


interface Props{
    gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}: Props) => {


    const prox = [`${gameQuery.platform?.name} `, `${gameQuery.genre?.name} `, `${gameQuery.sortOrder} `];
    
    // const heading = `${gameQuery.platform?.name} ${gameQuery.genre?.name} Games` ;
    const subTitel=()=>{
        var pex = prox.map(x => {if (x!== 'undefined ')  return x}  )
        return pex;
    }
    
  return (
    <Heading paddingBottom={3} as='h1'fontSize={'5xl'}>
        Games 
        <br />
        <Text fontSize='4xl'>{subTitel()} </Text>
       

    </Heading>
  )
}

export default GameHeading