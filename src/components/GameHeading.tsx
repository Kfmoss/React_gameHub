import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"


interface Props{
    gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}: Props) => {


    const prox = [`${gameQuery.platform?.name} `, `${gameQuery.genre?.name} `];
    
    // const heading = `${gameQuery.platform?.name} ${gameQuery.genre?.name} Games` ;
    const subTitel=()=>{
        var pex = prox.map(x => {if (x!== 'undefined ')  return x}  )
        return pex;
    }
    
  return (
    <Heading as='h1'fontSize={'5xl'}>
        Games {subTitel()}
       

    </Heading>
  )
}

export default GameHeading