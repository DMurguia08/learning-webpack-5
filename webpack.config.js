const path = require('path')

module.exports = (env) => {
    //* The CLI command would be:
    // npx webpack --env goal=local --env production --progress
    //* User env.<YOUR_VARIABLE> here:
    console.log('Goal: ', env.goal)
    console.log('Production: ', env.production)

    return {
        entry: './src/index.js',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
        },
    }
}