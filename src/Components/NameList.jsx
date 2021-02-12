import React, {Component} from 'react';

class NameList extends Component {

  render() {
    return (
      <table>
        <ul>
          {this.props.nameList.map(name => {
            return (
              <tr>
                <td><li key={name}>{name}</li></td>
              </tr>
            )
          })}
        </ul>
      </table>
    )
  }
}

export default NameList;
