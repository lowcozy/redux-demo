import { INSC_COUNTER, DESC_COUNTER } from "../actions/types";

const initState = {
  count: 0
};

export default (state = initState, action) => {
  switch (action.type) {
    case INSC_COUNTER:
      return { ...state, count: state.count + 1 };
    case DESC_COUNTER:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
