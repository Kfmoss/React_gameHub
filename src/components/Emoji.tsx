import { Image, ImageProps } from '@chakra-ui/react';

import emoji1 from '../assets/bulls-eye.webp';
import  emoji2 from '../assets/thumbs-up.webp';
import emoji3 from '../assets/meh.webp';

interface Props{
    rating: number;
}

const Emoji = ({rating}:Props) => {
    const emojiMap:{[key:number]:ImageProps} = {
         3:{src:emoji3, alt: 'Meh'},
         4:{src:emoji2, alt: 'Remmended'},
         5:{src:emoji1, alt: 'Exceptional'}
    }

    if (rating <3) return null;
  return (
    <Image {...emojiMap[rating]} boxSize='25px'/>
  )
}

export default Emoji