import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


import UploadedImage from '../../../../interfaces/UploadedImage';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
        // minHeight: 200,
        padding: theme.spacing(2),
    },
    media: {
      height: '100%',
      width: '100%'
    },
    title: {
      fontSize: 14,
    },
  }),
)

const Image: React.FC<{image: UploadedImage}> = props => {
    const classes = useStyles();
    const {image, ...rest} = props;

    return (
        <Card>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {image.file.name}
                </Typography>
                <img
                    className={classes.media}
                    id={image.file.name}
                    key={image.file.name}
                    src={image.preview}
                />
            </CardContent>
        </Card>
    )
}

export default Image;