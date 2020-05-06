import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DarkThemeProvider } from 'react-lib';

ReactDOM.render(
  <DarkThemeProvider>
    <App />
  </DarkThemeProvider>,
  document.getElementById('root')
);


