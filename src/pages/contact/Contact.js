import React from "react";
import './Contact.css';

export function Contact() {



    return (
        <div className="contact-inner">
            <div className="contact-text-block">
                <h2>CONTACT</h2>
                <div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum."
                </div>
            </div>
            <form className="contact-form">
                <label>Name*</label>
                <input className="input" type='text' required />
                <label>E-mail*</label>
                <input className="input" type='email' required />
                <label>Message*</label>
                <textarea className="input" rows='5'></textarea>
                <button className="submit-btn" type="submit">SEND</button>
            </form>
        </div>
    )
}