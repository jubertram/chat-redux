import React, { PureComponent } from 'react';
import MessagesList from './messages_list';
import MessageForm from './message_form';

class SelectedChannel extends PureComponent {
  render() {
    return (
      <div className="selected-channel">
        <h1>Channel</h1>
        <MessagesList />
        <MessageForm />
      </div>
    );
  }
}

export default SelectedChannel;
