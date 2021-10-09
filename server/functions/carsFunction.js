/* eslint-disable eqeqeq */
let cars = require('../model/cars.json');

function getCars() {
  return cars;
}

function changeCar(carID, carStatus) {
  const newCar = cars.find((el) => el.id == carID);
  newCar.status = carStatus;
  return newCar;
}

function deleteCar(carID) {
  const delCar = cars.find((el) => el.id == carID);
  if (delCar) {
    cars = cars.filter((el) => el.id != carID);
  }
  return `Car with the ID ${carID} has been deleted`;
}

function postCar(c) {
  const newCar = c;
  const maxID = Math.max(...cars.map((el) => el.id)) + 1;
  newCar.id = maxID;
  cars.push(newCar);
  return newCar;
}
//

function getCarsByID(id) {
  if (id) {
    const carbyid = cars.find((el) => el.id == id);
    if (carbyid) {
      return carbyid;
    }
  }
  return `Car with the ID ${id} was not found`;
}

function getCarsByName(query) {
  const { firstName, lastName } = query;
  if (firstName && lastName) {
    // eslint-disable-next-line max-len
    const carbyname = cars.find((el) => el.owner.firstName == firstName && el.owner.lastName == lastName);
    if (carbyname) {
      return carbyname;
    }
  }
  return `Car with the owner ${firstName} ${lastName} was not found`;
}

module.exports = { getCars, changeCar, deleteCar, postCar, getCarsByID, getCarsByName };
