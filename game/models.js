

function ScreenModel(canvasBgElement, canvasSpritesElement, canvasFgElement) {
    this.canvasBgElement = canvasBgElement;
    this.canvasBgCanvas = this.canvasBgElement.getContext('2d');
    this.canvasSpritesElement = canvasSpritesElement;
    this.canvasSpritesCanvas = this.canvasSpritesElement.getContext('2d');
    this.canvasFgElement = canvasFgElement;
    this.canvasFgCanvas = this.canvasFgElement.getContext('2d');
}

function GameModel(gameData) {
    this.name = gameData.name;
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
    this.bgTiles = boardData.bgTiles;
    this.fgTiles = boardData.fgTiles;
    this.sprites = boardData.sprites.map(function (s){return new SpriteDataModel(s)});
    this.boardWidth = boardData.boardWidth;
    this.boardHeight = boardData.boardHeight;
    this.boardName = boardData.boardName;
};

function SpriteDataModel(spriteData) {
    this.startX = spriteData.startX;
    this.startY = spriteData.startY;
    this.index = spriteData.index;
};

function SpriteModel(spriteData) {
    this.palette = spriteData.palette;
    this.pixels = spriteData.pixels;
    this.originX = spriteData.originX;
    this.originY = spriteData.originY;
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
    string[] palette //color strings
    TileData tiles[] 
    BoardData boards[];
    SpriteData sprites[];
    string name;
    int tileWidth;
    int tileHeight;
    string init;                //function string, should be evaled
    string tick;                //function string, should be evaled

class SpriteData
    Color[] palette
    int[] pixels                //2d array
    int originX;
    int originY;    
    int spriteWidth;
    int spriteHeight;
    string init;                //function string, should be evaled
    string tick;                //function string, should be evaled
    string destroy;             //function string, should be evaled
    string offload;             //function string, should be evaled
    string collideWithSprite;   //function string, should be evaled
    string collideWithTile;     //function string, should be evaled

class BoardData
    int[] bgTiles                 //2d array, tile index 
    int[] fgTiles                 //2d array, tile index 
    SpriteObject[] sprites        //2d array, sprite index
    int boardWidth
    int boardHeight
    string boardName

class SpriteObject
    int index;                  //sprite index
    int startX;
    int startY;

class TileData
    int[] pixels                //2d array
*/

window.FakeGameData = [];
window.FakeGameData[0] = {
    name: 'Game One',
    palette: ['red', 'blue'],
    tileWidth: 16,
    tileHeight: 16,
    tiles: [{
        pixels: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
                 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
                 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
                 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
                 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
                 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
                 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
                 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
                 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
                 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
                 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
                 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
                 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
                 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
                 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
                 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
    },
    {
        pixels: [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0,
                 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0,
                 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0,
                 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0,
                 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0,
                 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0,
                 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0,
                 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0,
                 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0,
                 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0,
                 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0,
                 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0,
                 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0,
                 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0,
                 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0,
                 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0]
    },
    {
        pixels: [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
                 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
                 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
                 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
                 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
                 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
                 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
                 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
                 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
                 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
                 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
                 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
                 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
                 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
                 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
                 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
    }],
    sprites: [],
    boards: [{
        bgTiles: [0, 1, 2, 0, 1,
                0, 1, 2, 1, 1,
                0, 0, 2, 1, 1,
                0, 1, 0, 0, 1,
                0, 1, 2, 0, 1],
        fgTiles: [0, 1, 2, 0, 1,
                0, 1, 2, 1, 1,
                0, 0, 2, 1, 1,
                0, 1, 0, 0, 1,
                0, 1, 2, 0, 1],
        boardWidth: 5,
        boardHeight: 5,
        boardName: 'First Level'
    }]
}