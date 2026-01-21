module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'transform-inline-environment-variables',
    ['babel-plugin-react-docgen-typescript', { exclude: 'node_modules' }],
    'react-native-worklets/plugin',
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@coldsurfers/ocean-road/native': '../../packages/ocean-road/src/native/index.ts',
          'react-native': '../../node_modules/react-native',
        },
      },
    ],
  ],
};
