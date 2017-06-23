import React, { Component } from "react";
import * as T from "prop-types";

export class PlayingCard extends Component {
  constructor(props) {
    super(props);
    this.state = { suit: "", description: "", sort: "" };

    this._toString = this._toString.bind(this);
    this._toShortDisplayString = this._toShortDisplayString.bind(this);
  }

  componentWillMount() {
    this.setState({
      suit: this.props.suit,
      description: this.props.description,
      sort: this.props.sort
    });
  }

  _toString() {
    return this.state.description + " of " + this.state.suit + "s";
  }

  _toShortDisplayString() {
    const suit = this.state.suit.substring(0, 1);
    let value = "";
    switch (this.state.sort) {
      case 11:
        value = "J";
        break;

      case 12:
        value = "Q";
        break;

      case 13:
        value = "K";
        break;

      case 14:
        value = "A";
        break;

      default:
        value = this.state.sort;
    }
    return value + suit;
  }

  render() {
    return (
      <div>
        <span>{this.state.suit}</span><br />
        <span>{this.state.description}</span><br />
        <span>{this.state.sort}</span>
      </div>
    );
  }
}

PlayingCard.propTypes = {
  suit: T.string.isRequired,
  description: T.string.isRequired,
  sort: T.number.isRequired
};

export default PlayingCard;
