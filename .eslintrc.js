var OFF = 0,
  WARN = 1,
  ERROR = 2;

module.exports = exports = {
  env: {
    es6: true,
  },

  ecmaFeatures: {
    // env=es6 doesn't include modules, which we are using
    modules: true,
  },

  extends: 'eslint:recommended',

  rules: {
    // Possible Errors (overrides from recommended set)
    'no-extra-parens': ERROR,
    'no-unexpected-multiline': ERROR,
    // Best Practices

    // Allowed a getter without setter, but all setters require getters
    'accessor-pairs': [
      ERROR,
      {
        getWithoutSet: false,
        setWithoutGet: true,
      },
    ],
    'block-scoped-var': WARN,
    'consistent-return': ERROR,
    curly: ERROR,
    'default-case': WARN,
    
    // Produce warnings when something is commented as TODO or FIXME
    'no-warning-comments': [
      WARN,
      {
        terms: ['TODO', 'FIXME'],
        location: 'start',
      },
    ],
    // Strict Mode - for ES6, never use strict.
    strict: [ERROR, 'never'],

    // Variables
    'init-declarations': [ERROR, 'always'],
    'no-catch-shadow': WARN,
    'no-delete-var': ERROR,
    'no-label-var': ERROR,
    'no-shadow-restricted-names': ERROR,
    'no-shadow': WARN,
    // We require all vars to be initialized (see init-declarations)
    // If we NEED a var to be initialized to undefined, it needs to be explicit
    'no-undef-init': OFF,
    'no-undef': ERROR,
    'no-undefined': OFF,
    'no-unused-vars': WARN,
    // Disallow hoisting - let & const don't allow hoisting anyhow
    'no-use-before-define': ERROR,

    // Node.js and CommonJS
    'global-require': OFF,
    'handle-callback-err': WARN,
    'no-mixed-requires': WARN,
    'no-new-require': ERROR,
    // Use path.concat instead
    'no-path-concat': ERROR,
    'no-process-exit': ERROR,
    'no-restricted-modules': OFF,
    'no-sync': WARN,

    // ECMAScript 6 support
    'arrow-body-style': [ERROR, 'always'],
    'arrow-parens': [ERROR, 'always'],
    'arrow-spacing': [ERROR, { before: true, after: true }],
    'constructor-super': ERROR,
    'generator-star-spacing': [ERROR, 'before'],
    'no-arrow-condition': ERROR,
    'no-class-assign': ERROR,
    'no-const-assign': ERROR,
    'no-dupe-class-members': ERROR,
    'no-this-before-super': ERROR,
    'no-var': WARN,
    'object-shorthand': [WARN, 'never'],
    'prefer-arrow-callback': WARN,
    'prefer-spread': WARN,
    'prefer-template': WARN,
    'require-yield': ERROR,

    // Stylistic - everything here is a warning because of style.
    'array-bracket-spacing': [WARN, 'always'],
    'block-spacing': [WARN, 'always'],
    'brace-style': [WARN, '1tbs', { allowSingleLine: false }],
    // camelcase: WARN,
    'comma-spacing': [WARN, { before: false, after: true }],
    'comma-style': [WARN, 'last'],
    'computed-property-spacing': [WARN, 'never'],
    'consistent-this': [WARN, 'self'],
    'eol-last': WARN,
    'func-names': WARN,
    'func-style': [WARN, 'declaration'],
    'id-length': [WARN, { min: 2, max: 32 }],
    indent: [WARN, 4],

    'linebreak-style': [WARN, 'unix'],
    'lines-around-comment': [WARN, { beforeBlockComment: true }],
    'max-depth': [WARN, 8],
    'max-len': [WARN, 132],
    'max-nested-callbacks': [WARN, 8],
    'max-params': [WARN, 8],
    'new-cap': WARN,
    'new-parens': WARN,

    'no-bitwise': OFF,
    'no-continue': OFF,
    'no-inline-comments': OFF,
    'no-lonely-if': WARN,
    'no-mixed-spaces-and-tabs': WARN,
    'no-multiple-empty-lines': WARN,
    'no-negated-condition': OFF,
    'no-nested-ternary': WARN,
    'no-new-object': WARN,
    'no-plusplus': OFF,
    'no-spaced-func': WARN,
    'no-ternary': OFF,
    'no-trailing-spaces': WARN,
    'no-underscore-dangle': WARN,
    'no-unneeded-ternary': WARN,
    'object-curly-spacing': [WARN, 'always'],
    'one-var': OFF,
    'operator-assignment': [WARN, 'never'],
    'operator-linebreak': [WARN, 'after'],
    'padded-blocks': [WARN, 'never'],
    'quote-props': [WARN, 'consistent-as-needed'],
    quotes: [WARN, 'single'],
    'require-jsdoc': [
      WARN,
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: false,
        },
      },
    ],
    'semi-spacing': [WARN, { before: false, after: true }],
  },
};
