import Project from "./Project"

import { CSSTransition } from "react-transition-group"

import CTI from './images/CTI.png'
import WeddingPlanner from './images/RazemLepiej.png'
import Spzszkolenia from './images/SpzSzkolenia.png'

import './MyProjects.scss'

const MyProjects = ({hideMyProjects, isVisible}) => {
    return(
        <CSSTransition
            in={isVisible}
            unmountOnExit
            timeout={200}
            classNames={'active'}
        >
            <div className='myprojects'>
                <div className='close' onClick={hideMyProjects}>
                    <span></span>
                </div>
                <p className='title'>My Projects</p>
                <div className='projects-container'>
                    <Project title='Wedding planer' img={WeddingPlanner}/>
                    <Project title='Football school' img={CTI}/>
                    <Project title='Emergency medical' img={Spzszkolenia}/>
                </div>
            </div>
        </CSSTransition>
    )

}

export default MyProjects