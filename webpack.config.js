const path = require('path');

module.exports = {
    entry: './src/bootstrap.ts',
    // mode: 'development',
    // optimization: {
	// 	// We no not want to minimize our code.
	// 	minimize: false
	// },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}