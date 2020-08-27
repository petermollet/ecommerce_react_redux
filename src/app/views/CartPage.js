import React from 'react';
import OrderSummary from '../components/cart/OrderSummary';
import TableCart from '../components/cart/TableCart';

const CartPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm cart">
                    <TableCart />
                </div>
                <div className="col-sm-3 order-summary">
                    <OrderSummary />
                </div>
            </div>
        </div>
    )
};

export default CartPage;