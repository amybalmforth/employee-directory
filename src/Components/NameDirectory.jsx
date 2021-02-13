import React, {Component} from 'react';
import Title from './Title';
import NameInput from './NameInput';
import NameList from './NameList';

class NameDirectory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      names: [
        {
          name: 'Amy Balmforth',
          email: 'amy@balmforth.com'
        },
        {
          name: 'Gary Balmforth',
          email: 'gary@balmforth.com'
        }
      ]
    }
  }

  setName = (name) => {
    this.setState({ names: [...this.state.names, name] })
  }

  deleteName = (name) => {
    for (let i = 0; i < this.state.names.length; i++) {
      if (this.state.names[i] === name) {
        this.state.names.splice(i, 1);
        i--;
      }
    }
    this.setState({ names: this.state.names })
  }

  render() {
    return (
        <div>
          <Title/>
          <NameInput getName = {this.setName}/>
          <NameList nameList = {this.state.names.sort((a, b) => a.name.localeCompare(b.name) )}
          deleteName = {this.deleteName}/>
        </div>

    )
  }

}

export default NameDirectory;
