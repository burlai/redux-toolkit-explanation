import { configureStore } from "@reduxjs/toolkit";

import {
  itemsReducer,
  setSearchString,
  addItem,
  removeItem,
} from "./slices/itemsSlice";
import {
  itemFormReducer,
  setItemAmount,
  setItemName,
  setItemPrice,
} from "./slices/itemFormSlice";

export type StoreType = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    itemForm: itemFormReducer,
    items: itemsReducer,
  },
});

export {
  store,
  setSearchString,
  addItem,
  removeItem,
  setItemName,
  setItemPrice,
  setItemAmount,
};
