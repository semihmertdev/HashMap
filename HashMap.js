class HashMap {
    constructor(initialCapacity = 16, loadFactor = 0.75) {
      this.buckets = new Array(initialCapacity).fill(null).map(() => []);
      this.size = 0;
      this.loadFactor = loadFactor;
    }
  
    hash(key) {
      let hashCode = 0;
      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
      }
      return hashCode;
    }
  
    _resize() {
      const oldBuckets = this.buckets;
      this.buckets = new Array(oldBuckets.length * 2).fill(null).map(() => []);
      this.size = 0;
  
      for (const bucket of oldBuckets) {
        for (const [key, value] of bucket) {
          this.set(key, value);
        }
      }
    }
  
    set(key, value) {
      const index = this.hash(key);
      const bucket = this.buckets[index];
  
      for (let i = 0; i < bucket.length; i++) {
        const [currentKey, currentValue] = bucket[i];
        if (currentKey === key) {
          bucket[i] = [key, value];
          return;
        }
      }
  
      bucket.push([key, value]);
      this.size++;
  
      if (this.size / this.buckets.length > this.loadFactor) {
        this._resize();
      }
    }
  
    get(key) {
      const index = this.hash(key);
      const bucket = this.buckets[index];
  
      for (const [currentKey, currentValue] of bucket) {
        if (currentKey === key) {
          return currentValue;
        }
      }
      return null;
    }
  
    has(key) {
      return this.get(key) !== null;
    }
  
    remove(key) {
      const index = this.hash(key);
      const bucket = this.buckets[index];
  
      for (let i = 0; i < bucket.length; i++) {
        const [currentKey, currentValue] = bucket[i];
        if (currentKey === key) {
          bucket.splice(i, 1);
          this.size--;
          return true;
        }
      }
      return false;
    }
  
    length() {
      return this.size;
    }
  
    clear() {
      this.buckets = new Array(this.buckets.length).fill(null).map(() => []);
      this.size = 0;
    }
  
    keys() {
      const keysArray = [];
      for (const bucket of this.buckets) {
        for (const [key, value] of bucket) {
          keysArray.push(key);
        }
      }
      return keysArray;
    }
  
    values() {
      const valuesArray = [];
      for (const bucket of this.buckets) {
        for (const [key, value] of bucket) {
          valuesArray.push(value);
        }
      }
      return valuesArray;
    }
  
    entries() {
      const entriesArray = [];
      for (const bucket of this.buckets) {
        for (const [key, value] of bucket) {
          entriesArray.push([key, value]);
        }
      }
      return entriesArray;
    }
  }

  //test
  
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