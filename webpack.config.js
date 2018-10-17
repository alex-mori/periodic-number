module.exports = {
    entry: './src/js/view.js',
    output: {
        filename: './convertion.boundle.js'
    },
    module: {
        rules:[
            {test: /\.scss$/, use: ['style-loader','css-loader', 'sass-loader']},
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}