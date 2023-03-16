import { fetchMessagesType, createMessageType } from "../actions/index";
import { initialState } from "../index";

const messagesListReducer = (state = initialState.messages, action) => {
  switch (action.type) {
    case fetchMessagesType:
      return action.payload;
    case createMessageType:
      return state.push(action.payload);
    default:
      return state;
  }
};

export default messagesListReducer;
