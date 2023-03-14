import React from 'react';
import SelectedChannel from '../containers/selected_channel';
import ChannelsList from '../containers/channels_list';

const App = () => {
  return (
    <div className="app">
      <ChannelsList />
      <SelectedChannel />
    </div>
  );
};

export default App;
