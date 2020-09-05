const { getSeating } = require('../services/seating')

const seating = (req, res, next) => {
  console.log(req.body);
  const { seating2DArray, noOfPassengers } = req.body
  try {
    const seatingRes = getSeating(seating2DArray, noOfPassengers)
    res.send(seatingRes)
  } catch (e) {
    console.log(e.message)
    res.sendStatus(500)
  }
}

module.exports = {
  seating
}