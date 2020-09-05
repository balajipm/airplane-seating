const { getSeating } = require('../services/seating')

const seating = (req, res, next) => {
  const { seating2DArray, noOfPassengers } = req.body
  try {
    const seatingRes = getSeating(seating2DArray, noOfPassengers)
    res.send(seatingRes)
  } catch (e) {
    res.sendStatus(500)
  }
}

module.exports = {
  seating
}