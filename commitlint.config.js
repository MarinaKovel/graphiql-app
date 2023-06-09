module.exports = {
  extends: ['@commitlint/config-angular'],
  rules: {
    'header-max-length': [2, 'always', 72],
    'subject-case': [2, 'always', ['kebab-case']],
    'scope-case': [2, 'always', ['kebab-case']],
  },
};
