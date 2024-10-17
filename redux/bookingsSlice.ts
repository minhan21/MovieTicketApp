import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Film = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};

const bookingsSlice = createSlice({
  name: "bookings",
  initialState: [] as Film[],
  reducers: {
    bookFilm: (state, action: PayloadAction<Film>) => {
      if (!state.some((film) => film.id === action.payload.id)) {
        state.push(action.payload);
      }
    },
  },
});

export const { bookFilm } = bookingsSlice.actions;
export default bookingsSlice.reducer;
