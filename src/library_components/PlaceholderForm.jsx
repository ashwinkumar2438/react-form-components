import { validate } from '../utils/validate';
import React from 'react';
import '../scss/PlaceholderForm.scss';

const PlaceholderForm = ( { formData } = {}) => {

    if( !validate( formData ) ){
        console.warn(' no form data passed to \'react-form-components\'. ');
        return ( <div className="no-form"></div> )
    }

    return ( 
        <div className="base-form-wrapper">
            <form action="">
            {
                formData.map( entry => {
                    return (
                        <input key = { entry.name }
                            type={ entry.type ?? 'text' } 
                            id={ entry.name } 
                            placeholder= { entry.label } 
                        />          
                    )
                })
            }
            </form>
        </div>
    )

    
}

export { PlaceholderForm }