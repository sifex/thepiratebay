$(function() {
	$("form").submit(function(e){
			e.preventDefault();
	});
});

$(function() {
	if(localStorage.getItem("deployed") !== '1') {
		setTimeout(function () {
			$("body").addClass( "overflow" );
			$("body").addClass( "deployed" );
			setTimeout(function () {
				$("input#search").focus();
				$("body").removeClass( "overflow" );
				localStorage.setItem("deployed", 1);
			}, 900);
		}, 900);
	} else {
		$(function() {
			$("body").addClass( "deployed no-anim" );
		});	
	}
});

setTimeout(function () {
	$("form").submit(function(e){
		$("body").removeClass( "no-anim" );
		$.get( "query.php?q=" + $('input#search').val(), function( data ) {
			$( ".results" ).html( data );
		});
		$("body").addClass( "searched" );
		$("a#home").attr( "href", "/");
	});
}, 900);