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

    

// }, false);

// Mobile menu
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


// document.addEventListener('click', function (event) {
//     if (!event.target.matches('.expand-menu-item--desktop')) return;

//     // Don't follow the link
//     event.preventDefault();	

//     // if menu is expanded, remove the epxand class 
//     var menuEl = event.target.nextElementSibling;
//     if (menuEl.classList.contains('expand-desktop-menu-item')) {
//         menuEl.classList.remove('expand-desktop-menu-item');

//         // now remove the same class from any other menu item (in case user has expanded multiple menus)
//     } else {
//         // target is not expanded, check if any other desktop menu targets are expanded, if so, HIDE THEM
        
//         var expanderEls = document.getElementsByClassName('expand-desktop-menu-item');   
//         Array.prototype.map.call(expanderEls, function(el) {
//             console.log('hiding...');
//             console.log(el);
//             return el.classList.add('d-none');
//         });

//         // expand target after waiting .2 secs for the previous transition to close
  
//          menuEl.classList.add('expand-desktop-menu-item');

        


//     }
    

// }, false);


// Desktop menu
document.addEventListener('click', function (event) {
        if (!event.target.matches('.expand-menu-item--desktop')) return;
    
        // Don't follow the link
        event.preventDefault();	

        var el = event.target;
        var menuEl = event.target.nextElementSibling;
        var isMenuExpanded = menuEl.classList.contains('expand');
        var wrapperEl = document.getElementById('navDesktopWrapper');   
        var isWrapperExpanded = wrapperEl.classList.contains('expand');

        if (isMenuExpanded) {
            // collapse menu and wrapper            
            menuEl.classList.remove('expand');
            wrapperEl.classList.remove('expand'); 
            el.classList.remove('expand');
        } else {
            if (isWrapperExpanded) {
                // collapse other menus first
                console.log('collapse other menus first, then expand this one')
                var desktopMenuSubItems = document.getElementsByClassName('menu__item__sub-items--wrapper');
                Array.prototype.map.call(desktopMenuSubItems, function(el) {
                    if (el.classList.contains('expand')) {
                        el.previousElementSibling.classList.remove('expand');
                        return el.classList.remove('expand');
                    } else {
                        return el;
                    }                    
                });

                menuEl.classList.add('expand');
                el.classList.add('expand');

            } else {
                menuEl.classList.add('expand');
                wrapperEl.classList.add('expand'); 
                el.classList.add('expand');         
            }    
            
        }       
       
  
    }, false);