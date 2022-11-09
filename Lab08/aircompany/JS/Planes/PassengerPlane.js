const Plane = require('./Plane');

class PassengerPlane extends Plane {
    constructor(modelPlane, maxSpeed, maxFlightDistance, maxLoadCapacity, passengersCapacity) {
        super(modelPlane, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this.passengersCapacity = passengersCapacity;
    }
}

module.exports = PassengerPlane;