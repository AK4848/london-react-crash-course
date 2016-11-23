import React from 'react';

class Book extends React.Component {//to display the books in a table
  constructor(props) {
    super(props);
    this.state = { read: this.props.read };
    this.toggleRead = this.toggleRead.bind(this);//important
  }

  // TODO add the missing event!
  toggleRead() {//change the read state
    this.setState({read: !this.state.read})
  }
  render() {
    return (
      <tr>
        <td>
          {this.props.title}
        </td>
        <td>
          <input
            type='checkbox'
            checked={this.state.read}
          />
        </td>
      </tr>
    );
  }
}

export default Book;
