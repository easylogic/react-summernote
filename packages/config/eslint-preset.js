module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', project: ['./tsconfig.json'] },
  plugins: ['@typescript-eslint', 'react-refresh', 'filenames', 'check-file'],
  globals: {
    JSX: 'readonly',
  },
  rules: {
    camelcase: 0,
    'jsx-a11y/anchor-is-valid': 0,
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'lodash',
            message: 'Please use lodash-es/something instead.',
          },
          {
            name: 'lodash-es',
            message: 'Please use lodash-es/something instead.',
          },
        ],
      },
    ],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignoreTrailingComments: true,
        ignoreComments: true,
      },
    ],
    'react/require-default-props': 0,
    'object-curly-spacing': ['error', 'always'],

    'space-before-function-paren': ['off'],
    // 커스텀 규칙 -> https://wiki.navercorp.com/pages/viewpage.action?pageId=705594090
    // export default 대상과 파일명을 동일하게 맞춥니다.
    'filenames/match-exported': ['error'],
    // 디렉터리는 kebab-case로 표기합니다.
    'check-file/folder-naming-convention': [
      'error',
      {
        'src/!(__tests__)/': 'KEBAB_CASE',
      },
    ],
    'check-file/folder-match-with-fex': [
      'error',
      {
        '*.test.ts': '**/__tests__/',
        '*.test.tsx': '**/__tests__/',
      },
    ],
    // 함수의 이름은 반드시 선언해야 합니다.
    'func-names': ['error', 'as-needed'],

    // index 사용을 강제해보려고 넣은 규칙.
    // 패키지명이 react-dom/client인 경우 규칙에 안 걸리게 하려고 */*을 allow에 추가함.
    'import/no-internal-modules': ['error', { allow: ['**/*/*.@(svg|css|scss)', '*/*'] }],
    // Airbnb Rule 제외
    'no-confusing-arrow': ['off'],
    'wrap-iife': ['off'],
    'import/extensions': ['off'],
    'import/prefer-default-export': ['off'],
    'react/react-in-jsx-scope': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/jsx-one-expression-per-line': ['off'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-curly-newline': 0,
    'react/prop-types': ['off'],
    semi: ['off'],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: { consistent: true, multiline: true },
        ObjectPattern: { consistent: true, multiline: true },
        ImportDeclaration: { multiline: true },
        ExportDeclaration: { multiline: true },
      },
    ],
    'implicit-arrow-linebreak': ['off'],
    'function-paren-newline': ['off'],
    'react/jsx-tag-spacing': ['off'],
    // RTK의 리듀서 안에서 state를 mutable 하게 조작할 수 있게 허용하는 설정.
    // Immer의 produce 함수 안에서 state를 mutable 하게 조작할 수 있게 대상 상태명 설정
    // https://redux-toolkit.js.org/usage/immer-reducers#linting-state-mutations
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state', 'draft'] }],
    // prettier가 할 수 있는 일은 prettier에게 맡기자
    indent: ['off'],
    'operator-linebreak': ['off'],
    'func-call-spacing': ['off'],
    'no-spaced-func': ['off'],
    'react/jsx-wrap-multilines': ['off'],
    curly: ['error', 'all'],
    'no-console': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/comma-dangle': ['off'],
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-empty-interface': ['off'],
    // !를 사용하지 않습니다.
    '@typescript-eslint/no-non-null-assertion': 'error',
    // boolean 타입 변수에 동사를 붙이지 않습니다.
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['camelCase'],
        custom: {
          regex: '^(is|has|should|has|can|did|will)[A-Z]([A-Za-z0-9]?)+',
          match: false,
        },
      },
      // Enum 프로퍼티는 대문자 + 스네이크 표기법을 따릅니다. (값은 제어할 수 없음)
      {
        selector: 'enumMember',
        format: ['UPPER_CASE'],
      },
      // 타입은 파스칼 케이스
      { selector: 'typeLike', format: ['PascalCase'] },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
