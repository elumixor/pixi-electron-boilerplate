// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process unless
// nodeIntegration is set to true in webPreferences.
// Use preload.js to selectively enable features
// needed in the renderer process.
import * as PIXI from "pixi.js";

const app = new PIXI.Application({
    width: 640,
    height: 320,
    autoDensity: true,
});

document.body.appendChild(app.view);

for (const side of ["left", "top", "right", "bottom"]) {
    const resizeDiv = document.createElement("div");
    resizeDiv.classList.add("resize-div", side);
    console.log(resizeDiv);
    document.body.appendChild(resizeDiv);
}

function resize() {
    app.view.height = innerHeight;
    app.view.width = innerWidth;
    app.renderer.resize(innerWidth, innerHeight);
}

addEventListener("resize", resize);
addEventListener("load", resize);

resize();
