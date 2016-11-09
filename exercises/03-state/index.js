import React from 'react';

class HiddenMessage extends React.Component {
  constructor() {
    super();

    // TODO implement this.state
    this.state = {label: "Show message",
                  collapsed: true,
                  msg: "hidden message"};
  }
  onClick(ev) {
    this.setState({
      collapsed: !this.state.collapsed,
      label: this.state.collapsed ? "Hide message" : "Show message"
    })
    // TODO set a new state
    // TODO `label` should reflect the state of the component with "Hide" or "Show"
    // TODO collapsed should be toggled
  }
  render() {
    console.log(this.state);

    let style = {
      display: this.state.collapsed ? 'none' : 'block'
    };

    return (
      <div>
        <button
          type='button'
          onClick={this.onClick.bind(this)}
          className='btn btn-default'
        >
          {this.state.label}
        </button>
        <div className='well' style={style}>
          {this.state.msg}
        </div>
      </div>
    );
  }
}

export default HiddenMessage;
