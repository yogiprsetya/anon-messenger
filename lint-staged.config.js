module.exports = {
  'src/**/*.(ts|tsx|js)': ['eslint --fix', 'prettier --write'],
  'src/**/*.(md|json)': 'prettier --write',
  'src/**/*.scss': 'stylelint --fix'
};
