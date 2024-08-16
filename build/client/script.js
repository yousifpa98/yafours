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
  scoreRules: {
    // Points assigned to each card rank
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
    J: 10,
    Q: 10,
    K: 10,
    blackFour: -4,
    redFour: 4,
  },
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
  {
    name: "Player 1",
    points: 0,
    streak: 0,
    hand: [],
    handValue: 0,
    selection: [],
    hasCalledYafours: false,
    penaltyCards: 0,
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
    updateHandValue(i); // Update hand value after dealing
  }

  // Step 3: Assign the remaining cards to the drawPile
  drawPile = playDeck;

  // Step 4: Move the top card from the drawPile to start the discardPile
  discardPile.push(drawPile.shift());
};

// Function to update a player's hand value
const updateHandValue = (playerIndex) => {
  players[playerIndex].handValue = players[playerIndex].hand.reduce(
    (acc, card) => acc + (rules.scoreRules[card.rank] || 0),
    0
  );
};

// Function to render the game state
const renderGame = () => {
  const playerHandDiv = document.getElementById("playerHand");
  const drawPileDiv = document.getElementById("drawPile");
  const discardPileDiv = document.getElementById("discardPile");

  // Clear any existing content
  playerHandDiv.innerHTML = "";
  drawPileDiv.innerHTML = "";
  discardPileDiv.innerHTML = "";

  // Render Player 1's hand
  players[0].hand.forEach((card) => {
    const cardElement = document.createElement("label");
    cardElement.className = "card-label";
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
    const topDiscardCard = discardPile[discardPile.length - 1]; // Get the last added card or highest in the group
    discardPileDiv.innerHTML = `
      <div class="${topDiscardCard.classString}">
        <span class="rank">${topDiscardCard.rank}</span>
        <span class="suit">&${topDiscardCard.suit};</span>
      </div>
    `;
  } else {
    discardPileDiv.classList.add("empty"); // Show "Empty" if discard pile is empty
  }
};

// Function to initialize the game
const initializeGame = () => {
  dealHands(); // Deal the cards
  renderGame(); // Render the game state

  console.log(players[0].handValue); // Check hand value after dealing

  // Add event listener for discard button
  const discardButton = document.getElementById("discardButton");
  discardButton.addEventListener("click", discardSelection);

  // Add event listener to validate selection
  const playerHandDiv = document.getElementById("playerHand");
  playerHandDiv.addEventListener("change", validateSelection);

  // Add event listener for drawing a card
  const drawPileDiv = document.getElementById("drawPile");
  drawPileDiv.addEventListener("click", drawCard);

  // Add event listener for sorting the hand
  const sortButton = document.getElementById("sortButton");
  sortButton.addEventListener("click", sortHand);

  // Add event listener for calling Yafours
  const yafoursButton = document.getElementById("yafoursButton");
  yafoursButton.addEventListener("click", callYafours);
};

// Function to validate selection and enable/disable the discard button
const validateSelection = () => {
  const selectedCards = document.querySelectorAll(".card-input:checked");
  const discardButton = document.getElementById("discardButton");

  if (isValidSelection(selectedCards)) {
    discardButton.disabled = false;
    discardButton.classList.remove("disabled"); // Visually enable the button
  } else {
    discardButton.disabled = true;
    discardButton.classList.add("disabled"); // Visually disable the button
  }
};

// Function to check if the selected cards form a valid discard according to the rules
const isValidSelection = (selectedCards) => {
  if (selectedCards.length === 1) {
    return true; // Single card is valid
  }

  const cardValues = Array.from(selectedCards).map((cardInput) => {
    const cardLabel = cardInput.parentElement;
    const cardDiv = cardLabel.querySelector(".card");
    const rank = cardDiv.querySelector(".rank").textContent;
    const suit = cardDiv.querySelector(".suit").textContent;
    return { rank: rank === "Joker" ? "Wildcard" : rank, suit };
  });

  const uniqueValues = [...new Set(cardValues.map(card => card.rank))];

  // Handle matching ranks or Jokers
  if (uniqueValues.length === 1 || uniqueValues.includes("Wildcard")) {
    return true; // All cards have the same rank (a row) or contain a Joker
  }

  // Check for valid sequences (e.g., 2-3-4 of the same suit)
  if (uniqueValues.length === selectedCards.length && selectedCards.length >= 3) { // Ensure sequence is at least 3 cards
    // Sort the card values based on rank order (accounting for Ace, 2, ..., K)
    const sortedCards = cardValues.sort((a, b) => rules.scoreRules[a.rank] - rules.scoreRules[b.rank]);

    // Check if all cards are of the same suit
    const sameSuit = sortedCards.every(card => card.suit === sortedCards[0].suit);

    // Check if they form a consecutive sequence
    const isConsecutive = sortedCards.every((card, index, arr) => {
      if (index === 0 || card.rank === "Wildcard") return true; // Skip first card and Wildcards
      return rules.scoreRules[card.rank] === rules.scoreRules[arr[index - 1].rank] + 1;
    });

    if (sameSuit && isConsecutive) {
      return true; // Valid sequence
    }
  }

  if (uniqueValues.length === 2) {
    const valueCounts = cardValues.reduce((counts, value) => {
      counts[value.rank] = (counts[value.rank] || 0) + 1;
      return counts;
    }, {});

    if (valueCounts["Wildcard"]) {
      // Handle cases with one or two Jokers
      const nonWildcardValues = Object.keys(valueCounts).filter(
        (v) => v !== "Wildcard"
      );
      if (nonWildcardValues.length === 1) {
        return true; // Valid when Jokers are used to match the same rank
      } else if (nonWildcardValues.length === 2) {
        return Object.values(valueCounts).every(
          (count) => count === 2 || valueCounts["Wildcard"] === 2
        );
      }
    } else {
      return Object.values(valueCounts).every((count) => count === 2); // Check for pairs
    }
  }

  return false;
};

// Function to handle the discard selection
const discardSelection = () => {
  const playerHandDiv = document.getElementById("playerHand");
  const selectedCards = playerHandDiv.querySelectorAll(".card-input:checked");

  const newDiscards = [];

  selectedCards.forEach((cardInput) => {
    const cardLabel = cardInput.parentElement;
    const cardDiv = cardLabel.querySelector(".card");
    const cardClassString = cardDiv.className;

    const cardIndex = players[0].hand.findIndex(
      (card) => card.classString === cardClassString
    );

    if (cardIndex !== -1) {
      const [discardedCard] = players[0].hand.splice(cardIndex, 1);
      newDiscards.push(discardedCard); // Collect discarded cards
      playerHandDiv.removeChild(cardLabel);
    }
  });

  // Add the new discards to the discard pile
  if (newDiscards.length > 1) {
    // Sort the new discards to get the highest card on top
    newDiscards.sort(
      (a, b) => rules.scoreRules[b.rank] - rules.scoreRules[a.rank]
    );
  }
  discardPile.push(...newDiscards);

  updateHandValue(0); // Update hand value after discarding

  renderGame(); // Re-render the game to reflect the discard

  // Disable the discard button again after discarding
  document.getElementById("discardButton").disabled = true;
  document.getElementById("discardButton").classList.add("disabled");
};

// Function to handle drawing a card from the draw pile
const drawCard = () => {
  if (drawPile.length > 0) {
    // Remove the top card from the draw pile and add it to the player's hand
    const drawnCard = drawPile.shift();
    players[0].hand.push(drawnCard);

    updateHandValue(0); // Update hand value after drawing

    // Re-render the game to reflect the new hand and draw pile state
    renderGame();
  }
};

// Function to sort the player's hand
const sortHand = () => {
  // Group cards by rank
  const grouped = players[0].hand.reduce((acc, card) => {
    const rank = card.rank === "Joker" ? "Joker" : card.rank;
    acc[rank] = acc[rank] || [];
    acc[rank].push(card);
    return acc;
  }, {});

  // Find all valid discards and prioritize by value
  let potentialDiscards = [];

  // Check for groups of 2 or more cards with the same rank (pairs, triples, etc.)
  for (const rank in grouped) {
    if (grouped[rank].length > 1) {
      potentialDiscards.push(grouped[rank]);
    }
  }

  // Check for sequences of 3 or more cards
  const suits = ["spades", "hearts", "diams", "clubs"];
  suits.forEach((suit) => {
    const suitedCards = players[0].hand.filter((card) => card.suit === suit);
    suitedCards.sort(
      (a, b) => rules.scoreRules[a.rank] - rules.scoreRules[b.rank]
    );

    let sequence = [];
    for (let i = 0; i < suitedCards.length; i++) {
      if (
        sequence.length === 0 ||
        rules.scoreRules[suitedCards[i].rank] ===
          rules.scoreRules[sequence[sequence.length - 1].rank] + 1
      ) {
        sequence.push(suitedCards[i]);
      } else {
        if (sequence.length >= 3) potentialDiscards.push(sequence);
        sequence = [suitedCards[i]];
      }
    }
    if (sequence.length >= 3) potentialDiscards.push(sequence);
  });

  // Flatten and prioritize by highest card values in the groups or sequences
  potentialDiscards.sort((a, b) => {
    const maxA = Math.max(...a.map((card) => rules.scoreRules[card.rank]));
    const maxB = Math.max(...b.map((card) => rules.scoreRules[card.rank]));
    return maxB - maxA;
  });

  // Add the remaining cards that aren't part of any group or sequence
  const remainingCards = players[0].hand.filter(
    (card) => !potentialDiscards.flat().includes(card)
  );

  // Sort remaining cards by rank (high to low)
  remainingCards.sort((a, b) => rules.scoreRules[b.rank] - rules.scoreRules[a.rank]);

  // Combine the sorted potential discards with the remaining sorted cards
  const sortedHand = potentialDiscards.flat().concat(remainingCards);

  // Update the player's hand with the sorted order
  players[0].hand = sortedHand;

  updateHandValue(0); // Update hand value after sorting

  // Re-render the hand to reflect the new order
  renderGame();
};

// Function to call Yafours
const callYafours = () => {
  // Check if player 1's hand value is 6 or less
  if (players[0].handValue <= 6) {
    let lowestValue = players[0].handValue;
    let winnerIndex = 0;

    // Compare against other players
    for (let i = 1; i < players.length; i++) {
      if (players[i].handValue < lowestValue) {
        lowestValue = players[i].handValue;
        winnerIndex = i;
      }
    }

    if (winnerIndex === 0) {
      console.log("Yafours called correctly! Player 1 wins the round.");
    } else {
      console.log(
        `Yafours called incorrectly! Player ${
          winnerIndex + 1
        } wins the round with a hand value of ${lowestValue}.`
      );
    }

    // Update scores
    updateScores(winnerIndex);
  } else {
    console.log("Cannot call Yafours! Hand value is greater than 6.");
  }
};

// Function to update the scores after a round
const updateScores = (winnerIndex) => {
  for (let i = 0; i < players.length; i++) {
    if (i === winnerIndex) {
      // Winner scores 0 points
      players[i].points += 0;
    } else {
      // Calculate score, considering black fours and ignoring red fours for now
      const handScore = players[i].handValue;
      const blackFours = players[i].hand.filter(
        (card) => card.rank === "4" && card.suit === "spades" || card.suit === "clubs"
      ).length;
      players[i].points += handScore - blackFours * 4;
    }
  }

  console.log("Scores after this round:", players.map(p => p.points));

  // Prepare for the next round or end the game
  prepareNextRound();
};

// Function to prepare for the next round
const prepareNextRound = () => {
  session.round++;
  session.dealer = (session.dealer + 1) % players.length;
  initializeGame(); // Reinitialize the game for the next round
};

// Start the game when the page loads
window.onload = initializeGame;