var serverpage='http://wisata.banjarnegara-foss.web.id/mobileSrv/';
localStorage.setItem('halaman','1');
$('document').ready(function(){
	
	$('#cam').change(function(){
		$('#staseya').show();
		$('#tarya').hide();
		$('#pagina').hide();
		var cam = $('#cam').val();
		$.getJSON(serverpage+'?mn=statdaya&cam='+cam,function(ragambu){
			$('#rb_kab tr').remove();
			$.each(ragambu,function(index,data){
				$('#rb_kab').append(
				"<tr>"+
				"<td><a href=javascript:void(0) onClick=dftSeBu(this.innerHTML)>"+data.kat+"</a></td>"+
				"<td align='right'>"+data.jml+" Kelompok</td>"+
				"</tr>");
			});
		});
	});
	
	$('#nextp').click(function(){
		var pn = localStorage.getItem('halaman');
		var kt = localStorage.getItem('kat');
		var np = parseInt(pn) + 1;
		localStorage.setItem('halaman',np);
		dftSeBu(kt);
	});
	
	$('#prevp').click(function(){
		var pn = localStorage.getItem('halaman');
		var kt = localStorage.getItem('kat');
		if(parseInt(pn)==1){
			localStorage.setItem('halaman','1');
		}else{
			var pp = parseInt(pn) - 1;
			localStorage.setItem('halaman',pp);
		}
	dftSeBu(kt);
	});
});

function initContent(){
	$('#pagina').hide();
	$.getJSON(serverpage+'?mn=akomocamat&obj=ragamBudaya',function(kecamatan){
		$('#cam option').remove();
		$.each(kecamatan,function(index,data){
			$('#cam').append(
			"<option>"+data.kec+"</option>");
		});
	});
	
	$.getJSON(serverpage+'?mn=statdaya&cam=%',function(ragambu){
		$('#rb_kab tr').remove();
		$.each(ragambu,function(index,data){
			$('#rb_kab').append(
			"<tr>"+
			"<td>"+data.kat+"</td>"+
			"<td align='right'>"+data.jml+"</td>"+
			"</tr>");
		});
	});
}

function dftSeBu(kat){
	localStorage.setItem('kat',kat);
	$('#staseya').hide();
	$('#tarya').show();
	var cam = $('#cam').val();
	var pn = localStorage.getItem('halaman');
	$.getJSON(serverpage+'?mn=dafniya&cam='+cam+'&kat='+kat+'&row='+pn,function(ragambu){
		$('#tarya div').remove();
		$.each(ragambu,function(index,data){
			$('#tarya').append(
			"<div class='list-box'>"+
			"<p class='list-nama'>"+data.nama+
			"<span class='list-addr'> ("+data.desa+")</span></p>"+
			"<p class='list-addr'>Milik: "+data.pemilik+" telp.: "+data.telp+"</p>"+
			"</div>");
		});
	});
	$('#pagina').show();
}

