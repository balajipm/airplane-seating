const { getSeating } = require('../services/seating')

const seating = (req, res, next) => {
  //const {seatind2DArray, noOfPassengers} = req.body
  seatind2DArray = [[3, 2], [4, 3], [2, 3], [3, 4]];
  noOfPassengers = 30;
  try {
    const seatingRes = getSeating(seatind2DArray, noOfPassengers)
    res.send(seatingRes)
  } catch (e) {
    console.log(e.message)
    res.sendStatus(500)
  }
}

module.exports = {
  seating
}