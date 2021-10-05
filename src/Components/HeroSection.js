import React from 'react'
import Button from './Button'
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <div><video className="video-properties" src='./videos/video-2.mp4' autoPlay loop muted/></div>
            <div className='container-component'>
                <h1>ADVENTURE AWAITS</h1>
                <h3>What are you waiting for?</h3>
                <div className="buttons">
                <div className='btns'>
                <Button
                    buttonStyle='btn-outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                </div>
                <div className='btns'>
                <Button
                className='btns'
                buttonStyle='btn-primary'
                buttonSize='btn-large'
                onClick={console.log('hey')}
                >
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
                </div>
                </div>
            </div>
            <div className="content-box">
                <h2 className="text-adjustment">Check out these EPIC Destinations!</h2>
                <div className='image-container'>
                    <div className='image-fixer'>
                        <img className='image' src='./images/img-9.jpg'/>
                        <h3 className="text-adjustment">Explore the hidden waterfall deep inside the Amazon jungle.</h3> 
                    </div>
                    <div className='image-fixer'>
                        <img className='image' src='./images/img-8.jpg'/>
                        <h3 className="text-adjustment">Ride through the Sahara desert in a guided Camel tour.</h3> 
                    </div>
                </div>
                <div className='image-container'>
                <div className='image-fixer'>
                        <img className='image' src='./images/img-1.jpg'/>
                        <h3 className="text-adjustment">Experience the wanderlust with us .</h3> 
                    </div>
                    <div className='image-fixer'>
                        <img className='image' src='./images/img-2.jpg'/>
                        <h3 className="text-adjustment">Travel through the islands of bali in a private cruise.</h3> 
                    </div>
                </div>
            </div>
            </div>
    )
}

export default HeroSection
