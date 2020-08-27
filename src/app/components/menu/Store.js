import React from 'react';
import ListCardProduct from '../products/ListCardProduct';


const Store = ({ category, dataProducts }) => {
    
    return (
        <div className="col-sm">
            <div className="row">
                <ListCardProduct 
                    category={ category } 
                    list={ dataProducts }
                />
            </div>
        </div>
    );
};

export default Store;