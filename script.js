const deck = [
  // Spades
  { rank: "2", suit: "spades", classString: "card rank-2 spades" },
  { rank: "3", suit: "spades", classString: "card rank-3 spades" },
  { rank: "4", suit: "spades", classString: "card rank-4 spades" },
  { rank: "5", suit: "spades", classString: "card rank-5 spades" },
  { rank: "6", suit: "spades", classString: "card rank-6 spades" },
  { rank: "7", suit: "spades", classString: "card rank-7 spades" },
  { rank: "8", suit: "spades", classString: "card rank-8 spades" },
  { rank: "9", suit: "spades", classString: "card rank-9 spades" },
  { rank: "10", suit: "spades", classString: "card rank-10 spades" },
  { rank: "J", suit: "spades", classString: "card rank-j spades" },
  { rank: "Q", suit: "spades", classString: "card rank-q spades" },
  { rank: "K", suit: "spades", classString: "card rank-k spades" },
  { rank: "A", suit: "spades", classString: "card rank-a spades" },

  // Hearts
  { rank: "2", suit: "hearts", classString: "card rank-2 hearts" },
  { rank: "3", suit: "hearts", classString: "card rank-3 hearts" },
  { rank: "4", suit: "hearts", classString: "card rank-4 hearts" },
  { rank: "5", suit: "hearts", classString: "card rank-5 hearts" },
  { rank: "6", suit: "hearts", classString: "card rank-6 hearts" },
  { rank: "7", suit: "hearts", classString: "card rank-7 hearts" },
  { rank: "8", suit: "hearts", classString: "card rank-8 hearts" },
  { rank: "9", suit: "hearts", classString: "card rank-9 hearts" },
  { rank: "10", suit: "hearts", classString: "card rank-10 hearts" },
  { rank: "J", suit: "hearts", classString: "card rank-j hearts" },
  { rank: "Q", suit: "hearts", classString: "card rank-q hearts" },
  { rank: "K", suit: "hearts", classString: "card rank-k hearts" },
  { rank: "A", suit: "hearts", classString: "card rank-a hearts" },

  // Diamonds
  { rank: "2", suit: "diamonds", classString: "card rank-2 diams" },
  { rank: "3", suit: "diamonds", classString: "card rank-3 diams" },
  { rank: "4", suit: "diamonds", classString: "card rank-4 diams" },
  { rank: "5", suit: "diamonds", classString: "card rank-5 diams" },
  { rank: "6", suit: "diamonds", classString: "card rank-6 diams" },
  { rank: "7", suit: "diamonds", classString: "card rank-7 diams" },
  { rank: "8", suit: "diamonds", classString: "card rank-8 diams" },
  { rank: "9", suit: "diamonds", classString: "card rank-9 diams" },
  { rank: "10", suit: "diamonds", classString: "card rank-10 diams" },
  { rank: "J", suit: "diamonds", classString: "card rank-j diams" },
  { rank: "Q", suit: "diamonds", classString: "card rank-q diams" },
  { rank: "K", suit: "diamonds", classString: "card rank-k diams" },
  { rank: "A", suit: "diamonds", classString: "card rank-a diams" },

  // Clubs
  { rank: "2", suit: "clubs", classString: "card rank-2 clubs" },
  { rank: "3", suit: "clubs", classString: "card rank-3 clubs" },
  { rank: "4", suit: "clubs", classString: "card rank-4 clubs" },
  { rank: "5", suit: "clubs", classString: "card rank-5 clubs" },
  { rank: "6", suit: "clubs", classString: "card rank-6 clubs" },
  { rank: "7", suit: "clubs", classString: "card rank-7 clubs" },
  { rank: "8", suit: "clubs", classString: "card rank-8 clubs" },
  { rank: "9", suit: "clubs", classString: "card rank-9 clubs" },
  { rank: "10", suit: "clubs", classString: "card rank-10 clubs" },
  { rank: "J", suit: "clubs", classString: "card rank-j clubs" },
  { rank: "Q", suit: "clubs", classString: "card rank-q clubs" },
  { rank: "K", suit: "clubs", classString: "card rank-k clubs" },
  { rank: "A", suit: "clubs", classString: "card rank-a clubs" },

  // Jokers
  { rank: "Joker", suit: "black", classString: "card joker" },
  { rank: "Joker", suit: "red", classString: "card joker" },
];

const rules = {
  rounds: declaredRounds,
  players: 4,
  cardsPerPlayer: 4,
};

const session = {
  score: {
    player1: 0,
    player2: 0,
    player3: 0,
    player4: 0,
  },
  currentPlayer: 1,
  currentDealer: 1,
  currentRound: 1,
};

const declaredRounds = 12;
