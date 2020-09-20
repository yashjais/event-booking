const Bookmark = require('../models/booking')


module.exports.list = (req, res) => {
    Bookmark.find()
        .then(bookmark => res.send(bookmark))
        .catch(err => res.send(err))
}

module.exports.create = (req, res) => {
    const body = req.body
    const bookmark = new Bookmark(body)
    bookmark.save()
        .then(book => res.send(book))
        .catch(err => res.send(err))
}