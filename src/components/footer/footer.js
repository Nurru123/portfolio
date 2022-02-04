import React, { Component } from 'react';
import './Footer.css';

export function Footer() {
    return (
        <footer>
            <div className='footer-inner'>
                <div className='footer-menu'>
                    <a className='footer-menu-item' href='https://www.pinterest.ru/valeriaverteeva/_saved/' target='_blank'>PINTEREST</a>
                    <a className='footer-menu-item' href='https://www.instagram.com/verteeva/' target='_blank'>INSTAGRAM</a>
                    <a className='footer-menu-item' href='https://www.facebook.com/valeria.verteeva/' target='_blank'>FACEBOOK</a>
                </div>
                <div>
                    <p>© Verteeva 2022</p>
                </div>
            </div>
        </footer>
    )
}