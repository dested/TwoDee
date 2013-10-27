 

function EditGameView(screenModel, gameModel) {
    this.init = function () {

    };
    this.tick = function () {

    };
    this.render = function () {
        Helper.canvasWrapper(function (canvas) {
            canvas.fillStyle = 'red';
            canvas.fillRect(100, 100, 200, 200);
        }, screenModel.canvasBgCanvas);
        Helper.canvasWrapper(function (canvas) {
            canvas.fillStyle = 'blue';
            canvas.fillRect(300, 300, 200, 200);
        }, screenModel.canvasSpritesCanvas);
        Helper.canvasWrapper(function (canvas) {
            canvas.fillStyle = 'green';
            canvas.fillRect(500, 500, 200, 200);
        }, screenModel.canvasFgCanvas);
    };

    Helper.canvasDraw(this.render);
}
