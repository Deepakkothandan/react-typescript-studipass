import * as React from "react";
import * as ReactDOM from "react-dom";

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Hello } from "./components/Hello";
const App = () => (
  <MuiThemeProvider>
    <Hello compiler="Studipass" framework="React" />
  </MuiThemeProvider>
);

ReactDOM.render(
     <App />  ,
    document.getElementById("content")
);
