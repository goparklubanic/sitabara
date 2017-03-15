var serverpage='http://wisata.banjarnegara-foss.web.id/mobileSrv/';
$('document').ready(function(){
	$.getJSON(serverpage+'?mn=agenda',function(dagenda){
		$('#idftAgenda div').remove();
		$.each(dagenda,function(index,data){
			var nmAgenda = data.agenda;
			$('#dftAgenda').append(
				"<div class='agenda'>"+
				"<p class='agd_nama'>"+nmAgenda+"</p>"+
				"<p class='agd_tglk'>@"+data.lokasi+", "+data.tanggal+"</p>"+
				"</div>");
		});
	});
});
