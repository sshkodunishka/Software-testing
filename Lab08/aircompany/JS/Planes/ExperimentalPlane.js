const Plane = require('./Plane');

class ExperimentalPlane extends Plane
{
    constructor(modelPlane, maxSpeed, maxFlightDistance, maxLoadCapacity, experimentalPlaneType, classificationLevel)  {
        super(modelPlane, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this.experimentalPlaneType = experimentalPlaneType;
        this.classificationLevel = classificationLevel;
    }

}

module.exports = ExperimentalPlane