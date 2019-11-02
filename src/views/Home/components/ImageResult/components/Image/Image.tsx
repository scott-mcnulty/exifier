import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';


import UploadedImage from '../../../../interfaces/UploadedImage';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
        minHeight: 200,
        padding: theme.spacing(2),
    },
    media: {
    //   height: 140,
    },
  }),
)

const Image: React.FC<{image: UploadedImage}> = props => {
    const classes = useStyles();
    const {image, ...rest} = props;

    return (
        <Card>
            {/* <CardMedia
                className={classes.media}
                src={<img src={image.preview} />}
                title="Contemplative Reptile"
            /> */}
       
         <img
             id={image.name}
             key={image.name}
             src={image.preview}
        />
        </Card>
    )
}

export default Image;