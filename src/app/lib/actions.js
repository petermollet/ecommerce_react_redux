export const actions = {
    ADD_TO_CART : 'ADD_TO_CART',
    UPDATE_CART : 'UPDATE_CART',
    REMOVE_FROM_CART : 'REMOVE_FROM_CART',
    SAVE_CART: 'SAVE_CART'
}

export function addToCart(details, quantity) {
    return {
        type: actions.ADD_TO_CART,
        payload: { id: details.ref, quantity, details }
    }
}

export function updateCart(id, quantity) {
    return {
        type: actions.UPDATE_CART,
        payload: { id, quantity }
    }
}

export function removeFromCart(id) {
    return {
        type: actions.REMOVE_FROM_CART,
        payload: id
    }
}

export function saveCart(items) {
    return {
        type: actions.SAVE_CART,
        payload: items
    }
}