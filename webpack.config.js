const path = require("path");
const webpack = require("webpack")

module.exports = {
    entry: "./src/renderer/index.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "renderer.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new webpack.ProvidePlugin({
            PIXI: "pixi.js",
        })
    ],
    mode: "development",
};
