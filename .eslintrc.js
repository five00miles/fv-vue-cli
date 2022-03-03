module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    wx: 'readonly',
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": ["error", {
      semi: false,
      tabWidth: 2,
      singleQuote: true
    }]
  },
};
