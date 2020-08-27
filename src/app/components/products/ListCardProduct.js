import React from 'react';
import CardProduct from './CardProduct';

const ListCardProduct = ({ list }) => {
    
    return (
        <div className="col-sm">
            <div className={`row d-flex ${list ? '' : 'justify-content-center'}`}>
                { 
                    list ?
                        list.map((product, index) => <CardProduct 
                                                        key={index} 
                                                        product={product} 
                                                     /> )
                    :
                        <i className="text-danger">Page non trouvée</i>
                }
            </div>
        </div>
    );
};

  export default ListCardProduct;