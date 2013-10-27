using System.Html;

namespace TwoDeeSharp
{
    internal class Program
    {
        private static void Main()
        {
            Window.OnLoad = (e) => { new Game(); };
        }
    }
}