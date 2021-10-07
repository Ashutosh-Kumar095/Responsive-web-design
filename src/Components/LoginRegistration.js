import React from 'react'
import Button from './Button';
import './LoginRegistration.css'

export default function LoginRegistration() {
    const submitForm = (e) => {
        e.preventDefault();
    }
    return (
        <div className='login-container'>
            <div className='registration-div'>
                <img  className="login-label" src="./images/login-label.jpg"/>
                <form onSubmit={submitForm}>
                    <label className="labels">
                        Name :
                        <br/>
                        <input className="form-fields" type="text" placeholder="Enter your name."/>
                    </label>
                    <label className="labels">
                        Email :
                        <br/>
                        <input className="form-fields" type="email" placeholder="Enter your EMail."/>
                    </label>
                    <label className="labels">
                        Password :
                        <br/>
                        <input className="form-fields" type="password" placeholder="Enter your password."/>
                    </label>
                    <br/>
                    <br/>
                    <br/>
                    <Button buttonStyle='btn-styles'>SUBMIT</Button>
            </form>
            </div>
        </div>
    )
}
