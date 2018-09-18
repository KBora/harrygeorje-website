// document.addEventListener('click', function (event) {

// 	// If the clicked element doesn't have the right selector, bail
// 	if (!event.target.matches('#collapsibleMobileMenu')) return;

// 	// Don't follow the link
// 	// event.preventDefault();

// 	// Log the clicked element in the console
//     // console.log(event.target);
    
//     // Toggle class
//      var menuBgElements = document.getElementsByClassName('transition--bg1')
//     Array.prototype.map.call(menuBgElements, function(el) {
//         return el.classList.toggle('expand');
//     }
//     );

    

// // }, false);

document.addEventListener('click', function (event) {
    // looks for .collapsible-toggler elements and adds an .expand class
    // the next sibling OR if a data-collapse attribute is present,
    // adds the .expand class to elements matching that selector (and the body)
    
	// Check for collapsible togglers
	if (!event.target.matches('.collapsible-toggler')) return;

    // Don't follow the link
    event.preventDefault();	
  
    // check for custom attribute 'data-collapse' 
    var className = event.target.getAttribute('data-collapse-selector');    

    if (className) { 
        var collapsibleEls = document.getElementsByClassName(className);   
        Array.prototype.map.call(collapsibleEls, function(el) {
            return el.classList.toggle('expand');
        });
        // assume this is the mobile menu toggler, so we have to fix the body
        document.body.classList.toggle('no-scroll');
    } else {
        // Get next sibling and toggle the expand class
        var collapsibleEl;
        collapsibleEl = event.target.nextElementSibling;
        collapsibleEl.classList.toggle('expand')
    }
 	    

}, false);