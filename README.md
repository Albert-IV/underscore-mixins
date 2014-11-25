underscore-mixins
=================

A Small Collection of Underscore.js Mixins

# _.zipObj()

This takes an object whose values are arrays and zips them into an array of objects using the same keys. 

    var input = {
      key1: [1, 2, 3],
      key2: [4, 5, 6],
      key3: [7, 8, 9]
    }
    
    _.zipObj(input);
    // returns:
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


