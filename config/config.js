var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'tweb-week-6-auth-test'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/tweb-week-6-auth-test-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'tweb-week-6-auth-test'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/tweb-week-6-auth-test-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'tweb-week-6-auth-test'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/tweb-week-6-auth-test-production'
  }
};

module.exports = config[env];
