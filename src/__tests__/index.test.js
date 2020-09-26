import splice from '..';

const arr = ['foo', 'bar', 'baz', 'qux', 'quux', 'quuz'];
const str = 'foobar';

test('removes all items from index 2', () => {
  expect(splice(arr, 2)).toEqual(['foo', 'bar']);
  expect(splice(str, 2)).toEqual('fo');
});

test('removes 2 items from index 2', () => {
  expect(splice(arr, 2, 2)).toEqual(['foo', 'bar', 'quux', 'quuz']);
  expect(splice(str, 2, 2)).toEqual('foar');
});

test('removes 2 items from index 2, and inserts 1 item', () => {
  expect(splice(arr, 2, 2, 'blep')).toEqual([
    'foo',
    'bar',
    'blep',
    'quux',
    'quuz',
  ]);
  expect(splice(str, 2, 2, 'blep')).toEqual('foblepar');
});

test('removes 0 items from index 2, and inserts 1 item', () => {
  expect(splice(arr, 2, 0, 'blep')).toEqual([
    'foo',
    'bar',
    'blep',
    'baz',
    'qux',
    'quux',
    'quuz',
  ]);
  expect(splice(str, 2, 0, 'blep')).toEqual('foblepobar');
});

test('removes 2 items from index 2, and inserts 3 items', () => {
  expect(splice(arr, 2, 2, 'blep', 'blah', 'boop')).toEqual([
    'foo',
    'bar',
    'blep',
    'blah',
    'boop',
    'quux',
    'quuz',
  ]);
  expect(splice(str, 2, 0, 'blep', 'blah', 'boop')).toEqual(
    'foblepblahboopobar'
  );
});
