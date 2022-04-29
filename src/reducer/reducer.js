import { ADD_EMAIL, ADD_PASSWORD } from "./type";

export const initialState = {
  email: "",
  password: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_EMAIL:
      return (state = {
        ...state,
        email: action.payload,
      });
    case ADD_PASSWORD:
      return (state = {
        ...state,
        password: action.payload,
      });
  }
};
