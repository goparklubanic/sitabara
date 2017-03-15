var serverpage='http://wisata.banjarnegara-foss.web.id/mobileSrv/';
$('document').ready(function(){
	var kec = localStorage.getItem('kecamatan');
	var tfi = localStorage.getItem('tyfasinap');
	$('#dftFinap').html("<h4>"+tfi+" DI "+kec.toUpperCase()+"</h4>");
	$.getJSON(serverpage+'?mn=akodikecam&kat='+tfi+'&kcmt='+kec+'&row=1',function(fasinap){
		$('#dftFasinap div').remove();	
		$.each(fasinap,function(index,data){
			$('#dftFasinap').append(
			  "<div class='list-box'>"+
			  "<p class='list-nama'>"+data.nama+
			  "<span class='list-addr'>-("+data.kamar+" kamar, "+data.kapasitas+" orang)</span></p>"+
			  "<p class='list-addr'>"+data.alamat+"</p>"+
			  "<p class='list-addr'>No. Kontak: "+data.telp+"</p>"+
			  "</div>");
		});
	});
	
	$('#prevPage').click(function(){
		var curPage = $('#nmHlm').html();
		if(curPage==1){
			var sebelum = 1;
		}else{
			var sebelum = parseInt(curPage) - 1;
		}
		
		$('#nmHlm').html(sebelum);
		$.getJSON(serverpage+'?mn=akodikecam&kat='+tfi+'&kcmt='+kec+'&row='+
		sebelum,function(fasinap){
			$('#dftFasinap div').remove();	
			$.each(fasinap,function(index,data){
			$('#dftFasinap').append(
			  "<div class='list-box'>"+
			  "<p class='list-nama'>"+data.nama+
			  "<span class='list-addr'>-("+data.kamar+" kamar, "+data.kapasitas+" orang)</span></p>"+
			  "<p class='list-addr'>"+data.alamat+"</p>"+
			  "<p class='list-addr'>No. Kontak: "+data.telp+"</p>"+
			  "</div>");
			});
		});
	});
	
	$('#nextPage').click(function(){
		var curPage = $('#nmHlm').html();
		var berikut = parseInt(curPage) + 1;
		
		$('#nmHlm').html(berikut);
		$.getJSON(serverpage+'?mn=akodikecam&kat='+tfi+'&kcmt='+kec+'&row='+
		berikut,function(fasinap){
			$('#dftFasinap div').remove();	
			$.each(fasinap,function(index,data){
			$('#dftFasinap').append(
			  "<div class='list-box'>"+
			  "<p class='list-nama'>"+data.nama+
			  "<span class='list-addr'>-("+data.kamar+" kamar, "+data.kapasitas+" orang)</span></p>"+
			  "<p class='list-addr'>"+data.alamat+"</p>"+
			  "<p class='list-addr'>No. Kontak: "+data.telp+"</p>"+
			  "</div>");
			});
		});
	});

});

