import React, {Component} from 'react';

class NameList extends Component {

  render() {
    return (
        <div>
          {this.props.nameList}
        </div>
    )
  }
}

export default NameList;
