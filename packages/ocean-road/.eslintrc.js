module.exports = {
  extends: ['coldsurfers/react-typescript'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: true,
      },
    ],
  },
  env: {
    browser: true,
  },
}
