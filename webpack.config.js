const path = require("path");

module.exports = {
    entry: './src/index.ts',
    mode: "development",
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts','.js'],
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist')
    }
}
