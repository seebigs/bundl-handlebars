
var handlebars = require('../../index.js');
var path = require('path');
var utils = require('seebigs-utils');

describe('', function (expect) {
    var before = utils.readFile(path.resolve('test/_fixture/before.html'));
    var after = utils.readFile(path.resolve('test/_fixture/after.html'));
    var plugin = handlebars({
        context: {
            one: 'me',
            two: 'you'
        }
    });

    expect(plugin.one(before)).toBe(after);
});
