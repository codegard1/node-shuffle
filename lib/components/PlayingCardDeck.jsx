import React, { Component } from "react";

import { PlayingCard } from "./PlayingCard.jsx";

export class PlayingCardDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        <PlayingCard suit="Club" description="Two" sort={2} />,
        <PlayingCard suit="Club" description="Three" sort={3} />,
        <PlayingCard suit="Club" description="Four" sort={4} />,
        <PlayingCard suit="Club" description="Five" sort={5} />,
        <PlayingCard suit="Club" description="Six" sort={6} />,
        <PlayingCard suit="Club" description="Seven" sort={7} />,
        <PlayingCard suit="Club" description="Eight" sort={8} />,
        <PlayingCard suit="Club" description="Nine" sort={9} />,
        <PlayingCard suit="Club" description="Ten" sort={10} />,
        <PlayingCard suit="Club" description="Jack" sort={11} />,
        <PlayingCard suit="Club" description="Queen" sort={12} />,
        <PlayingCard suit="Club" description="King" sort={13} />,
        <PlayingCard suit="Club" description="Ace" sort={14} />,
        <PlayingCard suit="Diamond" description="Two" sort={2} />,
        <PlayingCard suit="Diamond" description="Three" sort={3} />,
        <PlayingCard suit="Diamond" description="Four" sort={4} />,
        <PlayingCard suit="Diamond" description="Five" sort={5} />,
        <PlayingCard suit="Diamond" description="Six" sort={6} />,
        <PlayingCard suit="Diamond" description="Seven" sort={7} />,
        <PlayingCard suit="Diamond" description="Eight" sort={8} />,
        <PlayingCard suit="Diamond" description="Nine" sort={9} />,
        <PlayingCard suit="Diamond" description="Ten" sort={10} />,
        <PlayingCard suit="Diamond" description="Jack" sort={11} />,
        <PlayingCard suit="Diamond" description="Queen" sort={12} />,
        <PlayingCard suit="Diamond" description="King" sort={13} />,
        <PlayingCard suit="Diamond" description="Ace" sort={14} />,
        <PlayingCard suit="Heart" description="Two" sort={2} />,
        <PlayingCard suit="Heart" description="Three" sort={3} />,
        <PlayingCard suit="Heart" description="Four" sort={4} />,
        <PlayingCard suit="Heart" description="Five" sort={5} />,
        <PlayingCard suit="Heart" description="Six" sort={6} />,
        <PlayingCard suit="Heart" description="Seven" sort={7} />,
        <PlayingCard suit="Heart" description="Eight" sort={8} />,
        <PlayingCard suit="Heart" description="Nine" sort={9} />,
        <PlayingCard suit="Heart" description="Ten" sort={10} />,
        <PlayingCard suit="Heart" description="Jack" sort={11} />,
        <PlayingCard suit="Heart" description="Queen" sort={12} />,
        <PlayingCard suit="Heart" description="King" sort={13} />,
        <PlayingCard suit="Heart" description="Ace" sort={14} />,
        <PlayingCard suit="Spade" description="Two" sort={2} />,
        <PlayingCard suit="Spade" description="Three" sort={3} />,
        <PlayingCard suit="Spade" description="Four" sort={4} />,
        <PlayingCard suit="Spade" description="Five" sort={5} />,
        <PlayingCard suit="Spade" description="Six" sort={6} />,
        <PlayingCard suit="Spade" description="Seven" sort={7} />,
        <PlayingCard suit="Spade" description="Eight" sort={8} />,
        <PlayingCard suit="Spade" description="Nine" sort={9} />,
        <PlayingCard suit="Spade" description="Ten" sort={10} />,
        <PlayingCard suit="Spade" description="Jack" sort={11} />,
        <PlayingCard suit="Spade" description="Queen" sort={12} />,
        <PlayingCard suit="Spade" description="King" sort={13} />,
        <PlayingCard suit="Spade" description="Ace" sort={14} />
      ]
    };
  }

  render () {
      return (<div>{this.state.cards}</div>);
  }
}

module.exports = function() {
  this.cards = [];
};
