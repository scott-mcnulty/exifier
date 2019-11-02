import React, {useCallback} from 'react'
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {useDropzone} from 'react-dropzone';

import UploadedImage from '../../../interfaces/UploadedImage';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dropzone: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderStyle: 'dashed',
      border: '3px gray',
      '&:hover': {
        cursor: 'pointer'
      }
    },
  }),
);

const Dropzone: React.FC<{handleUploadedImages: Function}> = props => {
  const classes = useStyles(props);
  const { handleUploadedImages, ...rest } = props;

  const onDrop = useCallback(acceptedFiles => {

    const images: UploadedImage = acceptedFiles.map((file: File) => Object.assign(file, {
      preview: URL.createObjectURL(file)
    }))
    // console.log(images);
    

    handleUploadedImages(images);
    // acceptedFiles.map((file: File) => processImages(file))
  }, [])
  
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/jpg'
    // accept: 'image/jpeg, image/png'
  })

  return (
    <div className={classes.dropzone} {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <Typography>Drop the files here...</Typography> :
          <Typography>Click to upload or drop files here</Typography>
      }
    </div>
  )
}

export default Dropzone;