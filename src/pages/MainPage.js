import React, { Component } from 'react';
import './MainPage.css';
import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header';
import { Overview } from '../components/overview/overview';

class MainPage extends Component {
    render() {
        return (
            <div className='main-page'>
                <Header />
                <Overview />
                <Footer />
            </div>
        )
    }
}

export default MainPage;