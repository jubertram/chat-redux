import React, { PureComponent } from 'react';
import Message from '../components/message';
import { connect } from 'react-redux';

class MessagesList extends PureComponent {
  render() {
    const { messagesList } = this.props;
    return (
      <div className="messages-list">
        {messagesList.map(message => <Message message={message} key={message.created_at} />) }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messagesList: state.messagesList
  };
}

export default connect(mapStateToProps, null)(MessagesList);
