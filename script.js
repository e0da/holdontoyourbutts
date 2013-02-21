(function () {

  var sam, div, top;

  function randomOffset() {
    var range = 15;
    return Math.floor(Math.random() * range) - Math.ceil(range / 2);
  }

  function wiggle() {
    setDimensions();
    setPosition();
  }

  function setDimensions() {
    var scaleWidth, scaleHeight, scaleRatio, newWidth, newHeight;
    scaleWidth  = top.width()  / sam.width();
    scaleHeight = top.height() / sam.height();
    scaleRatio  = Math.min(scaleWidth, scaleHeight);
    newWidth  = sam.width()  * scaleRatio;
    newHeight = sam.height() * scaleRatio;
    sam.css({
      width:  newWidth,
      height: newHeight
    });
  }

  function setPosition() {
    var baseLeft, baseTop, newTop, newLeft;
    baseLeft = top.width() / 2  - sam.width()  / 2;
    baseTop  = top.height() / 2 - sam.height() / 2;
    newTop  = baseTop  + randomOffset() + 'px';
    newLeft = baseLeft + randomOffset() + 'px';
    sam.css({
      marginTop:  newTop,
      marginLeft: newLeft
    });
  }

  function cacheQueries() {
    sam = $('img');
    div = $('div');
    top = $(window.top);
  }

  $(function () {
    cacheQueries();
    setInterval(wiggle, 50);
  });
}(this));
