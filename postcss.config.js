module.exports = ({ options }) => ({
  ...options,
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 1080,
    },
  },
});
