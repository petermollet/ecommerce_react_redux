import React from 'react';
import '../styles/App.css';
import FormCheckout from '../components/checkout/FormCheckout';
import { useDispatch } from 'react-redux';
import { clearCart } from './../lib/actions';

const CheckoutPage = ({ history }) => {

    const dispatch = useDispatch();

    const submit = (values) => {
        console.log(values);
        window.alert('Merci de votre achat');
        dispatch(clearCart());
        history.push('/');
    }

    return (
        <>
            <div className="col-sm-6 offset-3 card p-3">
                <div className="mb-3">
                    <h2>Passage en caisse</h2>
                    <hr />
                </div>
                <FormCheckout
                    submit={ submit }
                />
            </div>
        </>
    );
}

export default CheckoutPage;