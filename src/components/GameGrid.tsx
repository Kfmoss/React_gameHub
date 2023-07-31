import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames"
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";


const GameGrid = () => {
    const {games, error, isLoading} = useGames(); 
    const Skeleton= [1,2,3,4,5,6,7,8];
  

   

  return (
    <>
    {error && <text>{error}</text>}
    <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} padding= '10px'spacing={10}>
      {isLoading && Skeleton.map(Skeleton => <GameCardSkeleton key={Skeleton}/>)}
        {games.map((game) => <GameCards key={game.id} game={game}/>)}
    </SimpleGrid>
    </>
  )
}

export default GameGrid