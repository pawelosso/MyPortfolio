import { useEffect, useRef, useState } from "react"
import { elements } from "./qualitiesList"
import { CSSTransition } from "react-transition-group"

const MapElements = ({type}) => {    
    const [qualities, filterQualities] = useState(elements)
    const [visibleList, setVisibleList] = useState(true)
    const format = type.charAt(0).toUpperCase() + type.slice(1);
    
    useEffect(()=> {
        if(type !== 'all'){
            filterQualities(elements.filter(el=> el.type === type))
        } else filterQualities(elements)
        setVisibleList(false)
        setTimeout(()=>setVisibleList(true),100)
    },[type])

    return (
        <div className={`qualities-container ${visibleList && 'visible'}`}>  
            <p className='qualitiesTitle'>
                {format === 'All'? `${format} qualities`: format}
            </p>
            {qualities.map(el => <div key={el.name} className='qualitiesElement'>{el.name}</div>)}
        </div>   
    )
}

export default MapElements