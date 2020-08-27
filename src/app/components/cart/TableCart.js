import React from 'react';
import RowTableCart from './table-cart-children/RowTableCart';
import { useSelector } from 'react-redux';

const TableCart = () => {
    const items = useSelector(state => state.items);
    if(!items.length) return <div className="text-center"><i className="text-danger">Le panier est vide</i></div>
    return (
        <table>
            <thead>
                <tr className="text-center">
                    <th width="200">Produit</th>
                    <th width="80">Référence</th>
                    <th width="150">Prix</th>
                    <th width="150">Quantité</th>
                    <th width="200">Total</th>
                </tr>
            </thead>
            <tbody>
                { items.map((item, i) => <RowTableCart key={i} item={ item } />) }
            </tbody>
        </table>
    );
};

export default TableCart;