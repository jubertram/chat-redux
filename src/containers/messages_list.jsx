import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions/index';
import Message from '../components/message';

class MessagesList extends PureComponent {
  componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 5000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  render() {
    const { messagesList } = this.props;
    return (
      <div className="messages-list" ref={(list) => { this.list = list; }}>
        { messagesList.map(message => <Message message={message} key={message.created_at}/>) }
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
    messagesList: state.messagesList,
    selectedChannel: state.selectedChannel,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);
