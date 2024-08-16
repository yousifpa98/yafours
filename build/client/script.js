// Full deck of cards
const deck = [
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

// Game rules and scoring system
const rules = {
  rounds: 4, // Number of rounds
  players: 4, // Number of players
  playerHand: 5, // Number of cards per player hand
  scoreRules: { // Points assigned to each card rank
    A: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10,
    J: 11, Q: 12, K: 13, blackFour: -4, redFour: 4
  }
};

// Session state for tracking game progress
const session = {
  score: { player1: 0, player2: 0, player3: 0, player4: 0 }, // Initial scores
  player: 1, // Current player
  dealer: 0, // Current dealer
  round: 1, // Current round
};

// Player objects with their respective attributes
const players = [
  { name: "Player 1", points: 0, streak: 0, hand: [], handValue: 0, selection: [], hasCalledYafours: false, penaltyCards: 0 },
  { name: "Player 2", points: 0, streak: 0, hand: [], handValue: 0, selection: [], hasCalledYafours: false, penaltyCards: 0 },
  { name: "Player 3", points: 0, streak: 0, hand: [], handValue: 0, selection: [], hasCalledYafours: false, penaltyCards: 0 },
  { name: "Player 4", points: 0, streak: 0, hand: [], handValue: 0, selection: [], hasCalledYafours: false, penaltyCards: 0 },
];

// Function to shuffle the deck using the Fisher-Yates algorithm
const shuffleDeck = (deck) => {
  let playDeck = deck.slice(); // Create a copy of the deck
  for (let i = playDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [playDeck[i], playDeck[j]] = [playDeck[j], playDeck[i]]; // Swap elements
  }
  return playDeck;
};

// Global variables for draw and discard piles
let drawPile = [];
let discardPile = [];

// Function to deal cards to players and set up draw/discard piles
const dealHands = () => {
  // Step 1: Shuffle the deck and create a playDeck
  let playDeck = shuffleDeck(deck);

  // Step 2: Deal cards to each player
  for (let i = 0; i < players.length; i++) {
    players[i].hand = playDeck.splice(0, rules.playerHand); // Deal cards to player
    players[i].handValue = players[i].hand.reduce((acc, card) => acc + rules.scoreRules[card.rank], 0); // Calculate hand value
  }

  // Step 3: Assign the remaining cards to the drawPile
  drawPile = playDeck;

  // Step 4: Move the top card from the drawPile to start the discardPile
  discardPile.push(drawPile.shift());
};

// Function to render the game state
const renderGame = () => {
  const playerHandDiv = document.getElementById('playerHand');
  const drawPileDiv = document.getElementById('drawPile');
  const discardPileDiv = document.getElementById('discardPile');

  // Clear any existing content
  playerHandDiv.innerHTML = '';
  drawPileDiv.innerHTML = '';
  discardPileDiv.innerHTML = '';

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
  drawPileDiv.innerHTML = `<div class="card back">*</div>`;

  // Render the top card of the discard pile or "Empty" if discard pile is empty
  if (discardPile.length > 0) {
    const topDiscardCard = discardPile[0];
    discardPileDiv.innerHTML = `
      <div class="${topDiscardCard.classString}">
        <span class="rank">${topDiscardCard.rank}</span>
        <span class="suit">&${topDiscardCard.suit};</span>
      </div>
    `;
  } else {
    discardPileDiv.classList.add('empty'); // Show "Empty" if discard pile is empty
  }
};

// Function to initialize the game
const initializeGame = () => {
  dealHands(); // Deal the cards
  renderGame(); // Render the game state

  // Add event listener for discard button
  const discardButton = document.getElementById('discardButton');
  discardButton.addEventListener('click', discardSelection);

  // Add event listener to validate selection
  const playerHandDiv = document.getElementById('playerHand');
  playerHandDiv.addEventListener('change', validateSelection);
};

// Function to validate selection and enable/disable the discard button
const validateSelection = () => {
  const selectedCards = document.querySelectorAll('.card-input:checked');
  const discardButton = document.getElementById('discardButton');

  if (isValidSelection(selectedCards)) {
      discardButton.disabled = false;
      discardButton.classList.remove('disabled'); // Visually enable the button
  } else {
      discardButton.disabled = true;
      discardButton.classList.add('disabled'); // Visually disable the button
  }
};

// Function to check if the selected cards form a valid discard according to the rules
const isValidSelection = (selectedCards) => {
  if (selectedCards.length === 1) {
      return true; // Single card is valid
  }

  const cardValues = Array.from(selectedCards).map(cardInput => {
      const cardLabel = cardInput.parentElement;
      const cardDiv = cardLabel.querySelector('.card');
      return cardDiv.querySelector('.rank').textContent;
  });

  const uniqueValues = [...new Set(cardValues)];

  if (uniqueValues.length === 1) {
      return true; // All cards have the same rank (a row)
  }

  if (uniqueValues.length === 2) {
      const valueCounts = cardValues.reduce((counts, value) => {
          counts[value] = (counts[value] || 0) + 1;
          return counts;
      }, {});

      return Object.values(valueCounts).every(count => count === 2);
  }

  return false;
};

// Function to handle the discard selection
const discardSelection = () => {
  const playerHandDiv = document.getElementById('playerHand');
  const selectedCards = playerHandDiv.querySelectorAll('.card-input:checked');

  const newDiscards = [];

  selectedCards.forEach(cardInput => {
      const cardLabel = cardInput.parentElement;
      const cardDiv = cardLabel.querySelector('.card');
      const cardClassString = cardDiv.className;

      const cardIndex = players[0].hand.findIndex(card => card.classString === cardClassString);

      if (cardIndex !== -1) {
          const [discardedCard] = players[0].hand.splice(cardIndex, 1);
          newDiscards.push(discardedCard); // Collect discarded cards
          playerHandDiv.removeChild(cardLabel);
      }
  });

  // Add the new discards to the discard pile and sort the pile to have the highest card on top
  discardPile.push(...newDiscards);

  // Sort discard pile so the most recently discarded card is on top (visually)
  discardPile.sort((a, b) => rules.scoreRules[b.rank] - rules.scoreRules[a.rank]);

  renderGame(); // Re-render the game to reflect the discard

  // Disable the discard button again after discarding
  document.getElementById('discardButton').disabled = true;
  document.getElementById('discardButton').classList.add('disabled');
};

// Start the game when the page loads
window.onload = initializeGame;
