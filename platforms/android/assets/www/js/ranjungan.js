var serverpage='http://wisata.banjarnegara-foss.web.id/mobileSrv/';
$('document').ready(function(){
	var kini = new Date();
	var tahun= kini.getFullYear();
	$('#laptahunan div').remove();
	$.getJSON(serverpage+'?mn=laptahun&tahun='+tahun,function(lapokun){
		$.each(lapokun,function(index,data){
			$('#laptahunan').append(
			"<div class='list-box'>"+
			"<p class='list-nama'>"+data.objwis+"</p>"+
			"<div class='report'>"+
			"<div class='tourist'>WM:"+data.wisman+"</div>"+
			"<div class='tourist'>WN:"+data.wisnus+"</div>"+
			"<div class='revenue'>PDPT: "+data.uang+"</div>"+
			"</div>"+
			"</div>");
		});
	});
	
	$('#lapBulan').click(function(){
		window.location='lapbulan.html';
	});
});
