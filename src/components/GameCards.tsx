import React from 'react'
import { Game } from '../hooks/useGames';
import { Card, CardBody, Heading, Image } from '@chakra-ui/react';


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
        </CardBody>
    </Card>
  )
}

export default GameCards