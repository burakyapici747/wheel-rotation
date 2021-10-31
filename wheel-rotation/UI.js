class UI {

    constructor(canvasColor, canvasWidth, canvasHeight, canvasId) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.canvasId = canvasId;
        this.canvasColor = canvasColor;
    }

    createCanvas() {
        let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext('2d');
        let arrow = document.getElementById('arrow');
        return [canvas,ctx,arrow];
    }

}