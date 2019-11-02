import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


import UploadedImage from '../../../../interfaces/UploadedImage';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
        minHeight: 200,
        padding: theme.spacing(2),
    },
    media: {
      height: '100%',
      width: '100%'
    },
  }),
)

const Image: React.FC<{image: UploadedImage}> = props => {
    const classes = useStyles();
    const {image, ...rest} = props;

    return (
        <Card>
            <CardContent>
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