_.mixin({
  filterObj: function(data, control) {
    // First set some defaults.
    var _data = data || {};
    var _control = control || {};

    // Create arguments to be passed to _.pick()
    var controlKeys = Object.keys(_control);
    var args = [_data].concat(controlKeys);

    // Finally use _.pick() to filter object properties.
    return _.pick.apply(_, args);
  }
});
