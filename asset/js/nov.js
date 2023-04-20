// Number of visits counter
// Get key at https://api.countapi.xyz/create
const KEY = `af62b626-bbd6-43d3-8bdc-fb2bcbaa0aac`
const NAMESPACE = 'pawonkos799.com'
const COUNT_URL = `https://api.countapi.xyz`

const counter = document.getElementById('nov')

const getCount = async () => {
    const response = await fetch(`${COUNT_URL}/get/${NAMESPACE}/${KEY}`)
    const data = await response.json()
    setValue(data.value)
}

const incrementCount = async () => {
    const response = await fetch(`${COUNT_URL}/hit/${NAMESPACE}/${KEY}`)
    const data = await response.json()
    setValue(data.value)
}

const setValue = (num) => {
    counter.innerHTML = num
}

if (localStorage.getItem('hasVisited') == null) {
    incrementCount()
        .then(() => {
            localStorage.setItem('hasVisited', 'true')
        })
        .catch((err) => console.log(err))
} else {
    getCount().catch((err) => console.log(err))
}
