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
  console.log("Dealing hands...");
  let playDeck = shuffleDeck(deck);

  for (let i = 0; i < players.length; i++) {
    players[i].hand = playDeck.splice(0, rules.playerHand); // Deal cards to player
    updateHandValue(i);
    console.log(`${players[i].name} has been dealt:`, players[i].hand);
  }

  drawPile = playDeck;
  discardPile.push(drawPile.shift());
  console.log("Initial draw pile and discard pile set.");
};

// Function to update a player's hand value
const updateHandValue = (playerIndex) => {
  players[playerIndex].handValue = players[playerIndex].hand.reduce(
    (acc, card) => acc + (rules.scoreRules[card.rank] || 0),
    0
  );
  console.log(
    `${players[playerIndex].name}'s hand value is now: ${players[playerIndex].handValue}`
  );
};

// Function to render the game state
const renderGame = () => {
  console.log("Rendering game state...");
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

  // Update the scoreboard
  updateScoreboard();
};

// Function to initialize the game
const initializeGame = () => {
  console.log("Initializing game...");
  dealHands();
  renderGame();

  const discardButton = document.getElementById("discardButton");
  discardButton.addEventListener("click", () => {
    discardSelection();
  });

  const drawPileDiv = document.getElementById("drawPile");
  drawPileDiv.addEventListener("click", drawCard);

  const playerHandDiv = document.getElementById("playerHand");
  playerHandDiv.addEventListener("change", validateSelection);

  const sortButton = document.getElementById("sortButton");
  sortButton.addEventListener("click", sortHand);

  const yafoursButton = document.getElementById("yafoursButton");
  yafoursButton.addEventListener("click", callYafours);

  updateScoreboard();
  playerTurn();
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

  const uniqueValues = [...new Set(cardValues.map((card) => card.rank))];

  // Handle matching ranks or Jokers
  if (uniqueValues.length === 1 || uniqueValues.includes("Wildcard")) {
    return true; // All cards have the same rank (a row) or contain a Joker
  }

  // Check for valid sequences (e.g., 2-3-4 of the same suit)
  if (
    uniqueValues.length === selectedCards.length &&
    selectedCards.length >= 3
  ) {
    // Ensure sequence is at least 3 cards
    // Sort the card values based on rank order (accounting for Ace, 2, ..., K)
    const sortedCards = cardValues.sort(
      (a, b) => rules.scoreRules[a.rank] - rules.scoreRules[b.rank]
    );

    // Check if all cards are of the same suit
    const sameSuit = sortedCards.every(
      (card) => card.suit === sortedCards[0].suit
    );

    // Check if they form a consecutive sequence
    const isConsecutive = sortedCards.every((card, index, arr) => {
      if (index === 0 || card.rank === "Wildcard") return true; // Skip first card and Wildcards
      return (
        rules.scoreRules[card.rank] ===
        rules.scoreRules[arr[index - 1].rank] + 1
      );
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
  console.log(`${players[currentPlayerIndex].name} is discarding...`);
  const playerHandDiv = document.getElementById("playerHand");
  const selectedCards = playerHandDiv.querySelectorAll(".card-input:checked");

  const newDiscards = [];

  selectedCards.forEach((cardInput) => {
    const cardLabel = cardInput.parentElement;
    const cardDiv = cardLabel.querySelector(".card");
    const cardClassString = cardDiv.className;

    const cardIndex = players[currentPlayerIndex].hand.findIndex(
      (card) => card.classString === cardClassString
    );

    if (cardIndex !== -1) {
      const [discardedCard] = players[currentPlayerIndex].hand.splice(
        cardIndex,
        1
      );
      newDiscards.push(discardedCard); // Collect discarded cards
      playerHandDiv.removeChild(cardLabel);
    }
  });

  if (newDiscards.length > 1) {
    newDiscards.sort(
      (a, b) => rules.scoreRules[b.rank] - rules.scoreRules[a.rank]
    );
  }
  discardPile.push(...newDiscards);

  updateHandValue(currentPlayerIndex); // Update hand value after discarding
  console.log(`${players[currentPlayerIndex].name} discarded:`, newDiscards);
  renderGame(); // Re-render the game to reflect the discard

  document.getElementById("discardButton").disabled = true;
  document.getElementById("discardButton").classList.add("disabled");
};

// Function to handle drawing a card from the draw pile
const drawCard = () => {
  console.log(`${players[currentPlayerIndex].name} is drawing a card...`);
  if (drawPile.length > 0) {
    const drawnCard = drawPile.shift();
    players[currentPlayerIndex].hand.push(drawnCard);

    updateHandValue(currentPlayerIndex);
    console.log(`${players[currentPlayerIndex].name} drew:`, drawnCard);
    renderGame();
    nextPlayerTurn(); // Move to the next player's turn after drawing
  }
};

// Function to sort the player's hand
const sortHand = () => {
  console.log(`${players[currentPlayerIndex].name} is sorting their hand...`);
  const grouped = players[currentPlayerIndex].hand.reduce((acc, card) => {
    const rank = card.rank === "Joker" ? "Joker" : card.rank;
    acc[rank] = acc[rank] || [];
    acc[rank].push(card);
    return acc;
  }, {});

  let potentialDiscards = [];

  for (const rank in grouped) {
    if (grouped[rank].length > 1) {
      potentialDiscards.push(grouped[rank]);
    }
  }

  const suits = ["spades", "hearts", "diams", "clubs"];
  suits.forEach((suit) => {
    const suitedCards = players[currentPlayerIndex].hand.filter(
      (card) => card.suit === suit
    );
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

  potentialDiscards.sort((a, b) => {
    const maxA = Math.max(...a.map((card) => rules.scoreRules[card.rank]));
    const maxB = Math.max(...b.map((card) => rules.scoreRules[card.rank]));
    return maxB - maxA;
  });

  const remainingCards = players[currentPlayerIndex].hand.filter(
    (card) => !potentialDiscards.flat().includes(card)
  );

  remainingCards.sort(
    (a, b) => rules.scoreRules[b.rank] - rules.scoreRules[a.rank]
  );

  const sortedHand = potentialDiscards.flat().concat(remainingCards);
  players[currentPlayerIndex].hand = sortedHand;

  updateHandValue(currentPlayerIndex);
  console.log(
    `${players[currentPlayerIndex].name} sorted their hand:`,
    players[currentPlayerIndex].hand
  );
  renderGame();
};

// Function to call Yafours
const callYafours = () => {
  console.log(
    `${players[currentPlayerIndex].name} is attempting to call Yafours...`
  );
  if (players[currentPlayerIndex].handValue <= 6) {
    let lowestValue = players[currentPlayerIndex].handValue;
    let winnerIndex = currentPlayerIndex;

    for (let i = 0; i < players.length; i++) {
      if (players[i].handValue < lowestValue) {
        lowestValue = players[i].handValue;
        winnerIndex = i;
      }
    }

    if (winnerIndex === currentPlayerIndex) {
      console.log(
        `${players[currentPlayerIndex].name} called Yafours correctly!`
      );
    } else {
      console.log(
        `${players[currentPlayerIndex].name} called Yafours incorrectly!`
      );
    }

    updateScores(winnerIndex);
  } else {
    console.log("Cannot call Yafours! Hand value is greater than 6.");
  }
};

// Function to update the scores after a round
const updateScores = (winnerIndex) => {
  for (let i = 0; i < players.length; i++) {
    if (i === winnerIndex) {
      players[i].points += 0;
    } else {
      const handScore = players[i].handValue;
      const blackFours = players[i].hand.filter(
        (card) =>
          card.rank === "4" && (card.suit === "spades" || card.suit === "clubs")
      ).length;
      players[i].points += handScore - blackFours * 4;
    }
  }

  console.log(
    "Scores after this round:",
    players.map((p) => p.points)
  );
  updateScoreboard();
  prepareNextRound();
};

// Function to update the scoreboard display
const updateScoreboard = () => {
  document.getElementById(
    "player1Score"
  ).textContent = `Player 1: ${players[0].points}`;
  document.getElementById(
    "player2Score"
  ).textContent = `Player 2: ${players[1].points}`;
  document.getElementById(
    "player3Score"
  ).textContent = `Player 3: ${players[2].points}`;
  document.getElementById(
    "player4Score"
  ).textContent = `Player 4: ${players[3].points}`;
};

// Global variable to track the current player's turn
let currentPlayerIndex = 0;

// Function to handle advancing to the next player's turn
const nextPlayerTurn = () => {
  currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
  if (currentPlayerIndex === 0) {
    session.round++;
  }
  playerTurn();
};

// Function to manage a player's turn
const playerTurn = () => {
  console.log(`It's ${players[currentPlayerIndex].name}'s turn.`);
  if (currentPlayerIndex === 0) {
    const discardButton = document.getElementById("discardButton");
    discardButton.addEventListener("click", () => {
      discardSelection();
    });

    const drawPileDiv = document.getElementById("drawPile");
    drawPileDiv.addEventListener("click", drawCard);
  } else {
    setTimeout(() => {
      sortHand();
      const bestDiscard = players[currentPlayerIndex].hand.pop();
      discardPile.push(bestDiscard);
      updateHandValue(currentPlayerIndex);

      if (drawPile.length > 0) {
        const drawnCard = drawPile.shift();
        players[currentPlayerIndex].hand.push(drawnCard);
        updateHandValue(currentPlayerIndex);
      }

      if (players[currentPlayerIndex].handValue <= 6) {
        callYafours();
      }

      renderGame();
      nextPlayerTurn();
    }, 1000);
  }
};

// Function to prepare for the next round
const prepareNextRound = () => {
  session.round++;
  session.dealer = (session.dealer + 1) % players.length;
  console.log(`Starting round ${session.round}...`);
  initializeGame();
};

// Start the game when the page loads
window.onload = initializeGame;
