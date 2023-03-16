// import { fetchMessagesType, createMessageType } from "../actions/index";
import { initialState } from "../index";

const messagesListReducer = (state, action) => {
  if (state === undefined) {
    return initialState.messages;
  }
  const newState = state.slice(0);
  switch (action.type) {
    case 'SET_MESSAGES':
      return action.payload.messages;
    case 'CREATE_MESSAGE':
      newState.push(action.payload);
      return newState;
    default:
      return state;
  }
};

export default messagesListReducer;
