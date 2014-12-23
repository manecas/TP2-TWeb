//auto resize

$(document).ready(function(){
    altura = $(window).height() - 20;
    $('#conteudo').css('height', altura);
});
$(window).resize(function(){
    altura = $(window).height() - 20;
    $('#conteudo').css('height', altura);
});

//slide show

 $(document).ready(function(){
	$('#slideshow').click(function(){
	
	function slideSwitch(){
		var $activa=$('#slideshow img.active');
		/*Aqui tem o ex 2.2 */
		if($activa.next().length==1)
		{
		var $proxima=$activa.next();/*Já estava antes do 2.2 */
		}else
		{
			var $proxima=$('#slideshow img:first');
		}
		/*Acaba aqui o 2.2 */
		
		/*exercicio2.5*/
		$activa.addClass('last-active');
		$proxima.addClass('active')
		.css({opacity:0.0})
		.animate({opacity:1.0},2000,function(){
		$activa.removeClass('active last-active');
	});
	};
	setInterval(slideSwitch,3000);
	});    
});
