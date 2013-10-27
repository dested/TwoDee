using System.Collections.Generic;

namespace TwoDeeSharp
{
    public class GameData
    {
        public GameData()
        {
        }

        public List<string> Palette { get; set; }
        public List<TileData> Tiles { get; set; }
        public List<BoardData> Boards { get; set; }
        public List<SpriteData> Sprites { get; set; }
        public string Name { get; set; }
        public int TileWidth { get; set; }
        public int TileHeight { get; set; }
        public string Init { get; set; } //function string, should be evaled
        public string Tick { get; set; } //function string, should be evaled
    }
}