import { createSlice } from "@reduxjs/toolkit";

const favroiteSlice = createSlice({
  name: 'favorites', // ----- This name is manditory for configureStore -----
  initialState: {
    Ids: []
  },
  reducers: {
    addFavorite: (state, action) => {
      state.Ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      state.Ids.splice(state.Ids.indexOf(action.payload.id), 1);
    }
  }
});

export const AddFavorite = favroiteSlice.actions.addFavorite;
export const RemoveFavorite = favroiteSlice.actions.removeFavorite;
export default favroiteSlice.reducer;
