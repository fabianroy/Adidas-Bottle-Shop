const getStoredCard = () => {
    const StoredCardString = localStorage.getItem('cart');
    if (StoredCardString) {
        return JSON.parse(StoredCardString)
    }
    return [];
}

const saveCartToLS = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
}

const addToLS = id => {
    const cart = getStoredCard();
    cart.push(id);

    //save to local storage
    saveCartToLS(cart);
}

const removeFromLS = id => {
    const cart = getStoredCard();

    // Removing Every IDs
    const remaining = cart.filter(idx => idx !== id);
    saveCartToLS(remaining);
}

export { addToLS, getStoredCard, removeFromLS };