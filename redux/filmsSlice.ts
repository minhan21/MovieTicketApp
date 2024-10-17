import { createSlice } from "@reduxjs/toolkit";
import { generateRandomFilms } from "../utils/generateRandomFilms";

const filmsSlice = createSlice({
  name: "films",
  initialState: generateRandomFilms(1000),
  reducers: {},
});

export default filmsSlice.reducer;
