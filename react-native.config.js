// Ported from package.json - see https://github.com/react-native-community/cli/blob/master/docs/configuration.md
//
// "rnpm": {
//   "assets": [
//     "./src/assets/fonts"
//   ]
// },

module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./assets/fonts/'],
  dependencies: {
    'react-native-vector-icons': {
      platforms: {
        android: null, // disable Android platform, other platforms will still autolink if provided
      },
    },
  },
};
