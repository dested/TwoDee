using System.Html;

namespace TwoDeeSharp
{
    public class Game
    {
        public Game()
        {
            var canvasBgElement = (CanvasElement) Document.GetElementById("gameBG");
            var canvasSpritesElement = (CanvasElement) Document.GetElementById("gameSprites");
            var canvasFgElement = (CanvasElement) Document.GetElementById("gameFG");

            ScreenModel = new ScreenModel(canvasBgElement, canvasSpritesElement, canvasFgElement);

            Window.AddEventListener("resize", resizeCanvas, false);
            resizeCanvas();

            CurrentGameView = new GameView(ScreenModel, new GameModel(StaticData.FakeGameData[0]));
        }

        public ScreenModel ScreenModel { get; set; }
        public GameView CurrentGameView { get; set; }

        private void resizeCanvas()
        {
            var w = (uint) Window.InnerWidth;
            var h = (uint) Window.InnerHeight;
            ScreenModel.CanvasBgElement.Width = w;
            ScreenModel.CanvasBgElement.Height = h;
            ScreenModel.CanvasFgElement.Width = w;
            ScreenModel.CanvasFgElement.Height = h;
            ScreenModel.CanvasSpritesElement.Width = w;
            ScreenModel.CanvasSpritesElement.Height = h;
        }
    }
}