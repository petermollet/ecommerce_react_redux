import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../lib/actions';
import { updateCart } from './../../../lib/actions';

const RowTableCart = ({ item }) => {

    const { quantity, details } = item;
    const dispatch = useDispatch();

    const remove = () => {
        if(window.confirm('Supprimer cet article du panier ?')) dispatch(removeFromCart(item.id));
    }

    return (
        <tr className="text-center">
            <td>
                <img
                    width="70"
                    height="70"
                    src={ process.env.PUBLIC_URL + `/assets/${ details.category }/${ details.image }` }
                    alt="citrons"
                />
            </td>
            <td>{ details.ref }</td>
            <td>€{ details.price }/{ details.unit }</td>
            <td>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => {
                            if(quantity > 1)
                                dispatch(updateCart(item.id, quantity - 1));
                        }}
                    >
                        -
                    </button>
                    <span className="btn btn-light">{ quantity }</span>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={ () => dispatch(updateCart(item.id, quantity + 1)) }
                    >
                        +
                    </button>
                </div>
            </td>
            <td>€{ (details.price * quantity).toFixed(2) }</td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger remove"
                    onClick={ () => remove() }
                >
                    X
                </button>
            </td>
        </tr>
    );
};

export default RowTableCart;