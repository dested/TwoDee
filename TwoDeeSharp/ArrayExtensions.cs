using System;
using System.Collections.Generic;

namespace TwoDeeSharp
{
    public static class ArrayExtensions
    {
        public static T First<T>(this List<T> elements, Func<T, bool> conditional)
        {
            foreach (var element in elements)
            {
                if (conditional(element))
                {
                    return element;
                }
            }
            return default(T);
        }

        public static List<T2> Select<T, T2>(this List<T> elements, Func<T, T2> conditional)
        {
            var ts = new List<T2>();

            foreach (var element in elements)
            {
                ts.Add(conditional(element));
            }
            return ts;
        }
    }
}