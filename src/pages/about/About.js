import React from "react";
import './About.css'

export function About() {
    return (
        <div className="about-inner">
            <h2 className="title">ABOUT ME</h2>
            <div className="about-pic-text">
                <img src={require('./about-pic.png')} alt="Lera's selfie" />
                <div className="about-me">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum."
                </div>
            </div>
        </div>
    )
}