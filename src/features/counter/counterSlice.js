import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  cart: [],

};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
  

    

    addTocart: (state, action) => {
      console.log(current(state));
      const existingProduct = state.cart?.find(
        (value, index) => value.id === action.payload.product.id
      );
      if (existingProduct) {
        const updatedProduct = { ...existingProduct, quantity: +1 };
        state.cart = [...state.cart, updatedProduct];
        
      } else {
        const updatedProduct = { ...action.payload.product, quantity: 1 };
        // aese wrong syntax hai key ban rha hai aese add krne se object ki soorat me
        // state.cart = [...state.cart, {updatedProduct}];
        state.cart = [...state.cart, updatedProduct];
      }
    },
    addProduct: (state, action) => {
      const existingProduct = state.cart.find(
        (v, idx) => action.payload.id === v.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },

    subtractProduct: (state, action) => {
      const existingProduct = state.cart?.find(
        (v) => action.payload.id === v.id
      );
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
        } else {
          
          state.cart = state.cart.filter((v) => v.id !== action.payload.id);
        }
      }
    },

    checkout: (state, action) => {
      console.log("checkout detaisl" , state)
      state.cart = []
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  incrementByAmount,
  addTocart,
  addProduct,
  subtractProduct,
  setOptionSelected,
  checkout
} = counterSlice.actions;

export default counterSlice.reducer;
