class WheelHelpers {

    radians(degrees) {
        return degrees * Math.PI / 180;
    }

    rectCosCoordinate(angle){
        return Math.cos(this.radians(angle));
    }

    rectSinCoordinate(angle){
        return Math.sin(this.radians(angle));
    }

    randomNumber(limit){
        return Math.floor((Math.random() * limit) + 1);
    }
}
