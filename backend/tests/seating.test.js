const assert = require('assert');
const { findSeatType, seatType } = require('../services/seating')

describe('Seating Algorithm Testing', () => {
  it('should return ' + seatType.Aisle, () => {
    assert.equal(findSeatType([[3, 2], [4, 3], [2, 3], [3, 4]], 1, 3), seatType.Aisle);
  });
  it('should return ' + seatType.Window, () => {
    assert.equal(findSeatType([[3, 2], [4, 3], [2, 3], [3, 4]], 4, 3), seatType.Window);
  });
  it('should return ' + seatType.Middle, () => {
    assert.equal(findSeatType([[3, 2], [4, 3], [2, 3], [3, 4]], 2, 3), seatType.Middle);
  });
  it('should not return ' + seatType.Middle, () => {
    assert.notEqual(findSeatType([[3, 2], [4, 3], [2, 3], [3, 4]], 2, 4), seatType.Middle);
  });
});