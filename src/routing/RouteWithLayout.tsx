import React from 'react';
import { Route } from 'react-router-dom';

const RouteWithLayout: React.FC<{path: string, exact: boolean, layout: React.FC, component: React.FC<any>}> = props => {
  const { layout: Layout, component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

export default RouteWithLayout;