import React from 'react'
import { Link } from 'react-router-dom'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="container">
            <div className="hero-section">
                <div className="hero-text">
                    <h1>Hello, I'm <br /> <span> Abhisek</span> Pattanayak.</h1>
                    <h3>I'm a student of MCA and an aspiring web developer based in India.  I am passionate<br/> about creating immersive and beautiful web applications through meticulously<br/> crafted code and user-centric design. Eager to learn  and grow in the<br/> ever-evolving tech landscape, I continuously seek  out new challenges<br/> and opportunities to refine my skills.</h3>
                    <Link to="/contact"><button className='secondary-btn hero-btn'>Say Hello!</button></Link>

{/*                     <div className="hero-cards">
                        <div className="h-card">
                            <h1>15 Y.</h1>
                            <h3>Experience</h3>
                        </div>
                        <div className="h-card">
                            <h1>250+</h1>
                            <h3>Project Completed</h3>
                        </div>
                        <div className="h-card">
                            <h1>58</h1>
                            <h3>Happy Client</h3>
                        </div>
                    </div>*/}
                </div> 
                <div className="hero-img">
                    <img src="../img/mainlogo.png" alt="" />
                </div>
            </div>
        </div>

    </div>
  )
}
