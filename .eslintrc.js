module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    browser: true,
    jasmine: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'arrow-body-style': 0,
    'global-require': 0,
    'import/no-unresolved': 0,
    'no-empty-pattern': 1,
    'no-extra-parens': 0,
    'no-unused-vars': 1,
    'no-console': 1,
    'linebreak-style': 0,
    'arrow-parens': 0,
    'no-mixed-operators': 0,
    'max-len': [
      'error',
      {
        code: 120,
      }
    ],
    'operator-linebreak': 0,
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],

    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/prop-types': 0,
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-max-props-per-line': 0,
    'react/no-array-index-key': 0,
    'react/no-unused-prop-types': 0,
    'react/self-closing-comp': 0,
    'react/no-did-mount-set-state': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-wrap-multilines': [
      'error',
      {
        logical: false,
      },
    ],
    'react/destructuring-assignment': 0,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-tag-spacing': [
      'error',
      {
        beforeClosing: 'allow',
      },
    ],
    'react/button-has-type': 0,
    'react/default-props-match-prop-types': 0,
    'react/sort-comp': [1, {
      order: [
        'static-methods',
        'instance-variables',
        'type-annotations',
        'lifecycle',
        'everything-else',
        'render',
      ],
    }],
    'react/no-unused-state': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'import/first': 0,
    'no-underscore-dangle': 0,
    'function-paren-newline': 0,
    'prefer-destructuring': [
      'error', {
        'VariableDeclarator': {
          'array': false,
          'object': true,
        },
        'AssignmentExpression': {
          'array': false,
          'object': false,
        },
      },
      {
        'enforceForRenamedProperties': false,
      },
    ],
    'no-param-reassign': [
      'error',
      {
        'props': true,
        'ignorePropertyModificationsFor': ['memo', 'result'],
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        'components': ['Link'],
        'specialLink': ['to'],
        'aspects': ['noHref', 'invalidHref', 'preferButton'],
      },
    ],

    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/prefer-interface': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
