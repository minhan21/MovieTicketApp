import { configureStore } from "@reduxjs/toolkit";
import filmsReducer from "./filmsSlice";
import favoritesReducer from "./favoritesSlice";
import bookingsReducer from "./bookingsSlice";

const store = configureStore({
  reducer: {
    films: filmsReducer,
    favorites: favoritesReducer,
    bookings: bookingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
