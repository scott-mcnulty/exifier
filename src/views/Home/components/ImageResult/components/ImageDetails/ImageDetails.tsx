import React from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {
    ImageDetailsTable
} from './components';

import UploadedImage from '../../../../interfaces/UploadedImage';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
        padding: theme.spacing(2),
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
      fontSize: 14,
    },
  }),
);

const ImageDetails: React.FC<{image: UploadedImage}> = props => {
    const classes = useStyles();
    const {image} = props;

    // console.log(image.exifData)
    // alert(image.exifData)

    console.log(image.exifData)
    // console.log(image.exifData.ImageWidth)
    const info = !image.exifData ? "Could not read details from photo" : JSON.stringify(image.exifData)
    return (
        <Card>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Image Details
                </Typography>
                {/* <div className={classes.content}> */}

            <ImageDetailsTable image={image}/>

                {/* <Typography variant="body2">
                    {info}
                </Typography> */}
                {/* </div> */}
            </CardContent>


            {/* {Object.keys(image.exifData).map(key => {
                return (
                    <Typography>
                        {JSON.stringify(image.exifData[key])}
                    </Typography>
                )
            })} */}
        </Card>
    )
}

export default ImageDetails;