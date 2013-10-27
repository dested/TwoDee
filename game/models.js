

function ScreenModel(canvasBgElement, canvasSpritesElement, canvasFgElement) {
    this.canvasBgElement = canvasBgElement;
    this.canvasBgCanvas = this.canvasBgElement.getContext('2d');
    this.canvasSpritesElement = canvasSpritesElement;
    this.canvasSpritesCanvas = this.canvasSpritesElement.getContext('2d');
    this.canvasFgElement = canvasFgElement;
    this.canvasFgCanvas = this.canvasFgElement.getContext('2d');
}

function GameModel(gameData) {
    this.palette = gameData.palette;
    this.tiles = gameData.tiles.map(function (t) { return new TileModel(t); });
    this.boards = gameData.boards.map(function (b) { return new BoardModel(b); });
    this.tileWidth = gameData.tileWidth;
    this.tileHeight = gameData.tileHeight;
    this.init = eval(Helper.functionFormat.format(gameData.init));
    this.tick = eval(Helper.functionFormat.format(gameData.tick));

};

function TileModel(tileData) {
    this.pixels = tileData.pixels;
};

function BoardModel(boardData) {
    this.tiles = boardData.tiles;
    this.boardWidth = boardData.boardWidth;
    this.boardHeight = boardData.boardHeight;
    this.boardName = boardData.boardName;
};

function SpriteModel(spriteData) {
    this.palette = spriteData.palette;
    this.pixels = spriteData.pixels;
    this.spriteWidth = spriteData.spriteWidth;
    this.spriteHeight = spriteData.spriteHeight;
    this.init = eval(Helper.functionFormat.format(spriteData.init));
    this.tick = eval(Helper.functionFormat.format(spriteData.tick));
    this.destroy = eval(Helper.functionFormat.format(spriteData.destroy));
    this.offload = eval(Helper.functionFormat.format(spriteData.offload));
    this.collideWithSprite = eval(Helper.functionFormat.format(spriteData.collideWithSprite));
    this.collideWithTile = eval(Helper.functionFormat.format(spriteData.collideWithTile));
};

/*
class GameData
    Color[] palette
    TileData tiles[] 
    BoardData boards[];
    SpriteData sprites[];
    int tileWidth;
    int tileHeight;
    string init;                //function string, should be evaled
    string tick;                //function string, should be evaled

class SpriteData
    Color[] palette
    int[] pixels                //2d array
    int spriteWidth;
    int spriteHeight;
    string init;                //function string, should be evaled
    string tick;                //function string, should be evaled
    string destroy;             //function string, should be evaled
    string offload;             //function string, should be evaled
    string collideWithSprite;   //function string, should be evaled
    string collideWithTile;     //function string, should be evaled

class BoardData
    int[] tiles                 //2d array, tile index 
    int boardWidth
    int boardHeight
    string boardName

class TileData
    int[] pixels                //2d array
*/