import { gamesData } from "../data";

import {
  ADD,
  DELETE,
  EDIT,
  FILTER_BY_NAME,
  FILTER_BY_RATING,
  LOGIN,
} from "./actionTypes"

const init = {
  games: gamesData,
  searchValue: "",
  searchRating: 1,
  isAdmin: false,
};

const gameReducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD:
      return {
        ...state,
        games: [...state.games, payload],
      };
    case EDIT:
      return {
        ...state,
        games: state.games.map((game) =>
          game.id === payload.id ? { ...game, ...payload } : game
        ),
      }
    case DELETE:
      return {
        ...state,
        games: state.games.filter((game) => game.id !== payload),
      }
    case FILTER_BY_NAME:
      return {
        ...state,
        searchValue: payload,
      }
    case FILTER_BY_RATING:
      return {
        ...state,
        searchRating: payload,
      }
    case LOGIN:
      return {
        ...state,
        isAdmin: !state.isAdmin,
      }
    default:
      return state;
  }
}

export default gameReducer
