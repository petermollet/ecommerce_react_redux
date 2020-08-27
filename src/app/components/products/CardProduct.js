import React from 'react';
import ModalProduct from './ModalProduct';

const CardProduct = ({ product }) => {
    return (
        <div className="col-sm-4">
            <div className="card">
                <img
                    width="170"
                    height="170"
                    src={ process.env.PUBLIC_URL + `/assets/${ product.category }/${ product.image }` }
                    alt={ product.name }
                />
                <div className="card-body">
                    <div className="d-flex justify-content-around">
                        <h4>{ product.name }</h4>
                        <p style={{ marginTop:'5px' }}>€{ product.price }/{ product.unit }</p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button 
                            className="btn btn-warning btn-sm"
                            data-toggle="modal"
                            data-target={ `#${ product.ref }` }
                        >
                            voir produit
                        </button>
                    </div>
                </div>
            </div>
            <ModalProduct 
                product={ product } 
            />
        </div>
    );
};

  export default CardProduct;