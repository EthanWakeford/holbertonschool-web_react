import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';

import { selectCourse } from './actions/courseActionCreators';

console.log(selectCourse());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
