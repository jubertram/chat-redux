import { initialState } from "../index";

const messagesListReducer = (state = initialState.messages, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default messagesListReducer;
