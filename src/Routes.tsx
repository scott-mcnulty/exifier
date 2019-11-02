import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import RouteWithLayout from './routing';

import { 
  Main as MainLayout,
} from './layouts';
import {
  Home as HomeView,
  About as AboutView,
  Contact as ContactView,
  NotFound as NotFoundView
} from './views';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/home"
      />

      <RouteWithLayout
        path="/home"
        exact
        layout={MainLayout}
        component={HomeView}
      />

      <RouteWithLayout
        path="/about"
        exact
        layout={MainLayout}
        component={AboutView}
      />

      <RouteWithLayout
        path="/contact"
        exact
        layout={MainLayout}
        component={ContactView}
      />

      <RouteWithLayout
        path="/not-found"
        exact
        layout={MainLayout}
        component={NotFoundView}
      />

      {/* Fallthrough for no matches */}
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;