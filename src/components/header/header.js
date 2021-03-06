import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { ReactComponent as Insta } from './pics/insta.svg';
import { ReactComponent as Fb } from './pics/fb.svg';

export function Header() {

    

    return (
        <header>
            <div className='inner-header'>
                <div className='header-left header-side'></div>
                <div className='header-center'>
                    <div className='header-name'>
                        <Link to={'/'}>VALERIA VERTEEVA</Link>
                    </div>
                    <div className='header-center-menu'>
                        <div className='header-menu-item'><Link to={'/'}>OVERVIEW</Link></div>
                        {/* <div className='header-menu-item'><Link to={'/projects'}>PROJECTS</Link></div> */}
                        <div className='header-menu-item'><Link to={'/contact'}>CONTACT</Link></div>
                        <div className='header-menu-item'><Link to={'/about'}>ABOUT</Link></div>
                    </div>
                </div>
                <div className='header-right header-side'>
                    <a href='https://www.instagram.com/verteeva/' target='_blank'>
                        <div className='social'>
                            <Insta />
                        </div>
                    </a>
                    <a href='https://www.facebook.com/valeria.verteeva/' target='_blank'>
                        <div className='social'>
                            <Fb />
                        </div>
                    </a>
                </div>
            </div>
        </header>
    )
}