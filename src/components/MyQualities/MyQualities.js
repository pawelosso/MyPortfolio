import {Input} from './MyQualitiesInput'
import MapElements from './MapElements';

import {useState} from 'react'
import { CSSTransition } from 'react-transition-group'

import './MyQualities.scss';

const MyQualities = ({isVisible, hideQualities}) => {
    
    const [form, setForm] = useState('all')
    const handleChangeForm = event => setForm(event.target.value)
    
    return (    
        <CSSTransition 
            in={isVisible} 
            unmountOnExit 
            timeout={200} 
            classNames={'active'}
        >
            <div className='Courses'>
                <div className='interface'>
                    <button onClick={hideQualities}>cancel</button>
                    <p className='title'>My qualities</p>
                    <div className='panel'>
                        <Input value='all' handleChangeForm={handleChangeForm} form={form}/>
                        <span/>
                        <Input value='courses' handleChangeForm={handleChangeForm} form={form}/>
                        <span/>
                        <Input value='certificates' handleChangeForm={handleChangeForm} form={form}/>
                        <span/>
                        <Input value='education' handleChangeForm={handleChangeForm} form={form}/>
                    </div>
                <MapElements type={form}/>
                </div>
            </div>
        </CSSTransition>
    )
}

export default MyQualities

