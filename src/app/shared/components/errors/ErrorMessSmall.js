import React from 'react';

/**
 * Component permettant d'afficher un message d'erreur en Small / Red (utilisé notamment pour les formulaires)
 * 
 * @param message: le message à afficher
 * @param {boolean} right: si true, le composant sera en float-right
 * @param {boolean} left: si true, le composant sera en float-left
 * @author Peter Mollet
 * 
 */
const ErrorMessSmall = ({ message, right, left }) => (
    <small 
        style={{ marginTop:'-20px' }}
        className={
            `text-danger 
            ${right ? 'float-right': '' } 
            ${left ? 'float-left' : ''}`
        }
    >
        {message}
    </small>
);

export default ErrorMessSmall;