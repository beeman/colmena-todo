'use strict'

module.exports = function(Starter) {
  // This is a static method that lives on the Starter model
  Starter.echo = value => Promise.resolve(value)

  // We defined the remote method on the module to make it available over REST
  Starter.remoteMethod('echo', {
    accepts: { arg: 'value', type: 'string' },
    returns: { arg: 'result', type: 'string' },
  })
}
