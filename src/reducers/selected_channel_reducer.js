import { initialState } from "../index";

const selectedChannelReducer = (state = initialState.selectedChannel, action) => {
  switch (action.type) {
    case 'SELECT_CHANNEL':
      return action.payload;
    default:
      return state;
  }
};

export default selectedChannelReducer;
