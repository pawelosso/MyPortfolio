import React from 'react';

export const Input = ({value, handleChangeForm, form}) => {
    return(
        <React.Fragment>
            <input 
                type='radio' 
                value={value} 
                name='panel' 
                className={value} 
                checked={form === value} 
                onChange={handleChangeForm}
            />
        </React.Fragment>
    )
}