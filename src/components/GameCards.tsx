
import { Game } from '../hooks/useGames';
import { Box, Card, CardBody, HStack, Heading, Image} from '@chakra-ui/react';
import PlatformIconsList from './PlatformIconsList';
import CriticScore from './CriticScore';


interface Props{
    game:Game;
}

const GameCards = ({game}:Props ) => {
  return (
    <Card borderRadius={10} border={'1px solid white'} overflow={'hidden'}>
        <Image src={game.background_image}/>
        <CardBody>
            <Heading fontSize={'2xl'}>
                {game.name}

            </Heading>

            <HStack justifyContent={'space-between'}>

              <Box>
                  <PlatformIconsList platforms={game.parent_platforms.map(p=> p.platform)}/>

              </Box>
              <Box>
              <CriticScore score={game.metacritic}/>

              </Box>
              

            

            </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCards


