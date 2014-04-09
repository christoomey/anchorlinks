$(function() {
  var anchoredElements = $('*[id]');

  var attachLink = function(event) {
    var target = $(this)
    var href = '#' + target.attr('id')
    var link = $('<a class="anchor-link" href="'  + href + '"></a>');
    target.prepend(link);
    return link;
  }

  var removeLink = function(event) {
    $(this).find('a.anchor-link').remove()
  }

  anchoredElements.hover(attachLink, removeLink)
})
