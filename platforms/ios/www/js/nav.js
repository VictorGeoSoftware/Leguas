//---------------------------------- MENU LATERAL
(function(window){
    var body = document.body,
        mask = document.createElement("div"),
        toggleSlideLeft = document.querySelector(".toggle-slide-left"),
        activeNav;
    mask.className = "mask";
    
    toggleSlideLeft.addEventListener("click", function(){
//        classie.add(body, "sml-open");
//        document.body.appendChild(mask);
//        activeNav = "sml-open";
        
        if(activeNav == "sml-open"){
            classie.remove( body, activeNav );
			activeNav = "";
			document.body.removeChild(mask);
        } else {
            classie.add(body, "sml-open");
            document.body.appendChild(mask);
            activeNav = "sml-open";
        }

    });
    
	/* hide active menu if mask is clicked */
	mask.addEventListener( "click", function(){
		classie.remove( body, activeNav );
		activeNav = "";
		document.body.removeChild(mask);
	} );

	/* hide active menu if close menu button is clicked */
	[].slice.call(document.querySelectorAll(".close-menu")).forEach(function(el,i){
		el.addEventListener( "click", function(){
			classie.remove( body, activeNav );
			activeNav = "";
			document.body.removeChild(mask);
		} );
	});
})(window);
