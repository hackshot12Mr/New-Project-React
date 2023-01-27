import {
  ADD,
  DELETE,
  EDIT,
  FILTER_BY_NAME,
  FILTER_BY_RATING,
  LOGIN,
} from "./actionTypes";

export const addCart=(show)=>{
  return{
      type:"ADDITEM",
      payload:show
  }
}

export const addGame = (newGame) => {
  return {
    type: ADD,
    payload: newGame,
  };
};

export const deleteGame = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};

export const editGame = (editedGame) => {
  return {
    type: EDIT,
    payload: editedGame,
  };
};

export const login = () => {
  return {
    type: LOGIN,
  };
};

export const filterName = (text) => {
  return {
    type: FILTER_BY_NAME,
    payload: text,
  };
};

export const filterRating = (rating) => {
  return {
    type: FILTER_BY_RATING,
    payload: rating,
  };
};
