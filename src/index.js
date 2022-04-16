import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import App from './start/App';
import SimpleReactLightbox from 'simple-react-lightbox'

ReactDOM.render(
  <HashRouter >

      <App />
  
  </HashRouter >,
  document.getElementById('root')
);

