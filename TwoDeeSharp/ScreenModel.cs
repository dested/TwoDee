using System.Html;
using System.Html.Media.Graphics;

namespace TwoDeeSharp
{
    public class ScreenModel
    {
        public ScreenModel(CanvasElement canvasBgElement, CanvasElement canvasSpritesElement, CanvasElement canvasFgElement)
        {
            CanvasBgElement = canvasBgElement;
            CanvasSpritesElement = canvasSpritesElement;
            CanvasFgElement = canvasFgElement;


            CanvasBgCanvas = (CanvasRenderingContext2D) CanvasBgElement.GetContext("2d");
            CanvasSpritesCanvas = (CanvasRenderingContext2D) CanvasSpritesElement.GetContext("2d");
            CanvasFgCanvas = (CanvasRenderingContext2D) CanvasFgElement.GetContext("2d");
        }

        public CanvasElement CanvasBgElement { get; set; }
        public CanvasElement CanvasSpritesElement { get; set; }
        public CanvasElement CanvasFgElement { get; set; }
        public CanvasRenderingContext2D CanvasBgCanvas { get; set; }
        public CanvasRenderingContext2D CanvasSpritesCanvas { get; set; }
        public CanvasRenderingContext2D CanvasFgCanvas { get; set; }
    }
}