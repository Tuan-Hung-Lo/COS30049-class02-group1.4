const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const authHeader = req.header('Authorization')
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) return res.sendStatus(401)

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        // Use accountId instead of id
        req.userId = decoded.accountId
        next()
    } catch (error) {
        console.error(error)
        return res.sendStatus(403)
    }
}

module.exports = verifyToken