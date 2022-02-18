import React from "react";
import { init } from '@emailjs/browser';
import './Contact.css';

init("user_f14hv3v1s7l08KAEBo9J2");

export default class Contact extends React.Component {

    state = {
        message: '',
        name: '',
        emailTo: 'little.emiliya@gmail.com',
        emailFrom: '',
        btnText: 'SEND',
        disabled: false
    };

    handleChange = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const templateId = 'template_s71y962';
        console.log(this.state)

        this.sendMessage(templateId, { message: this.state.message, from_name: this.state.name, reply_to: this.state.emailTo, email_from: this.state.emailFrom })
    }

    sendMessage = (templateId, variables) => {
        window.emailjs.send(
            'service_vu57n9r', templateId,
            variables, "user_f14hv3v1s7l08KAEBo9J2"
        ).then(res => {
            console.log('Email successfully sent!')
            this.setState({...this.state, btnText: 'THANKS FOR MESSAGE!', disabled: true});
        })
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

    render() {

        console.log(this.state.disabled)

        return (
            <div className="contact-inner">
                <div className="contact-text-block">
                    <h2>CONTACT</h2>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                    <input className="input"
                        type='email'
                        name="emailFrom"
                        onChange={this.handleChange}
                        required />
                    <label>Message*</label>
                    <textarea className="input"
                        rows='5'
                        name="message"
                        value={this.state.message}
                        onChange={this.handleChange}
                        required
                    ></textarea>
                    <button className="submit-btn" type="submit" disabled={this.state.disabled}>{this.state.btnText}</button>
                </form>
            </div>
        )
    }
}