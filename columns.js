let suits = ['spades', 'hearts', 'diamonds', 'clubs'];
let ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];

let cards = [];

function fileFor(rank, suit) {
	if (rank == 'jack' || rank == 'queen' || rank == 'king') {
		suit += '2';
	}

	return 'cards/' + rank + '_of_' + suit + '.png';
}

let id = 0;

for (let suit of suits) {
	let value = 0;
	for (let rank of ranks) {
		let color = (suit == 'hearts' || suit == 'diamonds' ? 'red' : 'black');
		cards.push({
			rank: rank,
			suit: suit,
			color: color,
			value: ++value,
			id: 'card' + id,
			selected: false,
			reversed: false,

			file: function () {
				return fileFor(this.rank, this.suit);
			},

			swap: function (other) {
				let thisIndex = cards.indexOf(this);
				let otherIndex = cards.indexOf(other);

				cards[thisIndex] = other;
				cards[otherIndex] = this;
			},

			name: function () {
				return this.rank + ' of ' + this.suit;
			},
		});

		id++;
	}
}

let columns = [];

for (let i = 0; i < columnCount; ++i) {
	columns.push({
		id: i,
		cards: [],

		clear: function () {
			this.cards = [];
		},

		empty: function () {
			return this.cards.length == 0;
		},

		popFrom: function (card) {
			let index = this.cards.indexOf(card);

			let cards = this.cards.slice(index);

			this.cards.splice(index);

			return cards;
		},

		append: function (cards) {
			this.cards = this.cards.concat(cards);
		},
	});
}

let acePiles = [];

for (let i = 0; i < 4; ++i) {
	acePiles.push({
		id: 'acePile' + i,
		cards: [],

		empty: function () {
			return this.cards.length == 0;
		},
	});
}

var app = new Vue({
	el: '#board',
	data: {
		cards: cards,
		columns: columns,
		acePiles: acePiles,
		lastClicked: { card: null, column: null },
	},
	methods: {
		aceCardClicked: function(card, acePile) {
			let lastCard = this.lastClicked.card;
			let lastColumn = this.lastClicked.column;

			console.log("Clicked " + card.name());
			if (lastCard != null) {
				console.log("Last card " + lastCard.name());
			}

			aceCardClicked.call(this, card, acePile, lastCard, lastColumn);
		},

		aceEmptySpotClicked: function(acePile) {
			let lastCard = this.lastClicked.card;
			let lastColumn = this.lastClicked.column;
			aceEmptySpotClicked.call(this, acePile, lastCard, lastColumn);
		},

		deal: function () {
			for (let column of this.columns) {
				column.clear();
			}

			shuffle.call(this);

			deal.call(this);
		},

		cardClicked: function (card, column) {
			let lastCard = this.lastClicked.card;
			let lastColumn = this.lastClicked.column;

			console.log("Clicked " + card.name());
			if (lastCard != null) {
				console.log("Last card " + lastCard.name());
			}

			cardClicked.call(this, card, column, lastCard, lastColumn);
		},

		emptySpotClicked: function (column) {
			let lastCard = this.lastClicked.card;
			let lastColumn = this.lastClicked.column;
			emptySpotClicked.call(this, column, lastCard, lastColumn);
		},

		remember: function(lastCard, lastColumn) {
			this.lastClicked = {
				card: lastCard,
				column: lastColumn,
			};
		},

		forget: function() {
			this.remember(null, null);
		}
	}
});
