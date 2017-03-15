var serverpage='http://wisata.banjarnegara-foss.web.id/mobileSrv/';
$('document').ready(function(){
	
	
});

function loadOrpari(){
	$.getJSON(serverpage+'?mn=orpari',function(organisasi){
		$.each(organisasi,function(index,data){
			$('#lstopw').append(
			  "<div class='list-box'>"+
			  "<p class='list-name'>"+data.nama+"</p>"+
			  "<p class='list-addr'>Ket: "+data.ktua+" Sek: "+data.sekrt+"</p>"+
			  "<p class='list-addr'>Alamat: "+data.almt+"</p>"+
			  "<p class='list-addr'>Telpon: "+data.telp+"</p>"+
			  "</div>");
		});
	});
}
