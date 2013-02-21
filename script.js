(function () {

  var sam;

  /**
   * Return a random integer between -1 and 1, inclusive.
   */
  function randomOffset() {
    return Math.floor(Math.random() * 3) - 1 + 'px';
  }

  function wiggle() {
    sam.css({
      marginTop:  randomOffset(),
      marginLeft: randomOffset()
    });
  }

  $(function () {
    sam = $('img');
    setInterval(wiggle, 50);
  });
}(this));
