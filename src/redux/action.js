import { getData_req } from "../api/api";

import {
  GET_DATA_START,
  GET_DATA_SUCCESS,
  GET_DATA_FILED,
} from "./action.tipes";

export const getDataCreateor = (query) => async (dispatch) => {
  dispatch({
    type: GET_DATA_START,
  });
  try {
    const response = await getData_req(query);
    dispatch({
      type: GET_DATA_SUCCESS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_DATA_FILED,
      payload: { message: e ? e?.message : "Something went wrong" },
    });
  }
};
