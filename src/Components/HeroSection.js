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
        </div>
    )
}

export default HeroSection
