import { initialState } from "../index";

const currentUserReducer = (state = initialState.currentUser, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default currentUserReducer;
