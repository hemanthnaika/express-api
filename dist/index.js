"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
var port = process.env.PORT || 3001;
app.get("/", function (req, res) {
  return res.type('html').send(html);
});
app.listen(port, function () {
  return console.log("Example app listening on port ".concat(port, "!"));
});
var html = "\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>Hello from Render!</title>\n    <script src=\"https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js\"></script>\n    <script>\n      setTimeout(() => {\n        confetti({\n          particleCount: 100,\n          spread: 70,\n          origin: { y: 0.6 },\n          disableForReducedMotion: true\n        });\n      }, 500);\n    </script>\n    <style>\n      @import url(\"https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css\");\n      @font-face {\n        font-family: \"neo-sans\";\n        src: url(\"https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"opentype\");\n        font-style: normal;\n        font-weight: 700;\n      }\n      html {\n        font-family: neo-sans;\n        font-weight: 700;\n        font-size: calc(62rem / 16);\n      }\n      body {\n        background: white;\n      }\n      section {\n        border-radius: 1em;\n        padding: 1em;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin-right: -50%;\n        transform: translate(-50%, -50%);\n      }\n    </style>\n  </head>\n  <body>\n    <section>\n      Hello from Render!\n    </section>\n  </body>\n</html>\n";