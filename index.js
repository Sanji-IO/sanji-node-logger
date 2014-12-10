var bunyan = require('bunyan'),
    logger = {},
    Logger;

Logger = function getLogger(name, options) {
  if (logger[name]) {
    return logger[name];
  }

  var level = 'debug',
      src = true;

  options = options || {};
  options.NODE_ENV = options.NODE_ENV || process.env.NODE_ENV || 'development';
  options.name = options.name || name;

  if (options.NODE_ENV === 'production') {
    level = 'info';
    src = false;
  } else if (options.NODE_ENV === 'debug') {
    level = 'trace';
  }

  logger[name] = bunyan.createLogger({
    name: options.name,
    level: level,
    src: src
  });

  return logger[name];
};

Logger.logger = logger;

module.exports = Logger;
