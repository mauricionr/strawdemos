debugger
var straw = require('straw');

/*
 * emits cumulative count of messages received.
 */

module.exports = straw.node({
  total: 0,
  process: function(msg, done) {
    debugger      
    this.total ++;
    this.output({count: this.total}, done);
  }
});
