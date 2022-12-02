import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_REQUEST,
  GET_USER_LOGIN,
  ADD_TOKEN,
} from "./userTypes";
const initialState = {
  loading: false,
  users: [],
  msg: null,
  token: "",
  error: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: action.payload.message,
        token: action.payload.accessToken,
        users: action.payload.user,
        error: "",
      };

    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };

    case ADD_TOKEN:
      return {
        ...state,
        token: localStorage.getItem("token"),
      };

    case GET_USER_LOGIN:
      return {
        ...state,
        users: JSON.parse(localStorage.getItem("user")),
      };
    default:
      return state;
  }
};

export default userReducer;
