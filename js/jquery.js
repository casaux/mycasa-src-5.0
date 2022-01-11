$(document).ready(function(){




	/* table sorting */

	$(".casa-sort-table th").first().addClass("casa-sort-header-sorted-asc");

	$(document).on('click', '.casa-sort-table th', function() {



		if($(this).hasClass("casa-sort-header-sorted-asc")){
			$(".casa-sort-header-sorted-asc").removeClass("casa-sort-header-sorted-asc");
			$(".casa-sort-header-sorted-desc").removeClass("casa-sort-header-sorted-desc");

			$(this).addClass("casa-sort-header-sorted-desc");
		} else {
			$(".casa-sort-header-sorted-asc").removeClass("casa-sort-header-sorted-asc");
			$(".casa-sort-header-sorted-desc").removeClass("casa-sort-header-sorted-desc");


			$(this).addClass("casa-sort-header-sorted-asc");
		}



	var table = $(this).parents('table').eq(0);
	var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()));
	this.asc = !this.asc;
	if (!this.asc) {
	rows = rows.reverse();
	}
	table.children('tbody').empty().html(rows);
	});

	function comparer(index) {
	return function(a, b) {
	var valA = getCellValue(a, index),
	valB = getCellValue(b, index);
	return $.isNumeric(valA) && $.isNumeric(valB) ?
	valA - valB : valA.localeCompare(valB);
	};
	}

	function getCellValue(row, index) {
	return $(row).children('td').eq(index).text();
	}




	$(".casa-sort-table th").each(function( index ) {
		$(this).html('<a href="#" class="casa-sort-header">'+$(this).html()+'</a>');
	});

//	.html("<a>"+$(this).html()+"</a>");


	/* show errors */


	if (window.location.hash=='#show-errors') {
	   $(".casa-errors").css("display","block");
	}



});
