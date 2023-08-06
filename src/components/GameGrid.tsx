import {Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames"
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import {Platform} from "../hooks/useGames";
import { GameQuery } from "../App";


interface Props{
  gameQuery: GameQuery;
  
}


const GameGrid = ({gameQuery}:Props) => {
    const {data, error, isLoading} = useGames(gameQuery); 
    const Skeleton= [1,2,3,4,5,6,7,8];
  

   

  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} paddingX= '10px'spacing={4}>

      {isLoading && Skeleton.map((Skeleton) => <GameCardContainer key={Skeleton}><GameCardSkeleton /></GameCardContainer> )}

      {data.map((game) => <GameCardContainer key={game.id}><GameCards  game={game}/></GameCardContainer> )}
    </SimpleGrid>
    </>
  )
}

export default GameGrid