import React from 'react';
import { Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createBrowserHistory } from 'history';

import theme from './theme';
import Routes from './Routes';
import './assets/scss/index.scss';


const browserHistory = createBrowserHistory();


const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
