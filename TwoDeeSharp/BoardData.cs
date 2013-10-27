using System.Collections.Generic;

namespace TwoDeeSharp
{
    public class BoardData
    {
        public List<int> BgTiles { get; set; }
        public List<int> FgTiles { get; set; }
        public List<SpriteInstanceData> Sprites { get; set; }
        public int BoardWidth { get; set; }
        public int BoardHeight { get; set; }
        public string BoardName { get; set; }
    }
}