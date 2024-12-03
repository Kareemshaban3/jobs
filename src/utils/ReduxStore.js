/** @format */

import { createStore } from "redux";

const initialState = {
  favorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case "REMOVE_TO_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.id.filter(
          (fev) => fev.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
