import axios from "axios";
import jwt_decode from "jwt-decode";
import _ from "lodash-es";
import { showSnack } from "../redux/actions/alertActions";
import { refreshTokenSuccess } from "../redux/actions/authActions";
import { store } from "../redux/store";
import { BASE_URL, ENDPOINTS } from "./constants";

const options = {
  variant: "error",
};

const extractErrorMessage = (data) => {
  if (_.isString(data)) {
    return data;
  }

  if (!data.error) {
    return "Something went wrong";
  }

  if (!_.isString(data.error)) {
    console.log(data.error);
  }

  return data.error;
};

export const errorHandler = ({ status, data }) => {
  switch (status) {
    case 401:
      store.dispatch(
        showSnack({ message: extractErrorMessage(data), options })
      );
      // store.dispatch(logout());
      break;
    case 400:
      store.dispatch(
        showSnack({ message: extractErrorMessage(data), options })
      );
      break;
    case 403:
      store.dispatch(
        showSnack({ message: extractErrorMessage(data), options })
      );
      break;
    case 422:
      store.dispatch(
        showSnack({ message: extractErrorMessage(data), options })
      );
      break;
    case 404:
      store.dispatch(showSnack({ message: "Resource not found", options }));
      break;
    default:
      store.dispatch(showSnack({ message: "Something went wrong", options }));
      break;
  }
};

export const getToken = async () => {
  const state = store.getState();
  const {
    auth: { token },
  } = state;

  if (!token || !token.access.token || !token.refresh.token) {
    return null;
  }

  const decodedToken = jwt_decode(token.access.token);
  const date = new Date(0);
  date.setUTCSeconds(decodedToken.exp);
  if (date.valueOf() < new Date().valueOf()) {
    try {
      const result = await axios.post(
        `${BASE_URL}/${ENDPOINTS.REFRESH_TOKEN}`,
        { refreshToken: token.refresh.token }
      );
      store.dispatch(refreshTokenSuccess({ token: result.data.data }));
      return result.data.data.accessToken;
    } catch (err) {
      errorHandler(err.response);
    }
  }
  return token.access.token;
};

export const uniqueValues = (arr, keyProps) => {
  const kvArray = arr.map((entry) => {
    const key = keyProps.map((k) => entry.headers[k]).join("|");
    return [key, entry];
  });
  const map = new Map(kvArray);
  return Array.from(map.values());
};
