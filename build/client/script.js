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
  { rank: "2", suit: "diams", classString: "card rank-2 diams" },
  { rank: "3", suit: "diams", classString: "card rank-3 diams" },
  { rank: "4", suit: "diams", classString: "card rank-4 diams" },
  { rank: "5", suit: "diams", classString: "card rank-5 diams" },
  { rank: "6", suit: "diams", classString: "card rank-6 diams" },
  { rank: "7", suit: "diams", classString: "card rank-7 diams" },
  { rank: "8", suit: "diams", classString: "card rank-8 diams" },
  { rank: "9", suit: "diams", classString: "card rank-9 diams" },
  { rank: "10", suit: "diams", classString: "card rank-10 diams" },
  { rank: "J", suit: "diams", classString: "card rank-j diams" },
  { rank: "Q", suit: "diams", classString: "card rank-q diams" },
  { rank: "K", suit: "diams", classString: "card rank-k diams" },
  { rank: "A", suit: "diams", classString: "card rank-a diams" },

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
  rounds: 4,
  players: 4,
  playerHand: 5,
  scoreRules: {
    A: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    blackFour: -4,
    redFour: 4,
  },
};

const session = {
  score: {
    player1: 0,
    player2: 0,
    player3: 0,
    player4: 0,
  },
  player: 1,
  dealer: 0,
  round: 1,
};

const players = [
  {
    name: "Player 1",
    points: 0, // Initial points for the player
    streak: 0, // Winning streak (can be tracked if relevant to your game)
    hand: [], // Array to hold the player's hand (cards will be dealt into this array)
    handValue: 0, // Total value of the cards in the player's hand
    selection: [], // Array to hold selected cards for actions (e.g., discard, slam)
    hasCalledYafours: false, // Boolean to track if the player has called "Yafours" during the current round
    penaltyCards: 0, // Number of penalty cards the player has accumulated
  },
  {
    name: "Player 2",
    points: 0,
    streak: 0,
    hand: [],
    handValue: 0,
    selection: [],
    hasCalledYafours: false,
    penaltyCards: 0,
  },
  {
    name: "Player 3",
    points: 0,
    streak: 0,
    hand: [],
    handValue: 0,
    selection: [],
    hasCalledYafours: false,
    penaltyCards: 0,
  },
  {
    name: "Player 4",
    points: 0,
    streak: 0,
    hand: [],
    handValue: 0,
    selection: [],
    hasCalledYafours: false,
    penaltyCards: 0,
  },
];

const shuffleDeck = (deck) => {
  // Create a copy of the deck array
  let playDeck = deck.slice();

  // Shuffle the playDeck using the Fisher-Yates algorithm
  for (let i = playDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [playDeck[i], playDeck[j]] = [playDeck[j], playDeck[i]]; // Swap elements
  }

  return playDeck;
};

// Example usage:
/* const playDeck = shuffleDeck(deck);
console.log(playDeck); */

// Global variables for draw and discard piles
let drawPile = [];
let discardPile = [];

const dealHands = () => {
  // Step 1: Shuffle the deck and create a playDeck
  let playDeck = shuffleDeck(deck);

  // Step 2: Deal cards to each player
  for (let i = 0; i < players.length; i++) {
    players[i].hand = playDeck.splice(0, rules.playerHand);
    // Update handValue for each player
    players[i].handValue = players[i].hand.reduce((acc, card) => acc + rules.scoreRules[card.rank], 0);
  }

  // Step 3: Assign the remaining cards to the drawPile
  drawPile = playDeck;

  // Step 4: Move the top card from the drawPile to start the discardPile
  discardPile.push(drawPile.shift());

  // Debugging output to verify hands, drawPile, and discardPile
  console.log("Players' Hands:", players.map(p => p.hand));
  console.log("Draw Pile:", drawPile);
  console.log("Discard Pile:", discardPile);
};

// Example usage:
/* dealHands(); */

const renderGame = () => {
  const playerHandDiv = document.getElementById('playerHand');
  const drawPileUl = document.getElementById('drawPile');
  const discardPileUl = document.getElementById('discardPile');

  // Clear any existing content
  playerHandDiv.innerHTML = '';
  drawPileUl.innerHTML = '';
  discardPileUl.innerHTML = '';

  // Render Player 1's hand
  players[0].hand.forEach(card => {
    const cardElement = document.createElement('label');
    cardElement.className = 'card-label';
    cardElement.innerHTML = `
      <input type="checkbox" name="card" class="card-input" />
      <div class="${card.classString}">
        <span class="rank">${card.rank}</span>
        <span class="suit">&${card.suit};</span>
      </div>
    `;
    playerHandDiv.appendChild(cardElement);
  });

  // Render draw pile (only one card back is needed to represent the draw pile)
  drawPileUl.innerHTML = `
    <li><div class="card back">*</div></li>
  `;

  // Render the top card of the discard pile or "Empty" if discard pile is empty
  if (discardPile.length > 0) {
    const topDiscardCard = discardPile[0];
    const discardCardElement = document.createElement('li');
    discardCardElement.innerHTML = `
      <div class="${topDiscardCard.classString}">
        <span class="rank">${topDiscardCard.rank}</span>
        <span class="suit">&${topDiscardCard.suit};</span>
      </div>
    `;
    discardPileUl.appendChild(discardCardElement);
  } else {
    discardPileUl.innerHTML = '<li class="empty">Empty</li>';
  }
};

// Initialize the game
const initializeGame = () => {
  dealHands();
  renderGame();
};

// Call initializeGame when the page loads
initializeGame();