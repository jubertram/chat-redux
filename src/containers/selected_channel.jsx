import React, { PureComponent } from 'react';
import MessagesList from './messages_list';
import MessageForm from './message_form';
import { connect } from 'react-redux';

class SelectedChannel extends PureComponent {
  render() {
    return (
      <div className="selected-channel">
        <h2>Channel #{this.props.selectedChannel}</h2>
        <MessagesList />
        <MessageForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, null)(SelectedChannel);
