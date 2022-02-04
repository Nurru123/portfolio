import React from 'react';
import './App.css';
import { MainPage } from './pages/mainPage/MainPage'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className='app-inner'>
          <MainPage />
        </div>
      </div>
    );
  }
}

export default App;
