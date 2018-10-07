const columnCount = 7;

function deal() {
    for (let i = 0; i<7;i++) {
        let card = this.cards[i];

        this.columns[i].cards.push(card);
    }
}