debugger
var straw = require('straw');

module.exports = straw.node({
  timer: null,
  opts: {interval: 1000},
  initialize: function(opts, done){
    debugger
    this.opts.interval = opts && opts.interval || 1000;
    done();
  },
  start: function(done) {
    debugger
    this.timer = setInterval(this.ping.bind(this), this.opts.interval);
    done();
  },
  stop: function(done) {
    debugger
    clearInterval(this.timer);
    done(false);
  },
  ping: function() {
    debugger
    this.output({
      'ping': new Date().getTime()
    });
  }
});