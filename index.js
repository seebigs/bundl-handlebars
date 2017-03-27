/**
 * Templating extension for Bundl
 */

var Handlebars = require('handlebars');
var utils = require('seebigs-utils');

module.exports = function (options) {
    options = options || {};

    if (!options.context) {
        options = {
            context: options
        };
    }

    utils.each(options.helpers, function (helper, helperName) {
        Handlebars.registerHelper(helperName, helper);
    });

    function one (content) {
        var template = Handlebars.compile(content);
        return template(options.context);
    }

    return {
        one: one
    };

};
