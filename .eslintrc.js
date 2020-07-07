module.exports = {
  root: true,
  env: {
    // this section will be used to determine which APIs are available to us
    node: true
  },
  extends: [
    // use the recommended rule set for both plain javascript and vue
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    // we should always disable console logs and debugging in production
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
};
