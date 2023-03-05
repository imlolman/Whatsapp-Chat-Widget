module.exports = {
    plugins: [
        [
            "@babel/plugin-transform-react-jsx",
            {
                pragma: "createElement"
            }
        ]
    ],
    presets: [
        "@babel/preset-env"
    ],
    comments: false
}