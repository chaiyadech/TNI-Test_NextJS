import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      console.log(action);
      const itemExists = state.find((item) => item.id === action.payload.id);
      if (itemExists) {
        if (itemExists.amount < action.payload.amount) {
          itemExists.amount++;
        } else {
          alert("สินค้าไม่เพียงพอ");
        }
      } else {
        state.push({ ...action.payload, amount: 1 });
      }
    },
    increAmount: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item.amount < action.payload.amount) {
        item.amount++;
      } else {
        alert("สินค้าไม่เพียงพอ");
      }
    },
    decreAmount: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item.amount === 1) {
        const index = state.findIndex((item) => item.id === action.payload);
        state.splice(index, 1);
      } else {
        item.amount--;
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
    clearCart: (state) => (state = []),
    CheckOut: (state, action) => {
      console.log("CheckOut");
    },
  },
});

//export const cartReducer = cartSlice.reducer;
export default cartSlice.reducer;
export const {
  addToCart,
  increAmount,
  decreAmount,
  removeFromCart,
  clearCart,
  CheckOut,
} = cartSlice.actions;
