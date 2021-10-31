import { wheelEnvironments, colorsEnum } from "./config.js";
class Wheel extends WheelHelpers {
    constructor(numberOfRect = 60, rectWidth = 18, rectHeight = 6, radius = 200, origin, canvas) {
        super();
        this.origin = origin;
        this.rectWidth = rectWidth;
        this.rectHeight = rectHeight;
        this.numberOfRect = numberOfRect;
        this.rectOfWheel = {};
        this.radius = radius;
        this.angle = 0;
        this.canvas = canvas[0];
        this.ctx = canvas[1];
        this.arrow = canvas[2];
        this.endAngle = 0;
        this.rndNumber = 0;
        this.rectRandomNumber = 0;
    }

    createWheel() {
        for (let rectNumber = 0; rectNumber < this.numberOfRect; rectNumber++) {
            if (wheelEnvironments["wheelColors"][colorsEnum.blue].indexOf(rectNumber) != -1) {
                this.rectOfWheel[rectNumber] = { cosx: ((this.rectCosCoordinate(this.angle))), siny: ((this.rectSinCoordinate(this.angle))), color: colorsEnum.blue, width: this.rectWidth, height: this.rectHeight, angle: this.angle };
            } else if (wheelEnvironments["wheelColors"][colorsEnum.red].indexOf(rectNumber) != -1) {
                this.rectOfWheel[rectNumber] = { cosx: ((this.rectCosCoordinate(this.angle))), siny: ((this.rectSinCoordinate(this.angle))), color: colorsEnum.red, width: this.rectWidth, height: this.rectHeight, angle: this.angle };
            } else if (wheelEnvironments["wheelColors"][colorsEnum.gray].indexOf(rectNumber) != -1) {
                this.rectOfWheel[rectNumber] = { cosx: ((this.rectCosCoordinate(this.angle))), siny: ((this.rectSinCoordinate(this.angle))), color: colorsEnum.gray, width: this.rectWidth, height: this.rectHeight, angle: this.angle };
            } else if (wheelEnvironments["wheelColors"][colorsEnum.yellow].indexOf(rectNumber) != -1) {
                this.rectOfWheel[rectNumber] = { cosx: ((this.rectCosCoordinate(this.angle))), siny: ((this.rectSinCoordinate(this.angle))), color: colorsEnum.yellow, width: this.rectWidth, height: this.rectHeight, angle: this.angle };
            }
            this.angle -= 6;
        }
    }
    convertToRadians(angle) {
        return angle * Math.PI / 180;
    }

    drawWheel() {
        for (let rectNumber = 0; rectNumber < this.numberOfRect; rectNumber++) {
            this.ctx.beginPath();
            this.ctx.fillStyle = this.rectOfWheel[rectNumber].color;
            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            this.ctx.transform(1, 0, 0, 1, 250, 250);
            this.ctx.transform(this.rectOfWheel[rectNumber].cosx, this.rectOfWheel[rectNumber].siny, -this.rectOfWheel[rectNumber].siny, this.rectOfWheel[rectNumber].cosx, 0, 0);
            this.ctx.transform(1, 0, 0, 1, 0, this.radius);
            this.ctx.fillRect(0, 0, 16, 6);
        }
    }

    getRotateDegres(obj) {
        var matrix = obj.css("-webkit-transform") ||
            obj.css("-moz-transform") ||
            obj.css("-ms-transform") ||
            obj.css("-o-transform") ||
            obj.css("transform");
        if (matrix !== 'none') {
            var values = matrix.split('(')[1].split(')')[0].split(',');
            var a = values[0];
            var b = values[1];
            var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
        } else { var angle = 0; }
        return (angle < 0) ? angle += 360 : angle;
    }

    changeColorToArrow() {

        if (wheelEnvironments["wheelColors"][colorsEnum.blue].indexOf(Math.floor(this.getRotateDegres($('#canvas')) / 6)) != -1) {
            this.arrow.style.color = "#44B4DA";
        } else if (wheelEnvironments["wheelColors"][colorsEnum.red].indexOf(Math.floor(this.getRotateDegres($('#canvas')) / 6)) != -1) {
            this.arrow.style.color = "#C8354F";
        } else if (wheelEnvironments["wheelColors"][colorsEnum.gray].indexOf(Math.floor(this.getRotateDegres($('#canvas')) / 6)) != -1) {
            this.arrow.style.color = "#545454";
        } else if (wheelEnvironments["wheelColors"][colorsEnum.yellow].indexOf(Math.floor(this.getRotateDegres($('#canvas')) / 6)) != -1) {
            this.arrow.style.color = "#DCA657";
        }

    }

    modAngle(){
        this.rndNumber =  this.rndNumber % 360;
        this.canvas.style.transform = `rotate(${this.rndNumber}deg)`;
        this.canvas.style.transition = "none";
    }

    spinWheel() {
        this.angle = (this.angle < 0) ? this.angle * -1 % 360 : this.angle;
        this.canvas.style.transition = "all 9s";
        this.rectRandomNumber = this.randomNumber(this.numberOfRect);
        this.rndNumber = this.rectRandomNumber * 6 + 720 + this.randomNumber(4);
        this.canvas.style.transform = `rotate(${this.rndNumber}deg)`;
    }

}

export { Wheel };