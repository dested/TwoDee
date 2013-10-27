namespace TwoDeeSharp
{
    public static class StringExtensions
    {
        public static string FormatMe(this string str, params string[] values)
        {
            return string.Format(str, values);
        }
    }
}