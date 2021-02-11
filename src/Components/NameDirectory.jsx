import React, {Component} from 'react';
import Title from './Title';
import NameInput from './NameInput';
import NameList from './NameList';

class NameDirectory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      names: null
    }
  }

  setName = (name) => {
    this.setState({names: name})
  }

  render() {
    return (
        <div>
          <Title/>
          <NameInput getName = {this.setName}/>
          <NameList nameList = {this.state.names}/>
        </div>

    )
  }

}

export default NameDirectory;
