import { CSSTransition } from 'react-transition-group'

import './ContactMe.scss'

const ContactMe = ({isVisible,hideContactForm}) => {
    return(
        <CSSTransition
            in={isVisible}
            timeout={200}   
            classNames={'active'}
            unmountOnExit
        >
            <div className='contactme-container'>
                <div className='contactme'>
                <button className='close' onClick={hideContactForm}>cancel</button>
                <p className='title'>Send message to me, and I answer You as fast as I can.</p>
                    <form>
                        <input type='text' placeholder='Your e-mail'/>
                        <textarea placeholder='Message'/>
                        <div>
                            <button className='submit'>confirm</button>
                        </div>
                    </form>
                </div>
            </div>
        </CSSTransition>
    )
}

export default ContactMe