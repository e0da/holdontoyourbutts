(function () {

  var $sam, $top, parms;

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
    scaleWidth  = $top.width()  / $sam.width();
    scaleHeight = $top.height() / $sam.height();
    scaleRatio  = Math.min(scaleWidth, scaleHeight);
    newWidth  = $sam.width()  * scaleRatio;
    newHeight = $sam.height() * scaleRatio;
    $sam.css({
      width:  newWidth,
      height: newHeight
    });
  }

  function setPosition() {
    var baseLeft, baseTop, newTop, newLeft;
    baseLeft = ($top.width()  / 2) - ($sam.width()  / 2);
    baseTop  = ($top.height() / 2) - ($sam.height() / 2);
    newTop  = baseTop  + randomOffset() + 'px';
    newLeft = baseLeft + randomOffset() + 'px';
    $sam.css({
      marginTop:  newTop,
      marginLeft: newLeft
    });
  }

  function cacheQueries() {
    $sam = $('img');
    $top = $(window.top);
  }

  function setImage() {
    if (parms['img']) {
      $sam.attr('src', parms['img']);
    }
  }

  function parseParameters() {
    var rawParms;
    parms    = [];
    rawParms = location.href.split('?')[1];
    if (rawParms === undefined) {
      return;
    }
    $.each(rawParms.split('&'), function() {
      var pair, key, value;
      pair       = this.split('=');
      key        = pair[0];
      value      = pair[1];
      parms[key] = value;
    });
  }

  $(function () {
    parseParameters();
    cacheQueries();
    setImage();
    setInterval(wiggle, 50);
  });
}(this));
