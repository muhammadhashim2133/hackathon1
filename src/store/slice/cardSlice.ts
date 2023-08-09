import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  items: Array<any>;
  totalQuantity: number;
  size: string;
}

const initialState: CounterState = {
  items: [],
  totalQuantity: 1,
  size: "L",
};

export const cardSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<any>) => {
      state.items.push(action.payload);
    },
    addSize: (state, action: PayloadAction<any>) => {
      state.size = action.payload.size;
    },
    addQuantity: (state, action: PayloadAction<any>) => {
      state.totalQuantity += action.payload.quantity;
    },
    removeQuantity: (state, action: PayloadAction<any>) => {
      state.totalQuantity -= action.payload.quantity;
    },

    remove: (state, action: PayloadAction<any>) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
/* export const cardActions = cardSlice.actions;

export default cardSlice.reducer; */

export const { add, remove, addQuantity, removeQuantity, addSize } = cardSlice.actions;
export default cardSlice.reducer;
