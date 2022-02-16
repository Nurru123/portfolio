import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import Overview from '../overview/Overview';
import { Projects } from '../projects/Projects';
import { Contact } from '../contact/Contact';
import { About } from '../about/About';
import Login from '../login/Login';
import Admin from '../admin/Admin';
import Gallery from '../overview/gallery/Gallery';

import './MainPage.css';

function MainPage() {

    return (
        <div className='main-page'>
            <Header />
            <div className='content'>
                <Routes>
                    <Route path="/" element={<Overview />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/login/admin" element={<Admin />} />
                    <Route path="/gallery" element={<Gallery />} />
                </Routes>
            </div>
            <Footer />
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const functionFromConnect = connect(mapStateToProps, null);

export default functionFromConnect(MainPage);