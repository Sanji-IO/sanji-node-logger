var should = require('should'),
    Logger = require('../index');

describe('Log', function() {

  var log;

  beforeEach(function() {
    log = Logger('sanji');
  });

  it('should be created an instance of Logger', function() {
    log.constructor.name.should.be.equal('Logger');
  });

  it('should be a singleton class', function() {
    log.should.be.equal(Logger.logger.sanji);
  });
});
