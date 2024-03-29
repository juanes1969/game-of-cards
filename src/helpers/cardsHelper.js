export const getIdGame = async () => {
    const url = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`

    const res = await fetch(url);
    const data = await res.json();

    return data?.deck_id;
}


export const getCards = async (deckId, number) => {
    const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${number}`

    const res = await fetch(url);
    const data = await res.json();

    return data?.cards;
}