underscore-mixins
=================

A Small Collection of Underscore.js Mixins

# _.zipObj()

This takes an object whose values are arrays and zips them into an array of objects using the same keys.

```javascript
var input = {
  key1: [1, 2, 3],
  key2: [4, 5, 6],
  key3: [7, 8, 9]
}

_.zipObj(input);
// Returns:
// [
//   {
//     "key1": 1,
//     "key2": 4,
//     "key3": 7
//   },
//   {
//     "key1": 2,
//     "key2": 5,
//     "key3": 8
//   },
//   {
//     "key1": 3,
//     "key2": 6,
//     "key3": 9
//   }
// ]
```

# filterObj()

This takes an incoming data source and strips out any keys that are not present in the control object.

```javascript
var data = {
    name : {
        first : 'Al',
        last : 'Engel'
    }
    address : '10 Imaginary St.',
    city : 'Springfield',
    state : 'GA'
    _id : 'Some Protected Field'
};

var control = {
    name : true,
    address : true,
    state : true
};

_.filterObj(data, control);
// Returns:
// {
//     name : {
//         first : 'Al',
//         last : 'Engel'
//     },
//     address : '10 Imaginary St.',
//     state : 'Springfield'
// }
// Omitted 'city', '_id' fields in returned data
```