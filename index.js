import React from 'react';
import { render } from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

import App from './components/app';

render(
  <MuiThemeProvider muiTheme = {getMuiTheme()}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('rubick')
);
