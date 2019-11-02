import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {
  Image,
  ImageDetails,
  ImageLocation
} from './components';
import UploadedImage from '../../interfaces/UploadedImage';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    details: {
      padding: theme.spacing(1)
    }
  }),
)

const ImageResult: React.FC<{image: UploadedImage, imageNumber: number}> = props => {
  const classes = useStyles();
  const {image, imageNumber, ...rest} = props;

  // console.log(image);

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>Image {imageNumber}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.details}>

        <Grid container direction="row" spacing={1}>

          <Grid
            item
            xs={12}
            sm={12}
            lg={4}
            xl={4}
          >
            <Image image={image}/>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            lg={4}
            xl={4}
          >
            <ImageDetails image={image}/>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            lg={4}
            xl={4}
          >
            <ImageLocation />
          </Grid>

        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default ImageResult;