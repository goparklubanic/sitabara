var serverpage='http://wisata.banjarnegara-foss.web.id/mobileSrv/';
$('document').ready(function(){
	$('#kulkat').change(function(){
		var kat=$('#kulkat').val();
		$('#dftKul div').remove();
		$.getJSON(serverpage+'?mn=wanakul&kat='+kat,function(kuliner){
			$.each(kuliner,function(index,data){
				$('#dftKul').append(
				"<div class='list-box'>"+
				"<p class='list-nama'>"+data.nama+"</p>"+
				"<p class='list-addr'>Alamat: "+data.desa+", "+data.kcmt+"</p>"+
				"<p class='list-addr'>Telp: "+data.telp+"</p>"+
				"</div>");
			});
		});
	});
	
});

