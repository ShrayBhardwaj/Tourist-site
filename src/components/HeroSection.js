import React from 'react'
import { Button } from './Button'
import '../App.css'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            {/* here we used the video as auto so it is in loop and give the path.*/}
            {/*<video src="/videos/"videos-2.mp4" autoplay loop muted />*/}
            <h1>adventure awaits</h1>
            <p>waiting is over</p>

            <div className="hero-btns">

                <Button className="btn" 
                buttonStyle='btn--outline'
                buttonSize='btn--large'>Get Start</Button>

                 <Button className="btn" 
                 buttonStyle='btn--primary'
                buttonSize='btn--large'>Trailer
                
                <i className='far fa-play-circle' />
                </Button>

            </div>
            
        </div>
    )
}

export default HeroSection
