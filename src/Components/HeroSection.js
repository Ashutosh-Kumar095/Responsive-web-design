import React from 'react'
import Button from './Button'
import './HeroSection.css';

function HeroSection(props) {
    const routes = () => {
        props.history.push('/login')
    }
    return (
        <div className='hero-container'>
            <div><video className="video-properties" src='./videos/intro.mp4' autoPlay loop muted/></div>
            <div className='container-component'>
                <h1>ADVENTURE AWAITS</h1>
                <h3>What are you waiting for?</h3>
                <div className="buttons">
                <div className='btns'>
                <Button
                className='btns'
                buttonStyle='btn-primary'
                buttonSize='btn-large'
                onClick={routes}
                >
                    GET STARTED <i className='far fa-play-circle' />
                </Button>
                </div>
                </div>
            </div>
            <div className="content-box">
                <h2 className="text-adjustment">Check out these EPIC collections!</h2>
                <div className='image-container'>
                    <div className='image-fixer'>
                        <img className='image' src='./images/marvel-team-up.png'/>
                        <h3 className="text-adjustment">Marvel Collections</h3> 
                    </div>
                    <div className='image-fixer'>
                        <img className='image' src='./images/dc-team-up.jpg'/>
                        <h3 className="text-adjustment">DC Collections</h3> 
                    </div>
                </div>
                <div className='image-container'>
                <div className='image-fixer'>
                        <img className='image' src='./images/raj-comics-team-up.jpg'/>
                        <h3 className="text-adjustment">Raj Comics Collections</h3> 
                    </div>
                    <div className='image-fixer'>
                        <img className='image' src='./images/manga.jpg'/>
                        <h3 className="text-adjustment">Manga Collections</h3> 
                    </div>
                </div>
            </div>
            </div>
    )
}

export default HeroSection
