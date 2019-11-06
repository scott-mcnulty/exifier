import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { GMap } from './components';
import UploadedImage from '../../../../interfaces/UploadedImage';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
        minHeight: 200,
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
)

const ImageLocation: React.FC<{image: UploadedImage}> = props => {
    const classes = useStyles(props);
    const {image} = props;

    return (
        <Card className={classes.card}>
          <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Image Location
              </Typography>
              <GMap exifData={image.exifData}/>
          </CardContent>
        </Card>
    )
}

export default ImageLocation;