document.addEventListener('click', function (event) {
    console.log(event.target);
	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('#collapsibleMobileMenu')) return;

	// Don't follow the link
	// event.preventDefault();

	// Log the clicked element in the console
    console.log(event.target);
    
    // Toggle class
     var menuBgElements = document.getElementsByClassName('menu--bg')
    // if (menuBgElements) {
    //     menuBgElements[0].classList.toggle('menu--expanded');
    // }

    Array.prototype.map.call(menuBgElements, function(el) {
        return el.classList.toggle('menu--expanded');
    }
    );

}, false);