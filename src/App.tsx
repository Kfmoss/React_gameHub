
import { Box, Flex, Grid, GridItem,  Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSeleted from "./components/PlatformSeleted";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";


export interface GameQuery{
  genre : Genre | null;
  platform: Platform | null;
  sortOrder: string;
  onSearch: string;
}

function App() {

  const [gameQuery, setGameQuery] =useState<GameQuery>({} as GameQuery);


  

  return <Grid templateAreas={{ base: `"nav" "main"`,lg:`"nav nav" "aside main"`}}
      templateColumns={{
        base:'1fr', lg:'200px 1fr'
      }}
    
  > 
    <GridItem area={'nav'}><NavBar onSearch={(searchText)=>setGameQuery({...gameQuery, searchText})}/></GridItem>

    <Show above="lg">

      <GridItem area={'aside'} paddingLeft={5} marginBottom={5}>
        <GenreList selectedGenre={gameQuery.genre} onSelectedGenre={(genre)=> setGameQuery({...gameQuery, genre})}/>
        </GridItem>

    </Show>
    

    <GridItem area={'main'}>
      

      <Flex padding={4}>
        <Box marginRight={2}>
          <PlatformSeleted selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform)=>setGameQuery({...gameQuery,platform})}/>

        </Box>

        <Box paddingRight={2}>
        <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder)=> setGameQuery({...gameQuery, sortOrder})}/>

        </Box>
      
      </Flex>
        
        
      <GameGrid gameQuery={gameQuery}/>
      
      </GridItem>
  </Grid>
 
  

}

export default App