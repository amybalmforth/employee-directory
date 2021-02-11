import React, {Component} from 'react';

class NameList extends Component {

  render() {
    return (
        <ul>
          {this.props.nameList.map(name => {
            return (
              <li key={name}>{name}</li>
            )
          })}
        </ul>
    )
  }
}

export default NameList;
