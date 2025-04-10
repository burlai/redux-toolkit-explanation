import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

import { Items, Item } from "../../types";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    searchString: "",
    items: [] as Items,
  },
  reducers: {
    setSearchString: (state, action: PayloadAction<string>) => {
      state.searchString = action.payload;
    },
    addItem: (state, action: PayloadAction<Item>) => {
      state.items.push({
        name: action.payload.name,
        price: action.payload.price,
        amount: action.payload.amount,
        id: nanoid(), // generate a unique id for the item
      });
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        // we are filtering the items array to remove the item with the id that we want to remove
        // we are using the filter method to create a new array with all the items that do not match the id that we want to remove
        (item: Item) => item.id !== action.payload
      );
    },
  },
});

export const { setSearchString, addItem, removeItem } = itemsSlice.actions; // actions will be generated by redux toolkit based on the reducers
export const itemsReducer = itemsSlice.reducer; // reducer will be generated by redux toolkit based on the slice
