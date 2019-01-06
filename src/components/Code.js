import React from "react";

class Line {
  constructor(color, length, index) {
    this.color = color;
    this.length = length;
    this.index = index;
  }

  html() {
    return (
      <span
        key={this.index}
        className={`line ${this.color} w-${this.length}`}
      />
    );
  }
}

class Code extends React.Component {
  generateLines(amount) {
    const colors = ["blue", "purple", "green", "yellow", "white", "red"];
    const lines = [];
    for (let i = 0; i < amount; i++) {
      const color = colors[Math.floor(Math.random() * 6)];
      const length = Math.ceil(Math.random() * 6);
      const line = new Line(color, length, i);
      lines.push(line.html());
    }
    return lines;
  }

  render() {
    return <div className="code">{this.generateLines(50)}</div>;
  }
}

export default Code;
