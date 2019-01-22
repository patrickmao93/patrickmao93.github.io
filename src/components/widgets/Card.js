import React from "react";
import { Spring, config } from "react-spring";

import Pill from "./Pill";

class Card extends React.Component {
  state = {
    showPills: false
  };

  showPills() {
    this.setState({ showPills: true });
  }

  hidePills() {
    this.setState({ showPills: false });
  }

  renderPills() {
    if (!this.props.pills) {
      return;
    }
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ ...config.gentle }}
      >
        {props => (
          <div className="pills" style={props}>
            {this.props.pills.map(pill => (
              <Pill key={pill} type={pill} />
            ))}
          </div>
        )}
      </Spring>
    );
  }

  renderHeader() {
    if (this.props.header) {
      return (
        <div className="card__title">
          <h3>{this.props.sub.toUpperCase()}</h3>
          <h2>{this.props.header}</h2>
        </div>
      );
    }
  }

  renderImage() {
    if (!this.props.imgUrl) {
      return;
    }
    return (
      <>
        <div className="card__content__img">
          <img src={this.props.imgUrl} alt={this.props.header} />

          {this.state.showPills && this.renderPills(this.props.pills)}
        </div>
      </>
    );
  }

  render() {
    let interactable = "";
    if (this.props.interactable) {
      interactable = "card--interactable";
    }

    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 150, ...config.gentle }}
      >
        {props => {
          return (
            <div
              onMouseEnter={() => this.showPills()}
              onMouseLeave={() => this.hidePills()}
              className={`card ${interactable}`}
              style={props}
            >
              <div className="card__content">
                {this.renderImage(this.props)} {this.props.children}
              </div>
              {this.renderHeader(this.props)}
            </div>
          );
        }}
      </Spring>
    );
  }
}

export default Card;
