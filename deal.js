const columnCount = 7;

function deal() {
    let k = 0;

    for (let row = 0; row < 7; row++) {
        for (let col = row; col < 7; col++) {
            let card = this.cards[k];
            k++;
            if(col == row ){
                card.reversed=false;
            } else{
                card.reversed=true;
            }
            this.columns[col].cards.push(card);
         
        } 
    }
    /*
        for (let col = 1; col < 7 ; col++) {
            let card = this.cards[col];
            this.columns[col].cards.push(card);
        }*/
}