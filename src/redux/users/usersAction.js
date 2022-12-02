import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  GET_USER_LOGIN,
  ADD_TOKEN,
} from "./userTypes";
import axios from "axios";

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const getLoginUser = () => {
  return {
    type: GET_USER_LOGIN,
  };
};

export const getTokenUser = () => {
  return {
    type: ADD_TOKEN,
  };
};

export const registrasi = (data) => {
  return (dispatch) => {
    const request = {
      nama: data.name,
      email: data.email,
      no_handphone: data.noHp,
      password: data.password,
      role: data.role,
    };
    console.log(request);
    const response = axios
      .post("https://febe4-mswellbeing-backend-production.up.railway.app/user/register", request)
      .then((response) => {
        console.log(response);
        const users = response.data;
        console.log("Success");
        // dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUsersFailure(errorMsg));
      });
  };
};

export const GetUsersLogin = (data) => {
  return (dispatch) => {
    axios
      .post("https://febe4-mswellbeing-backend-production.up.railway.app/user/login", data)
      .then((response) => {
        console.log(response);
        const users = response.data;
        console.log(users);
        console.log(users.message);
        dispatch(fetchUsersSuccess(users));
        // localStorage.setItem("token", JSON.stringify(users.accessToken));
        localStorage.setItem("user", JSON.stringify(users.user));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUsersFailure(errorMsg));
      });
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest);
    axios
      .get("https://6353512ae822bad5278ac951.mockapi.io/users")
      .then((response) => {
        const users = response.data;
        // console.log(users);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUsersFailure(errorMsg));
      });
  };
};
