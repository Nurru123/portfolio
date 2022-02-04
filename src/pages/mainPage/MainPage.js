import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './MainPage.css';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { Overview } from '../overview/Overview';
import { Projects } from '../projects/Projects';
import { Contact } from '../contact/Contact';
import { About } from '../about/About';

export function MainPage() {

    return (
        <div className='main-page'>
            <Header />
            <div className='content'>
                <Routes>
                    <Route path="/" element={<Overview />}></Route>
                    <Route path="/projects" element={<Projects />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/about" element={<About />}></Route>
                </Routes>
            </div>
            <Footer />
        </div>
    )

}
