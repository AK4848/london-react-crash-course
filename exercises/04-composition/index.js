import React from 'react';

class List extends React.Component {
  // TODO write your component here
  render() {
    let classNames = [
      "list-group",
      "list-group-item"
    ]
    return <div>
      <ul className={classNames[0]}>
        <li className={classNames[1]}>{this.props.topic}</li>
      </ul>
    </div>;
  }
}

class Topics extends React.Component {
  // TODO write your component here
  render() {
    let topics = [
  'Component',
  'Props',
  'Composition',
  'Que pasa'
]
  let maps = topics.map(function(n){
    return <List topic={n} />
  })
    return <div>{maps}</div>;
  }
}

export default Topics;
