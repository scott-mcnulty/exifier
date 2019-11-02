import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
        minHeight: 200,
        padding: theme.spacing(2),
    },
  }),
)

const ImageLocation: React.FC = () => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <Typography>
                Image location
            </Typography>
        </Card>
    )
}

export default ImageLocation;