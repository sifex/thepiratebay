function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function checkCookie() {
    var deployTime=getCookie("deployTime");
    if (deployTime == 1) {
        return true;
    } else {
    	return false;
    }
}

$(function() {
	$("form").submit(function(e){
		e.preventDefault();
		$("body").removeClass( "no-anim" );
		$.get( "query.php?q=" + $('input#search').val(), function( data ) {
			$( ".results" ).html( data );
		});
		$("body").addClass( "searched" );
		$("a#home").attr( "href", "/");
		setTimeout(function () {
			$(".fade").addClass( "hide" );
			$(".results").addClass( "fadeup" );
		}, 900);
	});
});

$(function() {
	$(".dark-mode-button").click(function() {
		$("body").toggleClass( "dark" );
		$(".dark-mode-button").toggleClass( "light" );
	});

	if(getCookie("deployTime") !== '0') {

		// Deploy
		setCookie('deployTime', 1, 0.0002);
		$("body").removeClass( "no-anim" );
		$("body").addClass( "overflow" );
		setTimeout(function () {
			$("body").addClass( "deployed" );
			setTimeout(function () {
				$("input#search").focus();
				$("body").removeClass( "overflow" );
			}, 900);
		}, 900);

	} else {

		// Don't Deploy
		$("body").addClass( "deployed" );
		$("input#search").focus();	
	}
});

