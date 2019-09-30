$(document).ready(function(){
	$ventana = $(window);//funcion como la llama jquery
//hace que la panatalla sea del alto del navegador
	$('#intro').height($ventana.height());
		$ventana.scroll(function(){ 
		$('div.background').each(function(index, item){
			var $scroll = $(item);
			var yPos = -($ventana.scrollTop()/$scroll.data('speed'));
			var coords = '50%' + yPos + 'px';
			$scroll.css({backgroundPosition: coords});
		});//cierra linea 6
	});//cierra linea 5
});// cierra linea 1