namespace TwoDeeSharp
{
    public class SpriteInstanceModel
    {
        public SpriteInstanceModel(SpriteInstanceData spriteInstanceData)
        {
            StartX = spriteInstanceData.StartX;
            StartY = spriteInstanceData.StartY;
            Index = spriteInstanceData.Index;
        }

        public int StartX { get; set; }
        public int StartY { get; set; }
        public int Index { get; set; }
    }
}