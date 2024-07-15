# HashMap Implementation in JavaScript

This repository contains a custom implementation of a HashMap in JavaScript. The HashMap class includes various methods to store, retrieve, and manage key-value pairs with collision resolution and dynamic resizing based on the load factor.

## Features

- Custom hash function for string keys
- Separate chaining collision resolution using linked lists
- Dynamic resizing based on load factor
- Methods to set, get, check existence, remove, and clear entries
- Methods to retrieve keys, values, and entries

## Methods

### `set(key, value)`

Inserts a key-value pair into the hash map. If the key already exists, its value is updated.

### `get(key)`

Retrieves the value associated with the given key. Returns `null` if the key is not found.

### `has(key)`

Checks if the given key exists in the hash map. Returns `true` if the key exists, `false` otherwise.

### `remove(key)`

Removes the key-value pair associated with the given key. Returns `true` if the key was removed, `false` if the key was not found.

### `length()`

Returns the number of key-value pairs stored in the hash map.

### `clear()`

Removes all entries in the hash map.

### `keys()`

Returns an array of all keys in the hash map.

### `values()`

Returns an array of all values in the hash map.

### `entries()`

Returns an array of all key-value pairs in the hash map.

## Example Usage

```javascript
const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

// Overwriting some values
test.set('apple', 'green');
test.set('banana', 'brown');

// Adding one more element to trigger resizing
test.set('moon', 'silver');

// Testing get method
console.log(test.get('apple')); // 'green'
console.log(test.get('moon')); // 'silver'

// Testing has method
console.log(test.has('banana')); // true
console.log(test.has('sun')); // false

// Testing remove method
console.log(test.remove('carrot')); // true
console.log(test.remove('carrot')); // false

// Testing length method
console.log(test.length()); // 12 (after removing one key)

// Testing clear method
test.clear();
console.log(test.length()); // 0

// Re-populating and testing keys, values, and entries methods
test.set('apple', 'red');
test.set('banana', 'yellow');
console.log(test.keys()); // ['apple', 'banana']
console.log(test.values()); // ['red', 'yellow']
console.log(test.entries()); // [['apple', 'red'], ['banana', 'yellow']]
