//import { useState } from 'react'

import './App.css'
import { Outlet } from 'react-router-dom';
import Header from './components/Header'

const App = () => {
  return (
      <div>
          <Header />
          <Outlet />
          <footer>© 2025 My Portfolio</footer>
      </div>
  );
};

export default App
