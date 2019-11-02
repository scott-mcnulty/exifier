import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Divider, Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ImageIcon from '@material-ui/icons/Image';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import EmailIcon from '@material-ui/icons/Email';
import InfoIcon from '@material-ui/icons/Info';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import { 
  SidebarNav 
} from './components';
import SidebarPageLink from './interfaces/SidebarPageLink';

const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    // backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar: React.FC<{className?: string, open: boolean, variant: 'permanent' | 'persistent' | 'temporary', onClose: any, onOpen: any}> = props => {
  const { className, open, variant, onClose, onOpen, ...rest } = props;

  const classes = useStyles();

  const pages: SidebarPageLink[] = [
    {
      title: 'Home',
      href: '/home',
      icon: <DashboardIcon />
    },
    {
      title: 'About',
      href: '/about',
      icon: <InfoIcon />
    },
    {
      title: 'Contact',
      href: '/contact',
      icon: <EmailIcon />
    },
  ];

  return (
    <SwipeableDrawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      onOpen={onOpen}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root)}
      >
        <SidebarNav
          className={classes.nav}
          pages={pages}
          onClose={onClose}
        />
      </div>
    </SwipeableDrawer>
  );
};

export default Sidebar;