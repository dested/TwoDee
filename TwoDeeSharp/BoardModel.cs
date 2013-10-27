using System.Collections.Generic;

namespace TwoDeeSharp
{
    public class BoardModel
    {
        public BoardModel(BoardData tileData)
        {
            BgTiles = tileData.BgTiles;
            FgTiles = tileData.FgTiles;
            Sprites = tileData.Sprites.Select(s => new SpriteInstanceModel(s));
            BoardWidth = tileData.BoardWidth;
            BoardHeight = tileData.BoardHeight;
            BoardName = tileData.BoardName;
        }

        public List<int> BgTiles { get; set; }
        public List<int> FgTiles { get; set; }
        public List<SpriteInstanceModel> Sprites { get; set; }
        public int BoardWidth { get; set; }
        public int BoardHeight { get; set; }
        public string BoardName { get; set; }
    }
}