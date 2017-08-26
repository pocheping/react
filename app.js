'use strict';

import React from 'react';
import ReactDom from 'react-dom';
require('./src/style/main.scss');
import RouterApp from './src/routes/router-app.js';
// import Name from './name.jsx';

ReactDom.render(
  <RouterApp/>,
 
  document.getElementById('app')
)

if(module.hot) {
  module.hot.accept();
}
