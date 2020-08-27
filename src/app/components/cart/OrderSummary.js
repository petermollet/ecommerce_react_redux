import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const OrderSummary = () => {

    const items = useSelector(state => state.items);
    const [subTotal, setSubTotal] = useState(0.00);
    const [total, setTotal] = useState(0.00);
    const shipping = 5.00;

    useEffect(() => {
        const newSubTotal = items.map(item => item.quantity * item.details.price).reduce((a, b) => a + b, 0);
        if(subTotal !== newSubTotal){
            setSubTotal(newSubTotal);
            setTotal(newSubTotal + shipping);
        }
    },[ items, subTotal ])

    return (
        <>
            <ul className="list-group">
                <li className="list-group-item">Résumé</li>
                <li className="list-group-item">
                    <ul className="list-group flex">
                        <li className="text-left">Sous-Total</li>
                        <li className="text-right">€ { subTotal.toFixed(2) }</li>
                    </ul>
                    <ul className="list-group flex">
                        <li className="text-left">Livraison</li>
                        <li className="text-right">€ { shipping.toFixed(2) }</li>
                    </ul>
                    <ul className="list-group flex">
                        <li className="coupon crimson">
                            <small> >> Ajout d'un coupon de réduction</small>
                        </li>
                    </ul>
                </li>
                <li className="list-group-item ">
                    <ul className="list-group flex">
                        <li className="text-left">Total</li>
                        <li className="text-right">€ { subTotal === 0.00 ? 0.00.toFixed(2) : total.toFixed(2) }</li>
                    </ul>
                </li>
            </ul>
            <Link
                to='/checkout'
                className={`btn btn-lg btn-block checkout bg-crimson text-white ${ !items.length && 'disabled' }`}
            >
                Valider
            </Link>
        </>
    );
};

export default OrderSummary;