const path = require('path');

module.exports = {
   mode: 'development',
   entry: './src/index.ts',
   devtool: 'inline-source-map',
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
         },
         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            use: [
               {
                  loader: "raw-loader"
               }
            ]
         },
      ],
   },
   resolve: {
      extensions: ['.tsx', '.ts', '.js'],
   },
   output: {
      filename: 'script.js',
      path: path.resolve(__dirname, 'dist'),
   },
};