using System.Collections.Generic;
using System.Html.Media.Graphics;

namespace TwoDeeSharp
{
    public class TileModel
    {
        public TileModel(TileData tileData)
        {
            Pixels = tileData.Pixels;
        }

        public List<int> Pixels { get; set; }

        public void Render(CanvasRenderingContext2D canvas)
        {
        }
    }
}