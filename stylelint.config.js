module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier'
  ],
  rules: {
    'selector-pseudo-element-no-unknown': [ true, {
        'ignorePseudoElements': ['v-deep']
      }
    ],
    'at-rule-no-unknown': [ true, {
      'ignoreAtRules': [
        'extend',
        'extends',
        'tailwind',
        'layer',
        'apply'
      ]
    }],
    'block-no-empty': null,
    'unit-allowed-list': ['em', 'rem', 's' , '%']
  }
}
