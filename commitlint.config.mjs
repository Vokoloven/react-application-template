export default {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(feature|fix|hotfix)\/TFS-(\d{5}):(.*)$|^(hotfix):(.*)$/,
      headerCorrespondence: ['type', 'ticket', 'subject'],
      issuePrefixes: ['TFS-']
    }
  },
  rules: {
    'type-enum': [2, 'always', ['feature', 'fix', 'hotfix']],
    'header-max-length': [2, 'always', 100]
  },
  plugins: [
    {
      rules: {
        'type-empty': ({ type }) => {
          if (!type) {
            return [
              false,
              'Commit message must start with "feature/", "fix/", or "hotfix/". Example: "feature/TFS-123456: Implement new feature"'
            ];
          }
          return [true];
        },
        'subject-empty': ({ subject }) => {
          if (!subject || subject.trim() === '') {
            return [
              false,
              'Commit message must include a description after the issue number. Example: "fix/TFS-123456: Fixed login bug"'
            ];
          }
          return [true];
        }
      }
    }
  ],
  helpUrl: 'http://here-should-be-correct-url'
};
