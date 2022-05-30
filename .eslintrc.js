module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    node: true,
    commonjs: true
  },
  extends: ['alloy'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true,
    __WECHAT__: true,
    __ALIPAY__: true,
    App: true,
    Page: true,
    Component: true,
    Behavior: true,
    wx: true,
    my: true,
    swan: true,
    getApp: true,
    getCurrentPages: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': 0,
    eqeqeq: 0,
    camelcase: 1,
    'prefer-const': 0,
    'no-var': 2,
    'prefer-promise-reject-errors': 0,
    'node/no-callback-literal': 0,
    'no-unused-vars': 1,
    'import/no-absolute-path': 1,
    'no-case-declarations': 1,
    'node/handle-callback-err': 1,
    'prefer-regex-literals': 0,
    'new-cap': 1,
    'promise/param-names': 1
  }
};
