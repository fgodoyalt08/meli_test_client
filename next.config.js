const path = require('path');

module.exports = {
  images: {
    domains: ['http2.mlstatic.com']
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
};
