import noImage from '../assets/no-image-placeholder.webp';

const getCroppedImageUrl = (url:string)=>{

    if(!url) return noImage;
    const target = 'media/';
    const imageSize = 'crop/600/400/';

    const index = url.indexOf(target)+ target.length;
    
    return url.slice(0, index) + imageSize + url.slice(index);

}


export default getCroppedImageUrl;