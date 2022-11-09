const PassengerPlane = require('./Planes/PassengerPlane');
const MilitaryPlane = require('./Planes/MilitaryPlane');
const MilitaryType = require('./models/MilitaryType');
const ExperimentalPlane = require('./Planes/experimentalPlane');

class Airport {

    constructor(planes) {
        this.planes = planes;
    }

    getPassengerPlanes() {
        const passengerPlanes = this.planes.filter(plane => plane instanceof PassengerPlane)
        return passengerPlanes;
    }

    getMilitaryPlanes() {
        const militaryPlanes = this.planes.filter(plane => plane instanceof MilitaryPlane)
        return militaryPlanes;
    }

    getPassengerPlaneWithMaxPassengersCapacity() {
        const passengerPlanes = this.getPassengerPlanes();
        let planeWithMaxCapacity = passengerPlanes[0];
        passengerPlanes.forEach(passengerPlane => {
            if (passengerPlane.passengersCapacity > planeWithMaxCapacity.passengersCapacity) {
                planeWithMaxCapacity = passengerPlane;
            }
        });
        return planeWithMaxCapacity;
    }

    getTransportMilitaryPlanes() {
        let militaryPlanes = this.getMilitaryPlanes();
        const transportMilitaryPlanes = militaryPlanes.filter(militaryPlane => 
            militaryPlane.militaryType === MilitaryType.TRANSPORT)
        return transportMilitaryPlanes;
    }

    getBomberMilitaryPlanes() {
        let militaryPlanes = this.getMilitaryPlanes();
        const bomberMilitaryPlanes = militaryPlanes.filter(militaryPlane => 
            militaryPlane.militaryType === MilitaryType.BOMBER)
        return bomberMilitaryPlanes;
    }

    getExperimentalPlanes() {
        const experimentalPlanes = this.planes.filter(plane => plane instanceof ExperimentalPlane)
        return experimentalPlanes;
    }

    sortPlanesByMaxDistance() {
        this.planes.sort((firstPlane, secondPlane) =>
            (firstPlane.maxFlightDistance > secondPlane.maxFlightDistance) ? 1 : -1);
    }

    sortPlanesByMaxSpeed() {
        this.planes.sort((firstPlane, secondPlane) =>
            (firstPlane.maxSpeed > secondPlane.maxSpeed) ? 1 : -1);
    }

    sortPlanesByMaxLoadCapacity() {
        this.planes.sort((firstPlane, secondPlane) =>
            (firstPlane.maxLoadCapacity > secondPlane.maxLoadCapacity) ? 1 : -1);
    }

    static printPlanes(planes) {
        return JSON.stringify(planes, null, 2);
    }
}

module.exports = Airport;
