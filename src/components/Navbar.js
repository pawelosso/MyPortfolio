import React, { useRef, useState } from 'react';

import { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import '../Navbar.scss';

const Navbar = ({showQualities, showContactForm, showMyProjects}) => { 
    
    const [visibleMenuPhone, setVisibleMenuPhone] = useState(false)
    const handleChangeVisibleMenuPhone = () => setVisibleMenuPhone(!visibleMenuPhone)
    const ref = useRef()

    return(
        <React.Fragment>
            <nav>
                <ul className='computer-menu'>
                    <li onClick={showQualities}>My qualities</li>
                    <li onClick={showMyProjects}>My projects</li>
                    <li onClick={showContactForm}>Contact me</li>
                </ul>
                <div onClick={handleChangeVisibleMenuPhone}>
                    <span></span>
                </div>
            </nav>
            <CSSTransition
                unmountOnExit
                in={visibleMenuPhone}
                classNames={'active'}
                nodeRef={ref} 
                timeout={500}
                onEnter={()=> document.querySelector('nav').classList.add('active')}
                onExit={()=> document.querySelector('nav').classList.remove('active')}
            >
                <ul ref={ref} className='phone-menu'>
                    <li onClick={()=> {
                        showQualities()
                        handleChangeVisibleMenuPhone()
                    }}>
                        My qualities
                    </li>
                    <li onClick={()=> {
                        showMyProjects()
                        handleChangeVisibleMenuPhone()
                    }}>
                        My projects
                    </li>
                    <li onClick={()=> {
                        showContactForm()
                        handleChangeVisibleMenuPhone()
                    }}>
                        Contact me
                    </li>
                </ul>
            </CSSTransition>
        </React.Fragment>
    )
}

export default Navbar