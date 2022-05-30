module.exports = {
  '*.js': ['prettier --config .prettierrc --write', 'eslint --fix --ext .js'],
  '*.json': 'prettier --config .prettierrc --write'
};
