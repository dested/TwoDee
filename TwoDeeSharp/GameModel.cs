using System;
using System.Collections.Generic;

namespace TwoDeeSharp
{
    public class GameModel
    {
        public GameModel(GameData gameData)
        {
            Name = gameData.Name;
            Palette = gameData.Palette;
            TileWidth = gameData.TileWidth;
            TileHeight = gameData.TileHeight;
            Tiles = gameData.Tiles.Select(t => new TileModel(t));
            Boards = gameData.Boards.Select(t => new BoardModel(t));
            Sprites = gameData.Sprites.Select(t => new SpriteModel(t));

            Init = (Action) Script.Eval(Helper.FunctionFormat.FormatMe(gameData.Init));
            Tick = (Action) Script.Eval(Helper.FunctionFormat.FormatMe(gameData.Tick));
        }

        public List<string> Palette { get; set; }
        public List<TileModel> Tiles { get; set; }
        public List<BoardModel> Boards { get; set; }
        public List<SpriteModel> Sprites { get; set; }
        public string Name { get; set; }
        public int TileWidth { get; set; }
        public int TileHeight { get; set; }
        public Action Init { get; set; } //function string, should be evaled
        public Action Tick { get; set; } //function string, should be evaled
    }
}