const Plane = require('./Plane');

class MilitaryPlane extends Plane {

    constructor(modelPlane, maxSpeed, maxFlightDistance, maxLoadCapacity, militaryType) {
        super(modelPlane, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this.militaryType = militaryType;
    }
}

module.exports = MilitaryPlane;