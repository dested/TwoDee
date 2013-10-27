window.Helper = {
    functionFormat: 'function(){{0}};',
    canvasWrapper: function () {
        var args = Array.prototype.slice.call(arguments);
        var canvases = args.last(args.length - 1);
        var canvase, i;
        for (i = 0; i < canvases.length; i++) {
            canvase = canvases[i];
            canvase.save();
        }

        args[0].apply(undefined, canvases);

        for (i = 0; i < canvases.length; i++) {
            canvase = canvases[i];
            canvase.restore();
        }
    },
    requestAnimFrame: (function () {
        return window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
                function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
    })(),
    canvasDraw: function (render) {
        var animloop;
        (animloop = function  () {
            Helper.requestAnimFrame.call(window,animloop);
            render();
        })();
    },
};

String.prototype.format = function () {
    var formatted = this;
    for (arg in arguments) {
        formatted = formatted.replace("{" + arg + "}", arguments[arg]);
    }
    return formatted;
};

/*!
  * domready (c) Dustin Diaz 2012 - License MIT
  */
!function (e, t) { typeof module != "undefined" ? module.exports = t() : typeof define == "function" && typeof define.amd == "object" ? define(t) : this[e] = t() }("domready", function (e) { function p(e) { h = 1; while (e = t.shift()) e() } var t = [], n, r = !1, i = document, s = i.documentElement, o = s.doScroll, u = "DOMContentLoaded", a = "addEventListener", f = "onreadystatechange", l = "readyState", c = o ? /^loaded|^c/ : /^loaded|c/, h = c.test(i[l]); return i[a] && i[a](u, n = function () { i.removeEventListener(u, n, r), p() }, r), o && i.attachEvent(f, n = function () { /^c/.test(i[l]) && (i.detachEvent(f, n), p()) }), e = o ? function (n) { self != top ? h ? n() : t.push(n) : function () { try { s.doScroll("left") } catch (t) { return setTimeout(function () { e(n) }, 50) } n() }() } : function (e) { h ? e() : t.push(e) } })




domready(function () {
    new Game();
});
