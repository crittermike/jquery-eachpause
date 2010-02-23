EachPause for jQuery
=====================

EachPause is a tiny jQuery plugin that you use the same way as `.each()`
except it takes a second millisecond parameter to be used as a delay between
each cycle.

But why?
---------

Say, for example, you’re cycling through a list of images, displaying one at a
time (i.e., a slideshow) and you want to wait 5 seconds on each image before
moving on to the next one.

Usage
----------

First, make sure to include jquery.eachpause.js...

    <script type="text/javascript" src="jquery.eachpause.js"></script>

Then, in your jQuery, just do something like...

    $('.selector').eachPause(5000, function() {
      // Do whatever would normally go in .each() here.
    });

