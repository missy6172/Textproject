/*�X���[�X�ɃX�N���[��*/
$(function(){
	$('a[href^=#]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});


/*�X�}�z�p���j���[*/
$(function(){
  $("#toggle a").click(function(){
    $("#gNav ul").slideToggle();
    return false;
  });
  $(window).resize(function(){
    var win = $(window).width();
    var p = 680;
    if(win > p){
      $("#gNav ul").show();
    } else {
      $("#gNav ul").hide();
    }
  });
});

/* �M�̃����e�i���X */
$(document).ready( function(){
	$('#maintenanceSec li a').hover(
		function(){
			$(this).parent().css( 'background-color', '#F4EEE1' );
		}
		,
		function(){
			$(this).parent().css( 'background-color', 'transparent' );
		}
	);
});

function switchLanguage(strLocal){
    var curUrl =  window.location.href;
    if(strLocal == "ja"){
        curUrl = curUrl.replace("/en/", "/ja/");
    }else{
        var host = $("#gohome").attr("href") + "/";
        curUrl = curUrl.replace("/en/", "/");
        curUrl = curUrl.replace(host, host + "en/");
    }
     window.location.href = curUrl;
}
