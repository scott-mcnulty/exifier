import React from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import UploadedImage from '../../../../interfaces/UploadedImage';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
        minHeight: 200,
        padding: theme.spacing(2),
    },
  }),
);

const ImageDetails: React.FC<{image: UploadedImage}> = props => {
    const classes = useStyles();
    const {image} = props;

    // console.log(image.exifData)
    // alert(image.exifData)
    return (
        <Card className={classes.card}>
            <Typography>
                {JSON.stringify(image.exifData)}
            </Typography>
        </Card>
    )
}

export default ImageDetails;