import React, {Component} from 'react';

class NameList extends Component {

  render() {
    return (
      <ul>
        {this.props.nameList.map((item, i) => {
          return (
            <li key={i}>
            {item.name + ' - '}
            {item.email + ' '}
            <button id="delete"
            onClick={() => this.props.deleteName(item)}>Delete</button>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default NameList;
