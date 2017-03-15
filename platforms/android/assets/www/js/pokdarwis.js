var serverpage='http://wisata.banjarnegara-foss.web.id/mobileSrv/';
$('document').ready(function(){
	
	$('#cam').change(function(){
		var cam=$('#cam').val();
		$('#lstpdw div').remove();
		$.getJSON(serverpage+'?mn=pokdrwis&cam='+cam,function(pokdarwis){
			$.each(pokdarwis,function(index,data){
				$('#lstpdw').append(
				"<div class='list-box'>"+
				"<p class='list-nama'>"+data.nama+"</p>"+
				"<p class='list-addr'> Desa "+data.desa+"<p>"+
				"<p class='list-addr'>Kordinator: "+data.kord+
				", Telp."+data.telp+"<p>"+
				"</div>"
				);	
			});
			
		});
	});
});
