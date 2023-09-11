module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    jest: true,
  },
  plugins: ['prettier'],
  settings: {
    'import/core-modules': ['styled-jsx', 'styled-jsx/css'],
  },
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'no-plusplus': 'off',
    'no-nested-ternary': 'off',
    'import/extensions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'import/no-named-as-default': 'off',
    'react/forbid-prop-types': 'off',
    'import/no-unresolved': 'off',
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'react/require-default-props': 'off',
    'no-mixed-operators': 'off',
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js'],
      },
    ],
    'prefer-arrow-callback': 'error',
    'prettier/prettier': [
      'error',
      {
        "semi": false,
        "tabWidth": 2,
        "useTabs": false,
        "singleQuote": true,
        "trailingComma": "none",
        "jsxSingleQuote": true,
        "arrowParens": "avoid",
        "importOrder": [
          "<THIRD_PARTY_MODULES>",
          "^@/components/(.*)$",
          "^@/layout/(.*)$",
          "^@/ui/(.*)$",
          "^@/providers/(.*)$",
          "^@/shared/(.*)$",
          "^@/assets/(.*)$",
          "^@/config/(.*)$",
          "^@/store/(.*)$",
          "^@/hooks/(.*)$",
          "^@/types/(.*)$",
          "^@/utils/(.*)$",
          "^@/api/(.*)$",
          "^../(.*)$",
          "^./(.*)$"
        ],
        "importOrderSeparation": true,
        "importOrderSortSpecifiers": true,
        "plugins": ["@trivago/prettier-plugin-sort-imports"]
      }
    ],
  },
};
