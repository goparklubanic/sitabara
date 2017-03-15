var serverpage='http://wisata.banjarnegara-foss.web.id/mobileSrv/';
$('document').ready(function(){
	$.getJSON(serverpage+'?mn=destinasi',function(destinasi){
		$('#dftDestinasi div').remove();
		$.each(destinasi,function(index,data){
			$('#dftDestinasi').append(
				"<div class='list-box'>"+
				"<p class='list-nama'>"+data.nama+"</p>"+
				"<p class='list-addr'>Desa "+data.desa+
				" Kec."+data.kcmt+"</p>"+
				"</div>");
		});
	});
});
