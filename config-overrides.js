const path = require('path');

const {
  override,
  disableEsLint,
  addWebpackAlias,
} = require('customize-cra');

module.exports = override(
  disableEsLint(),
  addWebpackAlias({
    '~': path.resolve(__dirname, 'src'),
  }),
);
