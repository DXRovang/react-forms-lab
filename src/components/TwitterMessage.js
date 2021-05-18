import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "",
      messageCount: 280
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value,
      messageCount: 280 - event.target.value.length
      
    })
    // debugger
    }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.handleChange(event)} type="text" name="message" id="message" value={this.state.message}/>
        <p>{this.state.messageCount}</p>
      </div>
    );
  }
}

export default TwitterMessage;
