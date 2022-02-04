import React, { Component } from 'react';
import './footer.css';

export function Footer() {
    return (
        <footer>
            <div className='footer-inner'>
                <div className='footer-menu'>
                    <a className='footer-menu-item' href='https://www.pinterest.ru/valeriaverteeva/_saved/'>PINTEREST</a>
                    <a className='footer-menu-item' href='https://www.instagram.com/verteeva/'>INSTAGRAM</a>
                    <a className='footer-menu-item' href='https://www.facebook.com/valeria.verteeva/'>FACEBOOK</a>
                </div>
                <div>
                    <p>© Verteeva 2022</p>
                </div>
            </div>
        </footer>
    )
}