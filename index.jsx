import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/app';

// const React = require('react');
// const ReactDOM = require('react-dom/client');
// const App = require('./src/app');




//package.json:



/*

{
  "devDependencies": {
    "@babel/cli": "^7.23.4",
    "@babel/core": "^7.23.6",
    "@babel/node": "^7.22.19",
    "@babel/preset-env": "^7.23.6",
    "@babel/preset-react": "^7.23.3",
    "vite": "^5.0.8"
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {
    "bootstrap": "^5.3.2",
    "react": "^18.2.0",
    "react-bootstrap": "^2.9.1",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.21.0"
  }
}


*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);