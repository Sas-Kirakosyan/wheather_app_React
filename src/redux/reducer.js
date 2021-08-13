import {
  GET_DATA_START,
  GET_DATA_SUCCESS,
  GET_DATA_FILED,
} from "./action.tipes";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_START: {
      return {
        ...state,
        loading: true,
        error: null,
        data: null,
      };
    }
    case GET_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    }
    case GET_DATA_FILED: {
      return {
        ...state,
        loading: false,
        data: null,
        error: action?.payload
          ? action.payload.message
          : "someethink went wrong",
      };
    }
    default: {
      return state;
    }
  }
};
