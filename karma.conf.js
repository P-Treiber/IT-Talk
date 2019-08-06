module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        files: [ 'src/*.spec.js'],
        plugins: ['karma-jasmine', 'karma-chrome-launcher', 'karma-webpack'],
        browsers: ['Chrome'],
        preprocessors: {'src/*.spec.js': ['webpack'] },
        autoWatch: true
    })
}