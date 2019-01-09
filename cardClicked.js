function cardClicked(card, column, lastCard, lastColumn) {
    if (card.reversed == true ){
        card.reversed == false
    }
    if (lastCard == null) {
        card.selected = true;
        this.remember(card, column);

    } else {
        let cardsToMove = lastColumn.popFrom(lastCard);
        column.append(cardsToMove);
        lastCard.selected = false;
        this.forget();
        
    }
}