const OpenBrowserPlugin = require("open-browser-webpack-plugin");

module.exports = {
    publicPath: "./",

    configureWebpack: {
        devtool: "source-map",
        plugins: [new OpenBrowserPlugin({ url: "http://localhost:8080" })],
    },
};
