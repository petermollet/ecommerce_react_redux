import React from 'react';
import ErrorMessForm from '../errors/ErrorMessForm';

const InputString = ({ field, form, placeholder, setContext }) => {
    const { name, value, onChange, onBlur } = field;
    const { errors, touched } = form;
    return(
        <>
            <input
                type="text"
                className={`form-control ${ errors[name] && touched[name] && 'invalid' }`}
                placeholder={ placeholder }
                name={ name }
                defaultValue={ value }
                id={`form-checkout-${name}`}
                onChange={ e => {
                    onChange(e);
                    if(setContext) setContext({ [e.target.name]: e.target.value });
                }}
                onBlur={ onBlur }
            />
            <br />
            <ErrorMessForm 
                error={ errors[name] } 
                touched={ touched[name] } 
                right 
            />
        </>
    )
}

export default InputString;