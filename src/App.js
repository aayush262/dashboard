import React from 'react';
import './App.css';
import {AppRoutes} from './AppRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="wrapper">
      <ToastContainer/>
      <AppRoutes></AppRoutes>
    </div>
  );
}

export default App;
