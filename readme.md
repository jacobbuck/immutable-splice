# immutable-splice

Immutable splice function.

## Usage

```
import splice from `immutable-splice`

splice(input, start)
splice(input, start, deleteCount)
splice(input, start, deleteCount, item1, item2, ...)
```

### Works with both `Array`s and `String`s

```
splice('cool', 1, 2, '0', 'O') // == 'c0Ol'
splice(['foo', 'bar', 'baz'], 1, 1) // == ['foo', 'baz']
```
