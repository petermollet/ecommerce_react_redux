import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../lib/actions';

const ModalProduct = ({ product }) => {
    const [ quantity, setQuantity ] = useState(1);
    const dispatch = useDispatch();
    return (
        <div
            className="modal fade "
            id={product.ref}
            data-backdrop="static"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">{ product.name }</h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-sm-4">
                                <img
                                    width="170"
                                    height="170"
                                    src={ process.env.PUBLIC_URL + `/assets/${ product.category }/${ product.image }` }
                                    alt={ product.name }
                                />
                            </div>
                            <div className="col-sm">
                                <p className="lead">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore
                                </p>
                                <h3 className="price">€{ product.price }/{ product.unit }</h3> <br />
                                <div
                                    className="btn-group"
                                    role="group"
                                    aria-label="Basic example"
                                >
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={ () => setQuantity( quantity > 1 ? quantity - 1 : 1) }
                                    >
                                        -
                                    </button>
                                    <span className="btn btn-light qty">{ quantity }</span>
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={ () => setQuantity(quantity + 1) }
                                    >
                                        +
                                    </button>
                                </div>
                                <span className="ml-5"><b>Total :</b> { (product.price * quantity).toFixed(2) } €</span>
                                <br />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                            onClick={ () => setQuantity(1)}
                        >
                            Fermer
                        </button>
                        <button
                            type="button"
                            className="btn btn-success"
                            data-dismiss="modal"
                            onClick={ () => {
                                dispatch(addToCart(product, quantity));
                                setQuantity(1);
                            }}
                        >
                            Ajouter au panier
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalProduct;