var serverpage='http://wisata.banjarnegara-foss.web.id/mobileSrv/';
$('document').ready(function(){
	$.getJSON(serverpage+'?mn=akomodasi',function(destinasi){
		$('#akosttk tr').remove();	
		$.each(destinasi,function(index,data){
			$('#akosttk').append(
			  "<tr>"+
			  "<td>"+data.kat+"</td>"+
			  "<td align='right'>"+data.qty+"</td>"+
			  "<td align='right'>"+data.kmr+"</td>"+
			  "<td align='right'>"+data.kap+"</td>"+
			  "</tr>");
		});
	});
	
	$.getJSON(serverpage+'?mn=akomocamat&obj=penginapan',function(kecamatan){	
		$.each(kecamatan,function(index,data){
			$('#slKcmt').append("<option>"+data.kec+"</option>");
		});
	});
	
	$('#slKcmt').change(function(){
		var kcmt = $('#slKcmt').val();
		$('#akocmt tr').remove();
		$.getJSON(serverpage+'?mn=akomostamat&kec='+kcmt,function(penginapan){
			$.each(penginapan,function(index,data){
				$('#akocmt').append(
				"<tr>"+
				"<td><a href='javascript:void(0)' onClick=listFasinap(this.innerHTML)>"+data.kat+"</a></td>"+
				"<td align='right'>"+data.qty+"</td>"+
				"<td align='right'>"+data.kmr+"</td>"+
				"<td align='right'>"+data.kap+"</td>"+
				"</tr>");
			})
		});
	});
	
});

function listFasinap(tipe){
	var kcmt = $('#slKcmt').val();
	localStorage.setItem('kecamatan',kcmt);
	localStorage.setItem('tyfasinap',tipe);
	window.location='fasinapcam.html';
}
