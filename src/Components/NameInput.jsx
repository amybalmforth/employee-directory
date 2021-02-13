import React, {Component} from 'react';

class NameInput extends Component {

  constructor(props) {
    super(props);
    this.state = {name: '', email: ''};
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  submitName = (event) => {
    if (!/^[a-zA-Z-'. ]+$/.test(this.state.name)) {
      alert('Please enter a valid name');
      event.preventDefault();
      return
    }
    this.props.getName(this.state);
    event.preventDefault();
    this.setState({name: '', email: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitName}>
          <input id="input" type="text" placeholder="Add a new employee name" onChange={this.handleNameChange} value={this.state.name}/>
          <input id="input" type="text" placeholder="Add a new employee email" onChange={this.handleEmailChange} value={this.state.email}/>
          <input id="submit" type="submit" value="Submit"/>
        </form>
        <br></br>
      </div>
    )
  }

}

export default NameInput;
