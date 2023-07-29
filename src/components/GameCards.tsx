import React from 'react'
import { Game } from '../hooks/useGames';
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import PlatformIconsList from './PlatformIconsList';


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
            <PlatformIconsList platforms={game.parent_platforms.map(p=> p.platform)}/>
            
        </CardBody>
    </Card>
  )
}

export default GameCards