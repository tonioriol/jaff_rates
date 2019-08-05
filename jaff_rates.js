const rates = [
    { 'from': 'EUR', 'to': 'USD', 'rate': '1.359' },
    { 'from': 'CAD', 'to': 'EUR', 'rate': '0.732' },
    { 'from': 'USD', 'to': 'EUR', 'rate': '0.736' },
    { 'from': 'EUR', 'to': 'CAD', 'rate': '1.366' }
]

// USD >(0,736)> EUR >(1,366)> CAD
//    0,736 * 1,366

function getRateByCurrencies(from, to) {

    const match = rates.find(function(rate) {
        return rate.from === from && rate.to === to
    })

    if (match) {
        return match.rate
    }

    const fromPair = rates.find(function(item) {
        return item.from === from
    })
    // { 'from': 'USD', 'to': 'EUR', 'rate': '0.736' },

    const toPair = rates.find(function(item) {
        return item.to === to
    })
    // { 'from': 'EUR', 'to': 'CAD', 'rate': '1.366' }

    if (fromPair.to === toPair.from) {
        return fromPair.rate * toPair.rate
    }

    return 'not found'
}

console.log(getRateByCurrencies('USD', 'CAD'))
