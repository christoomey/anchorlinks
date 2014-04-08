$(function() {
  var targetClass = 'anchor-link-target'
  var targetableTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']
  var selector = targetableTags.map(function (tagname) { return tagname + '[id]'}).join(',')
  var anchoredElements = $('*[id]');

  var attachLink = function(target) {
    var link = $('<a class="anchor-link"></a>');
    target.prepend(link);
    return link;
  }

  var linkEmAll = function() {
    anchoredElements.each(function(i, element) {
      link = attachLink($(element))
    });
  }

  $(document).on('keydown keyup', function(event) {
    if (event.metaKey && event.ctrlKey && event.shiftKey) {
      linkEmAll()
    } else {
      $('a.anchor-link').remove()
    }
  });
})
