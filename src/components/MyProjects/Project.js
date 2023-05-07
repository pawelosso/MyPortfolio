import githubIcon from './images/githubIcon.png'
import liveIcon from './images/onlive.png'

const Project = ({title, img}) => {
    
    return(
        <div className='project'>
            <div className='img-container'>
                <img src={img}/>
            </div>
            <p className='title'>{title}</p>
            <div className='link'>
                <img src={githubIcon}/>
                <p>go to code</p>
            </div>
            <div className='link'>
                <img src={liveIcon}/>
                <p>go live</p>
            </div>
        </div>
    )
}

export default Project