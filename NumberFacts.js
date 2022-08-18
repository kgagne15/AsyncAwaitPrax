let baseUrl = 'http://numbersapi.com/'

// Number 1
async function numFacts() {
    res = await axios.get(baseUrl + 9 + '?json')
    console.log(res.data.text)
}

numFacts()

// Number 2
async function multipleNumFacts() {
    let minNum = 9
    let maxNum = 18
    res = await axios.get(baseUrl + minNum + '..' + maxNum + '?json')
    for (let i = minNum; i <= maxNum; i++) {
        console.log(res.data[i])
    }
}

multipleNumFacts()

// Number 3
async function sameNumFacts() {
    let fact1 = await axios.get(baseUrl + 9 + '?json')
    let fact2 = await axios.get(baseUrl + 9 + '?json')
    let fact3 = await axios.get(baseUrl + 9 + '?json')
    let fact4 = await axios.get(baseUrl + 9 + '?json')

    console.log(fact1.data.text)
    console.log(fact2.data.text)
    console.log(fact3.data.text)
    console.log(fact4.data.text)
}

sameNumFacts()