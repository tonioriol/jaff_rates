const rates = [
    { 'from': 'USD', 'to': 'AUD', 'rate': '1.44' },
    { 'from': 'AUD', 'to': 'USD', 'rate': '0.69' },
    { 'from': 'USD', 'to': 'EUR', 'rate': '0.64' },
    { 'from': 'EUR', 'to': 'USD', 'rate': '1.56' },
    { 'from': 'AUD', 'to': 'CAD', 'rate': '0.75' },
    { 'from': 'CAD', 'to': 'AUD', 'rate': '1.33' }
]

// 1,44 * 0,75

function getRateByCurrencies(from, to) {

    const match = rates.find(function(rate) {
        return rate.from === from && rate.to === to
    })

    if (match) {
        return match.rate
    }

    const fromPairs = rates.filter(function(item) {
        return item.from === from
    })

    const toPairs = rates.filter(function(item) {
        return item.to === to
    })

    // let rate = null
    // for (let i = 0; i < fromPairs.length; ++i) {
    //   for (let j = 0; j < toPairs.length; ++j) {
    //     if ( fromPairs[i].to === toPairs[j].from) {
    //       rate = fromPairs[i].rate * toPairs[j].rate
    //     }
    //   }
    // }

    const rate = fromPairs.



        return rate || 'not found'
}

console.log(getRateByCurrencies('USD', 'CAD'))
