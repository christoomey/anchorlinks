$(function() {
  var linksDisplaying = false;
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

  $(document).on('keydown', function(event) {
    if (event.metaKey && event.ctrlKey && event.shiftKey) {
      toggleLinks();
    }
  });
})
