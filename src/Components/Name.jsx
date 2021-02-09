import React, {Component} from 'react';
import NameInput from './NameInput';
import NameList from './NameList';

class Name extends Component {

  state = {
    names: []
  }

  render() {
    return (
        <div>
          <NameInput />
          <NameList />
        </div>

    )
  }


}

export default Name;
