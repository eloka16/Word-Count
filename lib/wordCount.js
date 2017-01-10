'use strict'

module.exports = {



    words: function(string) {
        return string.replace(/\s+/g, ' ').split(/\s/).reduce(function (count, word) {
    	    count.hasOwnProperty(word) ? count[word] += 1 : count[word] = 1;
    	    return count;
        }, {});
    }
}