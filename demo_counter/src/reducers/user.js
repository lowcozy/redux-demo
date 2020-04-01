import { GET_USERS } from "../actions/types";

const initState = {
  users: [{ first: "Minh" }, { first: "Thang" }]
};

export default (state = initState, action) => {
  switch (action.type) {
    case GET_USERS:
      return state;

    default:
      return state;
  }
};
