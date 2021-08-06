import React from 'react';
import WebLayOut from './components/Layout';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/antd/dist/antd.css';
import './assets/css/bootstrap.css';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';

function App() {
  return (
    <div className="full-width">
          <WebLayOut/>
    </div>
  );
}

export default App;
