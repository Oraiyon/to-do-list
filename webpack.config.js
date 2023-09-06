const path= require("path");
const HtmlWebpackPlugin= require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src/main.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundled.js",
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
        }],
    },
    plugins: [
        new HtmlWebpackPlugin ({
            title: "To-Do List",
            filename: "index.html",
            template: "src/template.html",
        }),
    ],
};