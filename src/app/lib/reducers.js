import { actions } from './actions';

const initialState = {
    items : []
}

function actionAddToCart(state, payload) {
    if(state.items.findIndex(i => i.id === payload.id) === -1)
        return Object.assign({}, state, { 
            items :  [...state.items, payload] 
        });
    else
        return Object.assign({}, state, { 
            items : state.items.map( item => item.id === payload.id ? Object.assign({}, item, { quantity: item.quantity + payload.quantity }) : item )
        });
}

function actionUpdateCart(state, payload) {
    return Object.assign({}, state, { 
        items : state.items.map( item => item.id === payload.id ? Object.assign({}, item, { quantity: payload.quantity }) : item )
    });
}

function actionRemoveFromCart(state, payload) {
    return Object.assign({}, state, { 
        items: state.items.filter(item => item.id !== payload) 
    });
}

export default function onlineStoreApp(state = initialState, action) {
    switch(action.type) {
        case actions.ADD_TO_CART : return actionAddToCart(state, action.payload);
        case actions.UPDATE_CART : return actionUpdateCart(state, action.payload);
        case actions.REMOVE_FROM_CART : return actionRemoveFromCart(state, action.payload);
        default: return state;
    }
}