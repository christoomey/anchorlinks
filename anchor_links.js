$(function() {
  var targetClass = 'anchor-link-target'
  var anchoredElements = $('*[id]');

  $(document).on('keydown keyup', function(event) {
    if (event.metaKey && event.ctrlKey && event.shiftKey) {
      anchoredElements.addClass(targetClass);
    } else {
      anchoredElements.removeClass(targetClass)
    }
  });
})
