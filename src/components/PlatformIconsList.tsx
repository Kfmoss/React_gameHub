import {FaWindows, FaAndroid, FaXbox, FaApple, FaLinux} from 'react-icons/fa';
import { Platform } from '../hooks/useGames';
import {MdPhoneIphone} from 'react-icons/md';
import {SiNintendo} from 'react-icons/si';
import {BsGlobe} from 'react-icons/bs';
import { HStack, Icon, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';


interface Props{
    platforms: Platform[];

}

const PlatformIconsList = ({platforms}:Props) => {
    const iconMap: {[key:string]:IconType}={
        pc: FaWindows,
        xbox: FaXbox,
        android: FaAndroid,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe

        


    }
  return (
    <>
    <HStack marginY={'10px'}>

    {platforms.map((platform)=>(<Icon as={iconMap[platform.slug]} color={'gray.500'}/>))}

    </HStack>
    </>
    
    
  )
}

export default PlatformIconsList