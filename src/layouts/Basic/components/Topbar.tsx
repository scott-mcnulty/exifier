import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    // boxShadow: 'none'
  },
  homeLink: {
    textDecoration: 'none',
    color: 'white',
  }
}));

const Topbar: React.FC = props => {
  const { ...rest } = props;

  const classes = useStyles();

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root)}
      color="primary"
      position="fixed"
    >
      <Toolbar>
        <Link to="/" className={clsx(classes.homeLink)}>
          <Typography>
            This is a test app
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;