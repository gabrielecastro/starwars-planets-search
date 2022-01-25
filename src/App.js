import React from 'react';
import './App.css';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <span>Hello, App!</span>
    </AppProvider>
  );
}

export default App;
