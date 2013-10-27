


function Game() {
    var canvasBgElement = document.getElementById('gameBG');
    var canvasSpritesElement = document.getElementById('gameSprites');
    var canvasFgElement = document.getElementById('gameFG');

    var screenModel=this.screenModel = new ScreenModel(canvasBgElement, canvasSpritesElement, canvasFgElement);


    window.addEventListener('resize',resizeCanvas, false);

    resizeCanvas();
    function resizeCanvas() {
        var w = window.innerWidth;
        var h = window.innerHeight;
        screenModel.canvasBgElement.width = w;
        screenModel.canvasBgElement.height = h;
        screenModel.canvasFgElement.width = w;
        screenModel.canvasFgElement.height = h;
        screenModel.canvasSpritesElement.width = w;
        screenModel.canvasSpritesElement.height = h;
    }

    this.currentGameView = new GameView(this.screenModel, new GameModel(window.FakeGameData[0]));


}


