$(function() {
  var linksDisplaying = false;
  var hotkeyCountThreshold = 2;
  var hotkeyCounter = 0;
  var hotkeyClearId = null;
  var anchoredElements = $('*[id]');

  var attachLink = function(element) {
    var target = $(element)
    var href = '#' + target.attr('id')
    var link = $('<a class="anchor-link" href="'  + href + '"></a>');
    link.click(function() {
      removeLinks();
    });
    target.prepend(link);
  }

  var attachLinks = function() {
    anchoredElements.each(function(i, element) {
      attachLink(element);
    });
    linksDisplaying = true;
  }

  var removeLinks = function(event) {
    $('a.anchor-link').remove()
    linksDisplaying = false;
  }

  var toggleLinks = function() {
    if (linksDisplaying) {
      removeLinks()
    } else {
      attachLinks()
    }
  }

  var resetHotkeyCounter = function() {
    hotkeyCounter = 0;
  }

  var incrementHotkeyCounter = function() {
    hotkeyCounter++;
    if (hotkeyCounter >= hotkeyCountThreshold) {
      toggleLinks();
      resetHotkeyCounter();
    } else {
      clearTimeout(hotkeyClearId);
      hotkeyClearId = setTimeout(resetHotkeyCounter, 200);
    }
  }

  $(document).on('keydown', function(event) {
    if (event.keyCode === 17 && !event.shiftKey && !event.metaKey ) {
      incrementHotkeyCounter();
    }
  });
})
