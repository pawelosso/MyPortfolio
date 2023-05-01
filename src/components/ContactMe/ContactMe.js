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
                <button onClick={hideContactForm}>cancel</button>
                    <form>
                        <p className='title'>Send message to me, and I answer You as fast as I can.</p>
                        <input type='text' placeholder='Your e-mail'/>
                        <textarea placeholder='Message'/>
                        <div>
                            <input type='submit' value='confirm'/>
                        </div>
                    </form>
                </div>
            </div>
        </CSSTransition>
    )
}

export default ContactMe