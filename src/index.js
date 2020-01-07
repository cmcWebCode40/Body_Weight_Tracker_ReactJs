import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { ThemeProvider } from 'styled-components';

import theme from './utils/theme';
import GlobalStyles from './utils/global';


import App from './App';

ReactDOM.render(
     <ThemeProvider theme={theme}>
          <App />
          <GlobalStyles />
     </ThemeProvider>
     ,
     document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
