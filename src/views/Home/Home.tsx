import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import * as EXIF from "exif-js";


import {
  ImageUpload,
  ImageResult
} from './components';
import {
  processImage,
  readFile,
  processImage2
} from './ImageProcessing';
import UploadedImage from './interfaces/UploadedImage';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}));

// Gets EXIF data for uploaded images
function processImages(images: UploadedImage[], setImagesCallback: any){

  // Use promises because file reader takes time to finish reading
  let promises: Promise<any>[] = [];
  images.map((image: UploadedImage) => {
    let filePromise: Promise<any> = new Promise(resolve => {
      const reader = new FileReader();
      reader.readAsArrayBuffer(image);

      // console.log(image)
      // console.log(Object.assign({}, image))
      // Resolve the image with its EXIF data
      reader.onload = () => resolve({
        // ...image,
        image,
        exifData: EXIF.readFromBinaryFile(reader.result)});
    })
    promises.push(filePromise)
  })

  // Wait until all reading is finished
  Promise.all(promises).then(contents => {
    // console.log(contents)
    setImagesCallback(contents.map(content => ({
      file: content.image,
      preview: content.image.preview,
      exifData: content.exifData
    }))
    )
    // setImagesCallback(contents)
  })
}



const Home: React.FC = props => {
  const classes = useStyles(props);
  let [images, setImages] = React.useState([] as UploadedImage[]);

  const handleUploadedImages = (images: UploadedImage[]) => {
    // console.log(images);
    processImages(images, setImages)
    // console.log(images);

  }

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          xs={12}
          sm={12}
          lg={12}
          xl={12}
        >
          <ImageUpload
            handleUploadedImages={handleUploadedImages}
          />
        </Grid>

        {images.map((image: UploadedImage, index) => (
          <Grid
            key={`${image.file.name}-result`}
            item
            xs={12}
            sm={12}
            lg={12}
            xl={12}
          >
            <ImageResult image={image} imageNumber={index + 1}/>
          </Grid>
        ))}

      </Grid>
    </div>
  );
};

export default Home;