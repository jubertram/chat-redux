import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions/index';
import Message from '../components/message';

class MessagesList extends PureComponent {
  componentWillMount() {
    this.props.fetchMessages();
  }

  render() {
    const { messagesList } = this.props;
    return (
      <div className="messages-list">
        {messagesList.map(message => <Message message={message} key={message.created_at} />) }
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    messagesList: state.messagesList
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);
