_.mixin({
  zipObj: function(obj) {
    // First get keys from object.
    var keys = _.keys(obj);
  
    // For each key, grab the data
    var propertyArray = _.map(keys, function(k, i) { return obj[k] || undefined; });
  
    // "Shift" propertyArray around, so we can make into array of objects
    var zippedArray = _.zip.apply(_, propertyArray);
  
    // Set up function that will take an array,
    // Then use the keys variable to re-create.
    var createObject = function(d) {
      var rObj = {};
  
      _.each(keys, function(k, i) { rObj[k] = d[i]; });
      return rObj;
    };
  
    // For each item in zipped array, return an object
    return _.map(zippedArray, createObject);
  }
});
