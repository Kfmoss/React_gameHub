
import { Badge } from '@chakra-ui/react';


interface Props{
    score:number;
}
const CriticScore = ({score}:Props) => {
    const colorScore = {score};

    /*
    better implementation would be : 

    
        let color = score > 75 ? 'green' : score > 60? 'yellow.500';
        return (
            <Badge colorSchema={color} fontSize='14px' paddingX={2}>{score}</Badge>
        );


    */


    if(colorScore.score>79){
        
        return (
      
          <>
          <Badge fontSize='14px' paddingX={2} borderRadius='5px' backgroundColor='green'>{score}</Badge>
          
          </>
        )
    }else{
        return (
      
            <>
            <Badge fontSize='14px' paddingX={2} borderRadius='5px' backgroundColor='yellow.500'>{score}</Badge>
            
            </>
          )
    }
}

export default CriticScore