import { validate } from '../utils/validate';
import React, { Fragment } from 'react';
import '../scss/BaseForm.scss';

const BaseForm = ( { formData } = {}) => {

    if( !validate( formData ) ){
        console.warn(' no form data passed to \'react-form-components\'. ');
        return ( <div className="no-form"></div> )
    }

    return ( 
        <div className="scoped-react-form-wrapper">
            <form action="">
            {
                formData.map( entry => {
                    return (
                        <Fragment key = { entry.name } >
                        <label htmlFor={ entry.name } > { entry.label } </label>
                        <input type={ entry.type ?? 'text' } id={ entry.name } />
                        </Fragment >
                    )
                })
            }
            </form>
        </div>
    )

    
}

export { BaseForm }