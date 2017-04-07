'use strict';

module.exports = function splice(input, start, deleteCount) {
  deleteCount = deleteCount || (input.length - start);
  var items = [].slice.call(arguments, 3);
  var output;
  return (output = input.slice(0, start))
    .concat.apply(output, items)
    .concat(input.slice(start + deleteCount));
};
