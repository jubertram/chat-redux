import React, { PureComponent } from 'react';
import MessagesList from './messages_list';

class SelectedChannel extends PureComponent {
  render() {
    return (
      <div className="selected-channel">
        <h1>Channel</h1>
        <MessagesList />
      </div>
    );
  }
}

export default SelectedChannel;
