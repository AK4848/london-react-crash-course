import React from 'react';
import ReactDOM from 'react-dom'

class Count extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 1
    };
  }
  componentWillMount() {
    console.clear();
      this.state.count++;
  }
  // TODO implement componentDidMount
  componentDidMount(){
    console.log(ReactDOM.findDOMNode(this));
  }
  render() {
    console.log('rendering');
    return (
      <h1>The count is: {this.state.count}</h1>
    );
  }
}

export default Count;
