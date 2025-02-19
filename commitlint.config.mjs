export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-match': [2, 'always'],
    'type-enum': [0],
    'scope-case': [0],
    'subject-case': [0]
  }
};
