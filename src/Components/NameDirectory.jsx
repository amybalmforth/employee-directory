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

  render() {
    return (
        <div>
          <Title/>
          <NameInput getName = {this.setName}/>
          <NameList nameList = {this.state.names.sort((a, b) => a.name.localeCompare(b.name) )}/>
        </div>

    )
  }

}

export default NameDirectory;
