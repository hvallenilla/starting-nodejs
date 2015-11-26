var config = {
    db: {
        host: '127.0.0.1',
        user: 'root',
        pasword: 'admin',
        port: 3306,
        debug: true
    },
    site: {
        url: 'http://localhost:3000',
        title: 'My Amazing First Page in NodeJS',
        language: 'en',
        html: {
            engine: 'jade',
            minify: false
        }
    },
};

module.exports = config;