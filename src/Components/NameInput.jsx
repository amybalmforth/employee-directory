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

  render() {
    return (
      <div>
        <form>
          <input type="text"
                  placeholder="Enter a name"
                  onChange={this.handleChange} value={this.state.newName}/>
        </form>
      </div>
    )
  }


}

export default NameInput;
