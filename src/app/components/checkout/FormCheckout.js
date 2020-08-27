
import React from 'react';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import InputString from '../../shared/components/inputs/InputString';
import { MsgConst } from './../../shared/config/msgConst';

const initialValues = {
    firstName:'',
    lastName:'',
    email:'',
    address:'',
    zipCode:'',
    city:''
}

const validationSchema = yup.object().shape({
    firstName: yup.string().required(MsgConst.required).trim(),
    lastName: yup.string().required(MsgConst.required).trim(),
    email: yup.string().email(MsgConst.email).required(MsgConst.required).trim(),
    address: yup.string().required(MsgConst.required).trim(),
    zipCode: yup.string().required(MsgConst.required).trim(),
    city: yup.string().required(MsgConst.required).trim()
});

const FormCheckout = () => {
    return (  
        <Formik
            onSubmit={ (values) => console.log(values) }
            initialValues={ initialValues }
            validationSchema={ validationSchema }
        >
            {({ values, handleSubmit, isSubmitting }) => (
                <form onSubmit={ handleSubmit }>
                    <div className="row">
                        <div className="col">
                            <Field name='firstName' value={values.firstName} component={InputString} placeholder='Prénom' />
                        </div>
                        <div className="col">
                            <Field name='lastName' value={values.lastName} component={InputString} placeholder='Nom de famille'/>
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <Field name='email' value={values.email} component={InputString} placeholder='Adresse email'/>
                        <small id="emailHelp" className="form-text text-muted">
                            Nous ne partagerons jamais votre adresse email 
                        </small>
                    </div>
                    <div className="form-group">
                        <Field name='address' value={values.address} component={InputString} placeholder='Adresse'/>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col">
                            <Field name='zipCode' value={values.zipCode} component={InputString} placeholder='Code Postal'/>
                        </div>
                        <div className="col">
                            <Field name='city' value={values.city} component={InputString} placeholder='Ville'/>
                        </div>
                    </div>
                    <br />
                    <button
                        type='submit'
                        className='btn btn-light btn-lg btn-block bg-crimson text-white'
                        disabled={ isSubmitting }
                    >
                        Valider
                    </button>
                </form>
            )}
        </Formik>
    );
};

export default FormCheckout;