import '../Header.scss';

import htmlIcon from '../images/htmlIcon.png';
import cssIcon from '../images/cssIcon.png';
import javascriptIcon from '../images/javascriptIcon.png';
import reactIcon from '../images/reactIcon.png';
import reduxIcon from '../images/reduxIcon.png';
import gitIcon from '../images/gitIcon.png';
import portrait from '../images/portrait.jpg'
import linkedinIcon from '../images/linkedinIcon.png'
import githubIcon from '../images/githubIcon.png'
import { useEffect } from 'react';

const Header = () => {
    return(
        <header> 
            <div className='portrait-container'>
                <img src={portrait} alt='portrait'/>
            </div>
            <div className='info'>
                <div className='text'>
                    <h1>Hi! My name is Paweł</h1>
                    <p>Front-End Developer from Gdansk</p>
                </div>
                <div className='stack'>
                    <p>My stack</p>
                    <div className='elements'>
                        <img src={htmlIcon} alt='html'/>
                        <img src={cssIcon} alt='css'/>
                        <img src={javascriptIcon} alt='js'/>
                        <img src={reactIcon} alt='react'/>
                        <img src={reduxIcon} alt='redux'/>
                        <img src={gitIcon} alt='git'/>
                    </div>
                    <a className='elements margin' href='https://github.com/pawelosso'>
                        <img src={githubIcon} alt='github'/>
                    </a>
                </div>
            </div>
      </header>
    )
}

export default Header
