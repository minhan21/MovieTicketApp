import React from "react";
import { create, act, ReactTestRenderer } from "react-test-renderer";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import filmsReducer from "../redux/filmsSlice";
import favoritesReducer from "../redux/favoritesSlice";
import bookingsReducer from "../redux/bookingsSlice";

export const renderWithRedux = (
  component: React.ReactElement,
  {
    initialState = {},
    store = configureStore({
      reducer: {
        films: filmsReducer,
        favorites: favoritesReducer,
        bookings: bookingsReducer,
      },
      preloadedState: initialState,
    }),
  } = {}
): ReactTestRenderer => {
  return create(<Provider store={store}>{component}</Provider>);
};

export const waitForComponentToPaint = async (wrapper: ReactTestRenderer) => {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    wrapper.update();
  });
};
