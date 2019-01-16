import React from "react";

class Line extends React.Component {
  render() {
    return (
      <span className={`line ${this.props.color} w-${this.props.length}`} />
    );
  }
}

class Code extends React.Component {
  ref = React.createRef();
  componentDidMount() {
    const spans = [...this.ref.current.children];
    for (let i = 0; i < spans.length; i++) {
      setTimeout(() => {
        spans[i].style.opacity = 0.4;
      }, i * 3);
      setTimeout(() => {
        spans[i].style.filter = "grayscale(0)";
      }, (spans.length - i - 1) * 3);
    }
  }

  generateLines(amount) {
    const colors = ["blue", "purple", "green", "yellow", "white", "red"];
    const lines = [];
    for (let i = 0; i < amount; i++) {
      const color = colors[Math.floor(Math.random() * 6)];
      const length = Math.ceil(Math.random() * 5);
      lines.push(<Line key={i} color={color} length={length} />);
    }
    return lines;
  }

  render() {
    return (
      <div ref={this.ref} className="code">
        {this.generateLines(180)}
      </div>
    );
  }
}

export default Code;
