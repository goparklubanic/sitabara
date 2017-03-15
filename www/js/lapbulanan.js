var serverpage='http://wisata.banjarnegara-foss.web.id/mobileSrv/';
$('document').ready(function(){
	
	$('#sow').click(function(){
		$('#bllapor').show();
		$('#owlapor').hide();
		$('#lapbulanan').html('');
		
	});
	
	$('#pow').click(function(){
		$('#bllapor').hide();
		$('#owlapor').show();
		$('#lapbulanan').html('');
	});
	
	$('#bllapor').change(function(){
		var buta = $('#bllapor').val();
		$('#lapbulanan div').remove();
		$.getJSON(serverpage+'?mn=porlanan&buta='+buta,function(laporan){
			$.each(laporan,function(index,data){
				$('#lapbulanan').append(
				"<div class='list-box'>"+
				"<p class='list-nama'>Bulan "+data.objwis+"</p>"+
				"<div class='report'>"+
				"<div class='tourist'>WM:"+data.wisman+"</div>"+
				"<div class='tourist'>WN:"+data.wisnus+"</div>"+
				"<div class='revenue'>PDPT: "+data.uang+"</div>"+
				"</div>"+
				"</div>");
			});
			
		});
	});
	
	$('#owlapor').change(function(){
		var ow = $('#owlapor').val();
		$('#lapbulanan div').remove();
		$.getJSON(serverpage+'?mn=lapbulow&ow='+ow,function(laporan){
			$.each(laporan,function(index,data){
				$('#lapbulanan').append(
				"<div class='list-box'>"+
				"<p class='list-nama'>Bulan "+data.bl+"</p>"+
				"<div class='report'>"+
				"<div class='tourist'>WM:"+data.wm+"</div>"+
				"<div class='tourist'>WN:"+data.wn+"</div>"+
				"<div class='revenue'>PDPT: "+data.rv+"</div>"+
				"</div>"+
				"</div>");
			});
			
		});
	});
});
