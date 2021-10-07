import React from 'react';
import Button from './Button';
import './FooterSection.css';


export default function FooterSection() {
    return (
        <div className="footer-parent">
            <h2 className="footer-font">Join the Adventure newsletter to get our best deals.</h2>
            <h3 className="footer-font">You can unsubscribe at any time.</h3>
            <div className="email-block">
                <input type="text" placeholder="Your Email" className="email-input"/>
                <Button buttonStyle='btn-styles'>Subscribe</Button>
            </div>
            <div className="social-networking-icons">
            <img className="brand-icons" src='./images/marvel.svg'/>
            <img className="brand-icons" src='./images/dc.svg'/>
            <img className="brand-icons" src='./images/raj-comics.png'/>
            </div>
        </div>
    )
}
