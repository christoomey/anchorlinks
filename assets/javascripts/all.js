$(function() {
  var targetClass = 'anchor-link-target'
  var targetableTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']
  var selector = targetableTags.map(function (tagname) { return tagname + '[id]'}).join(',')
  var anchoredElements = $('*[id]');

  $(document).on('keydown keyup', function(event) {
    if (event.metaKey && event.ctrlKey && event.shiftKey) {
      anchoredElements.addClass(targetClass);
    } else {
      anchoredElements.removeClass(targetClass)
    }
  });
})
