import React, { Component } from "react";
import * as T from "prop-types";

export class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this._reset = this._reset.bind(this);
    this._shuffle = this._shuffle.bind(this);
    this._deal = this._deal.bind(this);
    this._draw = this._draw.bind(this);
    this._drawFromBottomOfDeck = this._drawFromBottomOfDeck.bind(this);
    this._drawRandom = this._drawRandom.bind(this);
    this._putOnTopOfDeck = this._putOnTopOfDeck.bind(this);
    this._putOnBottomOfDeck = this._putOnBottomOfDeck.bind(this);
  }

  componentWillMount() {
    this._reset();
    this._shuffle();
  }

  _reset() {
    this.cards = cards.slice(0);
    this.length = this.cards.length;
  }
  _shuffle() {
    fisherYates(this.cards);
  }

  _deal(numberOfCards, arrayOfHands) {
    for (var i = 0; i < numberOfCards; i++)
      for (var j = 0; j < arrayOfHands.length; j++)
        arrayOfHands[j].push(this.cards.pop());
    this.length = this.cards.length;
  }

  _draw(num) {
    if (!num || num <= 1) {
      this.length = this.cards.length - 1;
      return this.cards.pop();
    }

    var ret = [];
    for (var i = 0; i < num; i++)
      ret.push(this.cards.pop());
    this.length = this.cards.length;
    return ret;
  }

  _drawFromBottomOfDeck(num) {
    if (!num || num < 1) {
      num = 1;
    }

    var ret = [];
    for (var i = 0; i < num; i++) {
      ret.push(this.cards.shift());
    }
    this.length = this.cards.length;

    if (ret.length === 1) {
      return ret[0];
    } else {
      return ret;
    }
  }

  _drawRandom(num) {
    var _draw = function() {
      var index = Math.floor(random() * this.cards.length);
      var card = this.cards[index];
      this.cards.splice(index, 1);
      this.length = this.cards.length;
      return card;
    };

    if (!num || num <= 1) {
      return _draw.apply(this);
    } else {
      var cards = [];
      for (var i = 0; i < num; i++) {
        cards.push(_draw.apply(this));
      }
      return cards;
    }
  }

  _putOnTopOfDeck(cards) {
    if (!cards instanceof Array) this.cards.push(cards);
    else for (var i = 0; i < cards.length; i++) this.cards.push(cards[i]);
    this.length = this.cards.length;
  }

  _putOnBottomOfDeck(cards) {
    if (!cards instanceof Array) this.cards.unshift(cards);
    else for (var i = 0; i < cards.length; i++) this.cards.unshift(cards[i]);
    this.length = this.cards.length;
  }

  //array shuffling algorithm: http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
  fisherYates(arr) {
    var i = arr.length;
    if (i === 0) return false;
    while (--i) {
      var j = Math.floor(random() * (i + 1));
      var tempi = arr[i];
      var tempj = arr[j];
      arr[i] = tempj;
      arr[j] = tempi;
    }
  }

  render() {
    return <div>I am Deck</div>;
  }
}

Deck.propTypes = {};
