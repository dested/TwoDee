using System;
using System.Html;
using System.Html.Media.Graphics;

namespace TwoDeeSharp
{
    public static class Helper
    {
        public static string FunctionFormat = "(function(){{{0}}})";

        /*
                public delegate void CanvasRenderer(params CanvasRenderingContext2D[] canvases);
                public static void CanvasWrapper(CanvasRenderer renderer, params CanvasRenderingContext2D[] canvases)
                {
                    foreach (var canvasRenderingContext2D in canvases)
                    {
                        canvasRenderingContext2D.Save();
                    }

                    renderer(canvases);

                    foreach (var canvasRenderingContext2D in canvases)
                    {
                        canvasRenderingContext2D.Restore();
                    }
                }
        */

        public static void CanvasWrapper(Action<CanvasRenderingContext2D> renderer, CanvasRenderingContext2D canvas)
        {
            canvas.Save();
            renderer(canvas);
            canvas.Restore();
        }

        public static void CanvasWrapper(Action<CanvasRenderingContext2D, CanvasRenderingContext2D> renderer, CanvasRenderingContext2D canvas1, CanvasRenderingContext2D canvas2)
        {
            canvas1.Save();
            canvas2.Save();
            renderer(canvas1, canvas2);
            canvas1.Restore();
            canvas2.Restore();
        }

        public static void RequestAnimFrame(Function render)
        {
            Window.SetTimeout(render, 1000/60);
        }

        public static void CanvasDraw(Action render)
        {
            Action happen = null;
            happen = () =>
                     {
                         RequestAnimFrame((Function) happen);
                         render();
                     };
            happen();
        }
    }
}