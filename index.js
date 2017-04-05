'use strict';

module.exports = function immutableSplice(input, start, deleteCount) {
  var items = [].slice.call(arguments, 3);
  deleteCount = deleteCount || (input.length - start);
  return input.slice(0, start).concat(items, input.slice(start + deleteCount));
};
