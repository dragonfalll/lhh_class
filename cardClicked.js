function cardClicked(card, column, lastCard, lastClicked) {
    if (lastCard == null) {
        card.selected = true;
        this.remember(card, column);

    } else {
        alert(lastCard.name() + 'moving');
        lastCard.selected = false;
        this.forget();
    }
}