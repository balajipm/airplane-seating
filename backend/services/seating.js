const seatType = {
  Window: 'window',
  Aisle: 'aisle',
  Middle: 'middle'
}

const getSeating = (seating2DArray, noOfPassengers) => {
  const seatingList = refractorSeating2DArray(seating2DArray);
  const seatingListWithPassgeners = fillPassengers(seatingList, noOfPassengers);
  return seatingListWithPassgeners;
}

const findSeatType = (seating2DArray, blockNumber, columnNumber) => {
  lastBlockNumber = seating2DArray.length;
  lastColumnOfLastBlock = seating2DArray[seating2DArray.length - 1][0];
  lastColumnOfCurrentBlock = seating2DArray[blockNumber - 1][0];
  if ((blockNumber === 1 && columnNumber === 1) || (blockNumber === lastBlockNumber && columnNumber === lastColumnOfLastBlock)) {
    return seatType.Window
  } else if (columnNumber === 1 || columnNumber === lastColumnOfCurrentBlock) {
    return seatType.Aisle
  } else {
    return seatType.Middle
  }
}


const refractorSeating2DArray = (seating2DArray) => {
  let seating = {};
  seatingList = [];
  seating2DArray.map((block, blockIndex) => {
    const column = block[0];
    const row = block[1];
    Array(row).fill().map((_, rowIndex) => {
      Array(column).fill().map((_, columnIndex) => {
        blockNumber = blockIndex + 1
        rowNumber = rowIndex + 1
        columnNumber = columnIndex + 1
        let seat = {
          seatno: parseFloat(`${rowNumber}${blockNumber}${columnNumber}`),
          blockNumber,
          rowNumber,
          columnNumber,
          seatType: findSeatType(seating2DArray, blockNumber, columnNumber),
          passgenerNo: 0
        }
        seatingList.push(seat);
      })
    })
  });
  return seatingList.sort((a, b) => a.seatno - b.seatno);
}

const fillPassengers = (seatingList, noOfPassengers) => {
  let passengersFilledCount = 0;
  let filledSeatingList = [];
  seatingList.filter(seat => seat.seatType === seatType.Aisle).map((seat) => {
    seat.passgenerNo = ++passengersFilledCount;
    filledSeatingList.push(seat);
  });
  seatingList.filter(seat => seat.seatType === seatType.Window).map((seat) => {
    seat.passgenerNo = ++passengersFilledCount;
    filledSeatingList.push(seat);
  });
  seatingList.filter(seat => seat.seatType === seatType.Middle).map((seat) => {
    seat.passgenerNo = ++passengersFilledCount;
    filledSeatingList.push(seat);
  });
  filledSeatingList = filledSeatingList.map((seat) => {
    if (seat.passgenerNo > noOfPassengers) {
      seat.passgenerNo = 0;
    }
    return seat;
  });
  return filledSeatingList.sort((a, b) => a.seatno - b.seatno);
}

module.exports = {
  getSeating
}