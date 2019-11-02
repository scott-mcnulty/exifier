import * as EXIF from "exif-js";

import UploadedImage from "./interfaces/UploadedImage";


export function readFile(image: UploadedImage, onLoadCallback: any) {
    var reader = new FileReader();
    reader.onload = onLoadCallback;
    reader.readAsArrayBuffer(image);
}


export const processImage2 = (e:any, image: UploadedImage) => {
    // console.log(e)
    const exifData = EXIF.readFromBinaryFile(e.target.result);
    // console.log(exifData);
    image.exifData = exifData
    // console.log(exifData)
}

export const processImage = (image: UploadedImage) => {

    const fileReader = new FileReader();
    fileReader.onload = function (event) {

        // console.log(this)

        const exifData = EXIF.readFromBinaryFile(this.result);
        // var exif = fileReader.readFromBinaryFile(this.result);
    
        // alert(JSON.stringify(exif));
        // console.log(exif)
        // image.exifData = exif;
        // const newImage: UploadedImage = {
        //     ...image,
        //     exifData
        // }
        // console.log(image)
        // return newImage;
        // console.log(exifData)
        image.exifData = exifData
        // console.log(exifData);
    
    };
    fileReader.readAsArrayBuffer(image)
    // return fileReader.result;
    // console.log(processImage);


    // const fileReader = new FileReader();
    // const processedImage = fileReader.onload = function (event) {

    //     const exifData = EXIF.readFromBinaryFile(this.result);
    //     // var exif = fileReader.readFromBinaryFile(this.result);
    
    //     // alert(JSON.stringify(exif));
    //     // console.log(exif)
    //     // image.exifData = exif;
    //     const newImage: UploadedImage = {
    //         ...image,
    //         exifData
    //     }
    //     // console.log(image)
    //     return newImage;
    
    // };
    // fileReader.readAsArrayBuffer(image)
    // return fileReader.result;
    // console.log(processImage);
}