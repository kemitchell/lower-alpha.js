Converts natural numbers to strings of `[a-z]`.

```javascript
var loweralpha = require('lower-alpha')
var assert = require('assert')

var numbers = [
  [1, 'a'],
  [26, 'z'],
  [27, 'aa'],
  [28, 'ab'],
  [29, 'ac'],
  [1152, 'arh'],
  [18432, 'aafx']
]

numbers.forEach(function(pair) {
  assert.equal(loweralpha(pair[0]), pair[1])
})
```
