import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import {
  EmailForm
} from './components';

const useStyles = makeStyles((theme: Theme) => ({
root: {
    padding: theme.spacing(4)
  }
}));

const Contact: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <EmailForm />
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;