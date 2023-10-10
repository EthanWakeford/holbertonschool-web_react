import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';

import * as idk from './actions/uiActionCreators';

console.log(idk.login());
console.log(idk.logout());
console.log(idk.displayNotificationDrawer());
console.log(idk.hideNotificationDrawer());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
