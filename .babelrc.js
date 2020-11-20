module.exports = {
    "presets": ["@babel/preset-env", "@babel/preset-react"],
    "plugins": [
        [
            "@babel/plugin-transform-runtime",
            {
                "corejs": false,
                "regenerator": true
            }
        ],
        [
            "react-css-modules"
        ],
        [
            "transform-class-properties"
        ]
    ]
}