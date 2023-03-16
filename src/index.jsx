// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// reducers import
import channelsListReducer from './reducers/channels_list_reducer';
import messagesListReducer from './reducers/messages_list_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';
import currentUserReducer from './reducers/current_user_reducer';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
export const initialState = {
  channels: ['general', 'react', 'montreal'],
  messages: [
    {
      author: "anonymous92",
      content: "Hello world!",
      created_at: "2017-09-26T23:03:16.365Z"
    },
    {
      author: "anonymous77",
      content: "My name is anonymous77",
      created_at: "2017-09-26T23:03:21.194Z"
    }

  ],
  selectedChannel: 'general',
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`
};

const reducers = combineReducers({
  channelsList: channelsListReducer,
  messagesList: messagesListReducer,
  selectedChannel: selectedChannelReducer,
  currentUser: currentUserReducer
});

const middlewares = applyMiddleware(reduxPromise);
// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
