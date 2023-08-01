import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames"
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";


const GameGrid = () => {
    const {data, error, isLoading} = useGames(); 
    const Skeleton= [1,2,3,4,5,6,7,8];
  

   

  return (
    <>
    {error && <text>{error}</text>}
    <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} paddingX= '5px'spacing={3}>

      {isLoading && Skeleton.map((Skeleton) => <GameCardContainer><GameCardSkeleton key={Skeleton}/></GameCardContainer> )}

      {data.map((game) => <GameCardContainer><GameCards key={game.id} game={game}/></GameCardContainer> )}
    </SimpleGrid>
    </>
  )
}

export default GameGrid