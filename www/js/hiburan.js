var serverpage='http://wisata.banjarnegara-foss.web.id/mobileSrv/';
$('document').ready(function(){
	
	
});

function loadHiburan(){
	$.getJSON(serverpage+'?mn=wanahib',function(organisasi){
		$.each(organisasi,function(index,data){
			$('#lstopw').append(
			  "<div class='list-box'>"+
			  "<p class='list-name'>"+data.nama+" "+
			  "<span class='list-addr'>["+data.katg+"]</span></p>"+
			  "<p class='list-addr'>Alamat: "+data.almt+"</p>"+
			  "<p class='list-addr'>Pemilik/Telp: "+data.ownr+", "+data.telp+"</p>"+
			  "</div>");
		});
	});
}
