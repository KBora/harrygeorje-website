document.addEventListener('click', function (event) {

	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('#collapsibleMobileMenu')) return;

	// Don't follow the link
	// event.preventDefault();

	// Log the clicked element in the console
    // console.log(event.target);
    
    // Toggle class
     var menuBgElements = document.getElementsByClassName('transition--bg1')
    Array.prototype.map.call(menuBgElements, function(el) {
        return el.classList.toggle('expand');
    }
    );

    

}, false);

document.addEventListener('click', function (event) {

	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('.lbl-toggle')) return;

	// Don't follow the link
	// event.preventDefault();

	// Log the clicked element in the console
    console.log(event.target);


    

}, false);