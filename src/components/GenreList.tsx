
import { HStack, List, ListItem, Image, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres"
import getCroppedImageUrl from "./image-url";


interface Props{
  onSelectedGenre: (genre: Genre)=> void;
  selectedGenre : Genre | null;
}


const GenreList = ({selectedGenre, onSelectedGenre}:Props) => {
  const {data}= useGenres();
  return (
    <List>
        {data.map((genre) => <ListItem key={genre.id} paddingY='5px'> 
        <HStack>
          <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
          
          <Button fontWeight={genre.id === selectedGenre?.id ? "bold":'normal'} onClick={()=> onSelectedGenre(genre)} fontSize={'lg'} variant={'link'}>{genre.name}</Button>
            

        </HStack> </ListItem>)}
    </List>
  )
}

export default GenreList