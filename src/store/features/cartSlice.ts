import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DigitalAsset {
  id: string;
  title: string;
  price: number;
  category: string;
  thumbnail: string;
}

interface CartState {
  items: DigitalAsset[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<DigitalAsset>) => {
      // Check if the digital asset is already in the cart
      const exists = state.items.some((item) => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
