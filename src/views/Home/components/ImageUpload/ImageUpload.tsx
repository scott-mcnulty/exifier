import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

import {
    Dropzone
} from './components';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
        height: 200,
        padding: theme.spacing(2),
    },
    input: {
      display: 'none',
    },
  }),
);

const ImageUpload: React.FC<{handleUploadedImages: Function}> = (props) => {
    const classes = useStyles();
    const {handleUploadedImages, ...rest} = props;

    return (
        <Card className={classes.card}>
            <Dropzone
                handleUploadedImages={handleUploadedImages}
            />
        </Card>
    )
}

export default ImageUpload;