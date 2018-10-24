const columnCount = 7;

function deal() {
    for (let row = 0; row < 7; row++) {
        for (let col = row; col < 7; col++) {
            let card = this.cards[col];
            this.columns[col].cards.push(card);
        }
    }
    /*
        for (let col = 1; col < 7 ; col++) {
            let card = this.cards[col];
            this.columns[col].cards.push(card);
        }*/
}