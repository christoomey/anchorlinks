(function() {
  var anchoredElements = document.querySelectorAll('*[id]');
  var css = document.createElement('style');
  css.type = "text/css";
  css.appendChild(document.createTextNode(".anchor-link:before { content:url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwEHBgEBBwgBAQEBDRYPAQwBDRsICRAWIB0iIiARHxMkKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIABAAEAMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAHA//EACgQAAECBAMIAwAAAAAAAAAAAAEECAIDBgcFESEACRIUIlFScTFBkf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwBLqyuGjUvOt7a5WLt3rcLdTWg0TX5fNroh5cGYyGnf1sS46jsHMltydlgmJvjcZv13/qxPasawHKKpUsREGGOUNIYAAR2OWnSDtPAVbaZsLnLB48hfjfzfvvwVlO4WG2wKZXIg4geKCZ8QwgAe8sj07LtJ0Q3GmVFybzQT70uYdFd/S4a508zmlhh8BF9DQfg7DYP/2Q==')}"));
  document.head.appendChild(css);
  for(var	len, i = 0; len = anchoredElements.length, i < len; i++ ) {
    (function() {
      var link;
      var ele;
      ele = anchoredElements[i];
      link = document.createElement('a');
      link.href = '#' + ele.id;
      link.className = 'anchor-link';
      link.style.display = "none";
      link.style.position = "absolute";
      link.style.marginLeft = "-1em";
      ele.addEventListener('mouseover', function() { link.style.display = "inline";});
      ele.addEventListener('mouseout', function() { link.style.display = "none";});
      ele.insertBefore(link, ele.firstChild);
    }());
  }
}());
