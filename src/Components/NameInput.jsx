import React, {Component} from 'react';

class NameInput extends Component {

  constructor(props) {
    super(props);
    this.state = {newName: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({newName: event.target.value});
  }

  submitName = (event) => {
    if (!/^[a-zA-Z-'. ]+$/.test(this.state.newName)) {
      alert('Please enter a valid name');
      event.preventDefault();
      return
    }
    this.props.getName(this.state.newName);
    event.preventDefault();
    this.setState({newName: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitName}>
          <input id="input" type="text" placeholder="Add a new employee" onChange={this.handleChange} value={this.state.newName}/>
          <input id="submit" type="submit" value="Submit"/>
        </form>
        <br></br>
      </div>
    )
  }

}

export default NameInput;
