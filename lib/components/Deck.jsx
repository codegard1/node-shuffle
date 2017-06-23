import React, { Component } from "react";

export class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      length: 0
    };

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
    const cards = this.state.cards.slice(0);
    const length = cards.length;
    this.setState({
      cards,
      length
    });
  }
  _shuffle() {
    const cards = this.fisherYates(this.state.cards);
    this.setState({ cards });
  }

  _deal(numberOfCards, arrayOfHands) {
    let cards = this.state.cards;
    for (let i = 0; i < numberOfCards; i++)
      for (let j = 0; j < arrayOfHands.length; j++)
        arrayOfHands[j].push(this.cards.pop());
    let length = cards.length;
    this.setState({ cards, length });
  }

  _draw(num) {
    let cards = this.state.cards;
    let length = cards.length;
    let ret = [];

    // when no number is specified
    if (!num || num <= 1) {
      length = cards.length - 1;
      return cards.pop();
    }

    // when a number is specified
    if (num && num >= 1) {
      for (let i = 0; i < num; i++)
        ret.push(cards.pop());
      length = cards.length;
      return ret;
    }

    this.setState({ cards, length });
  }

  _drawFromBottomOfDeck(num) {
    let cards = this.state.cards;
    let length = cards.length;

    if (!num || num < 1) {
      num = 1;
    }

    let ret = [];
    for (let i = 0; i < num; i++) {
      ret.push(cards.shift());
    }
    length = cards.length;

    this.setState({ cards, length });

    if (ret.length === 1) {
      return ret[0];
    } else {
      return ret;
    }
  }

  _drawRandom(num) {
    let cards0 = this.state.cards;
    let length = cards0.length;
    let ret = [];

    let _draw = function(cards) {
      let index = Math.floor(Math.random() * cards.length);
      let card = cards[index];
      cards.splice(index, 1);
      length = cards.length;
      return card;
    };

    if (!num || num <= 1) {
      ret.push(_draw.apply(this, cards0));
    } else {
      let cards = [];
      for (let i = 0; i < num; i++) {
        cards.push(_draw.apply(this, cards0));
      }
      ret.push(cards);
    }

    this.setState({ cards: cards0, length });
    return ret;
  }

  _putOnTopOfDeck(cards) {
    let cards0 = this.state.cards;
    let length = cards0.length;

    if (!cards instanceof Array) cards0.push(cards);
    else for (var i = 0; i < cards.length; i++) cards0.push(cards[i]);
    length = cards0.length;

    this.setState({ cards: cards0, length });
  }

  _putOnBottomOfDeck(cards) {
    let cards0 = this.state.cards;
    let length = cards0.length;

    if (!cards instanceof Array) cards0.unshift(cards);
    else for (var i = 0; i < cards.length; i++) cards0.unshift(cards[i]);
    length = cards0.length;

    this.setState({ cards: cards0, length });
  }

  //array shuffling algorithm: http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
  fisherYates(arr) {
    var i = arr.length;
    if (i === 0) return false;
    while (--i) {
      var j = Math.floor(Math.random() * (i + 1));
      var tempi = arr[i];
      var tempj = arr[j];
      arr[i] = tempj;
      arr[j] = tempi;
    }
  }

  render() {
    return (<div> I am Deck </div>);
  }
}

export default Deck;
