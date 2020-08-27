import React from 'react';
import ErrorMessForm from '../errors/ErrorMessForm';

const InputString = ({ field, form, placeholder }) => {
    const { name, value, onChange } = field;
    const { errors, touched } = form;
    return(
        <>
            <input
                type="text"
                className="form-control"
                placeholder={ placeholder }
                name={ name }
                defaultValue={value}
                id={`form-checkout-${name}`}
                onChange={onChange}
            />
            <ErrorMessForm error={errors[name]} touched={touched[name]} right />
        </>
    )
}

export default InputString;