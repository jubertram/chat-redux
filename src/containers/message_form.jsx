import React, { PureComponent } from 'react';

class MessageForm extends PureComponent {

  constructor(props) {
    super(props);
    this.state = { message: '' };
  }

  handleChange = (e) => {
    this.setState({ message: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ message: '' });
  }
  render() {
    return (
      <form className="message-form" onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} />
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default MessageForm;
