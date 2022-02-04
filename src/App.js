import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage.js';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className='app-inner'>
          <Routes>
            <Route path="/" exact element={<MainPage />}></Route>
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
