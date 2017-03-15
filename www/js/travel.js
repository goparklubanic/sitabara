var serverpage='http://wisata.banjarnegara-foss.web.id/mobileSrv/';
$('document').ready(function(){
	$.getJSON(serverpage+'?mn=travel',function(dagenda){
		$('#dftTravel div').remove();
		$.each(dagenda,function(index,data){
			$('#dftTravel').append(
				"<div class='agenda'>"+
				"<p class='agd_nama'>"+data.nama+"</p>"+
				"<p class='agd_tglk'>"+data.almt+"</p>"+
				"<p class='agd_tglk'> ph:"+data.telp+"</p>"+
				"</div>");
		});
	});
});
