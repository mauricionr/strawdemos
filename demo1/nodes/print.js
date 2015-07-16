debugger
var straw = require('straw');

/*
 * print received input to console
 */

module.exports = straw.node({
	process: function (msg, done) {
		debugger
		console.log(JSON.stringify(msg));
		done(false);
	}
});
