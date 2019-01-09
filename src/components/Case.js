import React from "react";

class Case extends React.Component {
  componentDidMount() {}

  render() {
    const { params } = this.props.match;
    return <div>{params.name}</div>;
  }
}

export default Case;
