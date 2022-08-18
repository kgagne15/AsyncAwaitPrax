let baseUrl = 'https://deckofcardsapi.com/api/deck/'
let $body = $('body')
let $btn = $('#card')

async function drawCard() {
    try {
        res = await axios.get(baseUrl + 'new/draw')
        console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
    } catch {
        console.log('Error')
    }
}

drawCard()

async function newShuffleCard() {
    try {
        res = await axios.get(baseUrl + 'new/draw/')
        let deckId = res.data.deck_id
        res2 = await axios.get(baseUrl + `${deckId}/draw/`)
        console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
        console.log(`${res2.data.cards[0].value} of ${res2.data.cards[0].suit}`)
    } catch {
        console.log('Error')
    }
}

newShuffleCard()

// Number 3
let deckId = null;
let $cardArea = $('#card-area')
async function newDeck() {
    try {
        let newDeck = await axios.get(baseUrl + 'new/shuffle')
        deckId = newDeck.data.deck_id;
        $btn.show()
    } catch {
        console.log('Errors')
    }
}

$btn.on('click', async function() {
    let newCard = await axios.get(baseUrl + `${deckId}` + '/draw/')
    if (newCard.data.remaining !== 0) {
        let $item = `
        <div>
            <img src="${newCard.data.cards[0].image}">
        </div>
        `
        $cardArea.append($item)
    } else {
        alert('You are out of cards. Refresh for a new deck')
    }
})

newDeck()