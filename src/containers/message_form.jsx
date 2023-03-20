import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions/index';


class MessageForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { message: '...' };
  }

  handleChange = (e) => {
    this.setState({ message: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createMessage(this.props.selectedChannel, this.props.currentUser, this.state.message);
    this.setState({ message: '...' });
  }
  render() {
    return (
      <form className="message-form" onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} />
        <button type="submit">SEND</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
