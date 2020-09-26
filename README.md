# immutable-splice

Changes the contents of an array or string by removing or replacing existing elements and/or adding new elements.

Based off the [`Array.prototype.splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) method—but immutable.

## Usage

```js
splice(input, start)
splice(input, start, deleteCount)
splice(input, start, deleteCount, item1, item2, ...)
```

### Parameters

- `input` the `Array` or `String` to splice.
- `start` `Number` index at which to start changing the `input`.
- `deleteCount` _optional_ `Number` of elements in the array to remove from `start`.

  If `deleteCount` is omitted, then all the elements from `start` to the end of the `input` will be deleted.

- `item1, item2, ...` _optional_ elements to add to the `input`, beginning from `start`.

### Return value

A new `Array` or `String` containing the changes made.

## Examples

```js
import splice from 'immutable-splice';

splice(['foo', 'bar', 'baz'], 1, 1);
// returns ['foo', 'baz']

splice('cool', 1, 2, '0', 'O');
// returns 'c0Ol'
```
