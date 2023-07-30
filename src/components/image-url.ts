

const getCroppedImageUrl = (url:string)=>{
    const target = 'media/';
    const imageSize = 'crop/600/400/';

    const index = url.indexOf(target)+ target.length;
    console.log(index);
    return url.slice(0, index) + imageSize + url.slice(index);

}


export default getCroppedImageUrl;