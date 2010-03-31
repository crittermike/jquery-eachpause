/**
 * EachPause for jQuery
 *
 * A tiny jQuery plugin for adding pauses between cycles in .each() loops.
 *
 * http://github.com/mikecrittenden/jquery-eachpause
 */
jQuery.fn.eachPause = function(interval, callback) {
  var array = this;
  if(!array.length) 
    return;
  var i = 0;
  next();
  function next() {
    if(callback.call(array[i], i, array[i]) !== false)
      if(++i < array.length)
        setTimeout(next, interval);
  }
};

