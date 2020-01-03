import * as React from "react";


class Button extends React.PureComponent {
  render() {
    return (
      <button
        style={{
          border: "none",
          padding: "8px 12px",
          background: "hotpink",
          borderRadius: "4px",
          color: "white"
        }}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
