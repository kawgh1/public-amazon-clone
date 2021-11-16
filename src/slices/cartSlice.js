import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // Actions
        // the payload is the product that user clicked 'add to cart' on
        addToCart: (state, action) => {
            state.items = [...state.items, action.payload];
        },
        removeFromCart: (state, action) => {
            const index = state.items.findIndex(
                (basketItem) => basketItem.id === action.payload.id
            );
            let newCart = [...state.items];

            if (index >= 0) {
                newCart.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product (id: ${action.payload.id}) as its not in basket!`
                );
            }

            state.items = newCart;
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.cart.items;
export const selectTotal = (state) =>
    state.cart.items.reduce((total, item) => total + item.price, 0);

export default cartSlice.reducer;
