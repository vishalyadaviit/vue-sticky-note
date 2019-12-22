module.exports = {
    parser: "babel-eslint",
    rules: {
        'no-console': 'off',
    },
    extends: [
        // add more generic rulesets here, such as:
        'eslint:recommended',
        // 'plugin:vue/recommended'
    ],
    env: {
        "es6": true,
        "node": true,
        "browser": true
    },
    parserOptions: {
        "sourceType": "module"
    }
};