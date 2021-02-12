import React, {Component} from 'react';

class NameList extends Component {

  render() {
    return (
      <ul>
        {this.props.nameList.map((item, i) => {
          return (
            <li key={i}>
            {item.name}
            {item.email}
            </li>
          )
        })}
      </ul>
    )
  }
}

export default NameList;
