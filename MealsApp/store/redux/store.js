import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from './favorite'
export const reduxStore = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer // favoritesReducer is derived from  name: 'favorites', 
  }
});

