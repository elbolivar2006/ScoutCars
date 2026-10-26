module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', 'webpack'],

    
    files: [
      'src/**/*.spec.jsx',
      'src/**/*.spec.js'
    ],

   
    preprocessors: {
      'src/**/*.spec.jsx': ['webpack', 'sourcemap'],
      'src/**/*.spec.js': ['webpack', 'sourcemap']
    },

    
    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                  ['@babel/preset-react', { runtime: 'automatic' }]
                ]
              }
            }
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx']
      }
    },

    plugins: [
      'karma-jasmine',
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-chrome-launcher'
    ],

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    concurrency: Infinity
  });
};