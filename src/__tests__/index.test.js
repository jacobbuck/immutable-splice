var expect = require('expect');
var splice = require('./');

describe('splice', function() {
  var arr = ['foo', 'bar', 'baz', 'qux', 'quux', 'quuz'];
  var str = 'foobar';

  it('removes all items from index 2', function() {
    expect(splice(arr, 2))
      .toEqual(['foo', 'bar']);
    expect(splice(str, 2))
      .toEqual('fo');
  });

  it('removes 2 items from index 2', function() {
    expect(splice(arr, 2, 2))
      .toEqual(['foo', 'bar', 'quux', 'quuz']);
    expect(splice(str, 2, 2))
      .toEqual('foar');
  });

  it('removes 2 items from index 2, and inserts 1 item', function() {
    expect(splice(arr, 2, 2, 'blep'))
      .toEqual(['foo', 'bar', 'blep', 'quux', 'quuz']);
    expect(splice(str, 2, 2, 'blep'))
      .toEqual('foblepar');
  });

  it('removes 0 items from index 2, and inserts 1 item', function() {
    expect(splice(arr, 2, 0, 'blep'))
      .toEqual(['foo', 'bar', 'blep', 'baz', 'qux', 'quux', 'quuz']);
    expect(splice(str, 2, 0, 'blep'))
      .toEqual('foblepobar');
  });

  it('removes 2 items from index 2, and inserts 3 items', function() {
    expect(splice(arr, 2, 2, 'blep', 'blah', 'boop'))
      .toEqual(['foo', 'bar', 'blep', 'blah', 'boop', 'quux', 'quuz']);
    expect(splice(str, 2, 0, 'blep', 'blah', 'boop'))
      .toEqual('foblepblahboopobar');
  });
});