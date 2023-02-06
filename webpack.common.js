const path = require('path');

module.exports = {
  entry: {
    app: './src/index.ts',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@common': path.resolve(__dirname, 'src/common/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@types': path.resolve(__dirname, 'src/types/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces/'),
    },
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
