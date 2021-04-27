const logger = (req, res, next) => {
    console.log(req.path, req.hostname)
    next()
}

module.exports = logger