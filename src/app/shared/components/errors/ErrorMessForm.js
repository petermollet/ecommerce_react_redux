import React from 'react';
import ErrorMessSmall from './ErrorMessSmall';

/**
 * Composant permettant de traiter les messages d'erreurs de Formik
 * Retourne soit le message, soit rien, selon s'il y a une erreur ou non
 * 
 * @param error: l'erreur a traité
 * @param {boolean}touched (boolean): permettant de savoir sir le champ a été 'touché' par l'utilisateur ou non, pour ne pas à avoir à afficher une erreur à l'affichage du formulaire 
 * @param rest: tous les autres props sont transmis à l'enfant ErrorMessSmall
 * @example <ErrorMessForm error={errors.matricule} touched={touched.matricule} right /> 
 * @author Peter Mollet
 * 
 */
const ErrorMessForm = ({ error, touched, ...rest }) => {
    if( error && touched ) 
        return <ErrorMessSmall {...rest} message={error} />
    else 
        return null;
};

export default ErrorMessForm;