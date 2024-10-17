import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Film = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [] as Film[],
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Film>) => {
      const index = state.findIndex((film) => film.id === action.payload.id);
      if (index !== -1) {
        // If the film is already in favorites, remove it
        state.splice(index, 1);
      } else {
        // If the film is not in favorites, add it
        state.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
