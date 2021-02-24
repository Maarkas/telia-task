const withImages = require('next-images');

module.exports = {
    compress: false,
    images: {
        domains: ['localhost', 'githubusercontent.com', 'raw.githubusercontent.com', 'github.com'],
    },
};

module.exports = withImages();
