// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ["plugin:vue/essential", "airbnb-base"],
  // required to lint *.vue files
  plugins: ["vue"],
  // check if imports actually resolve
  settings: {
    "import/resolver": {
      webpack: {
        config: "build/webpack.base.conf.js",
      },
    },
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        vue: "never",
      },
    ],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: [
          "state", // for vuex state
          "acc", // for reduce accumulators
          "e", // for e.returnvalue
        ],
      },
    ],
    indent: ["error", 4],
    // allow optionalDependencies
    "import/no-extraneous-dependencies": [
      "error",
      {
        optionalDependencies: ["test/unit/index.js"],
      },
    ],
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "comma-dangle": ["error", "never"],
    "import/no-unresolved": 0,
    "no-param-reassign": 0,
    "func-names": 0,
    "import/prefer-default-export": 0,
    "import/first": 0,
    "no-plusplus": 0,
    "no-unused-expressions": 0,
    "space-before-function-paren": 0,
    "no-mixed-operators": 0,
    "max-len": 0,
    "no-underscore-dangle": 0,
    "no-console": ["error", { allow: ["warn", "error", "log"] }],
  },
};
