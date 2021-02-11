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
    this.props.getName(this.state.newName);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitName}>
          <input type="text" placeholder="Enter a name" onChange={this.handleChange} value={this.state.newName}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }


}

export default NameInput;
