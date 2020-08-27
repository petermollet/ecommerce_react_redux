import React from 'react';
import '../styles/App.css';
import FormCheckout from '../components/checkout/FormCheckout';

const CheckoutPage = ({ history }) => {
    return (
        <>
            <div className="col-sm-6 offset-3">
                <h2>Passage en caisse</h2>
                <br />
                <FormCheckout
                    history={ history }
                />
            </div>
        </>
    );
}

export default CheckoutPage;