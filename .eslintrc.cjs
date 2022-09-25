/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    root: true,
    extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/eslint-config-typescript"],
    parserOptions: {
        ecmaVersion: "latest",
    },
    env: {
        node: true,
        browser: true,
        es6: true,
    },
    rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "vue/multi-word-component-names": "off",
        "no-unused-vars": "off",
    },
};
