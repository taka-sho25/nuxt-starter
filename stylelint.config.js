module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-config-recommended-vue',
    'stylelint-config-recommended-scss',
  ],
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    'selector-class-pattern': null,
    'selector-id-pattern': null,
    'selector-pseudo-class-no-unknown': null, // ::v-deepエラー回避
    'value-keyword-case': [
      'lower',
      {
        ignoreKeywords: [/(max|min)(Width|Height)/],
      },
    ],
    'media-feature-range-notation': 'prefix',
  },
};
