import React from "react";
import { init } from '@emailjs/browser';
import './Contact.css';

init("user_f14hv3v1s7l08KAEBo9J2");

export default class Contact extends React.Component {

    state = {
        message: '',
        name: '',
        emailTo: 'little.emiliya@gmail.com'
    };

    handleChange = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({ ...this.state, [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const templateId = 'template_id';

        this.sendMessage(templateId, { message_html: this.state.message, from_name: this.state.name, reply_to: this.state.emailTo })
    }

    sendMessage = (templateId, variables) => {
        window.emailjs.send(
            'gmail', templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
        .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

    render() {

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
                <form className="contact-form" onSubmit={this.handleSubmit}>
                    <label>Name*</label>
                    <input className="input"
                        type='text'
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                    />
                    <label>E-mail*</label>
                    <input className="input" type='email' required />
                    <label>Message*</label>
                    <textarea className="input"
                        rows='5'
                        name="message"
                        value={this.state.message}
                        onChange={this.handleChange}
                        required
                    ></textarea>
                    <button className="submit-btn" type="submit">SEND</button>
                </form>
            </div>
        )
    }
}