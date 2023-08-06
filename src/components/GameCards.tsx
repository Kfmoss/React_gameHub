
import { Game } from '../hooks/useGames';
import { Box, Card, CardBody, Flex, HStack, Heading, Image} from '@chakra-ui/react';
import PlatformIconsList from './PlatformIconsList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from './image-url';
import Emoji from './Emoji';


interface Props{
    game:Game;
}

const GameCards = ({game}:Props ) => {
  return (
    /// width={'300px'} borderRadius={10} border={'1px solid white'} overflow={'hidden'}
    <Card >
        <Image src={getCroppedImageUrl (game.background_image)}/>
        <CardBody>

            <HStack marginBottom={2} justifyContent={'space-between'}>

              <Box>
                  <PlatformIconsList platforms={game.parent_platforms.map(p=> p.platform)}/>

              </Box>
              <Flex>

              <Box paddingX={2}>
              <CriticScore score={game.metacritic}/>
              </Box>
              <Box paddingX={2}>
              <Emoji rating={game.rating_top}/>
              </Box>

              </Flex>
              
            </HStack>
            <Heading fontSize={'2xl'}>
                {game.name}

            </Heading>
        </CardBody>
    </Card>
  )
}

export default GameCards


