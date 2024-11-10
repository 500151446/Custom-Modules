const getFortune = () => {
    const fortunes = require('./fortunes.json')
    //looked this up
    randomItem = Math.floor(Math.random() * fortunes.length)
    return fortunes[randomItem]
}

module.exports = getFortune



