$(document).ready(function() {
	document.body.addEventListener('touchmove', function(e) {
	  // This prevents native scrolling from happening.
	  e.preventDefault();
	}, false);
	
	$('.startBtn').click(function() {
		$(this).parent('#cover').removeClass('active').addClass('done');
		$(this).parent('#cover').siblings('#regpage').addClass('active');
	});
	
	$('.regBtn').css({opacity: '0'});
	
	$('.regBtn').click(function() {
		$('#regpage').removeClass('active').addClass('done');
		$('#mech').addClass('active');
		
		$.ajax({ 
		type: "POST",
		crossDomain: true,
		dataType : 'jsonp', 
		data: {name: $('#name').val(),prc:$('#prc').val(),address:$('#address').val(),nameb:$('#name2').val() ,prcb:$('#prc2').val() ,addressb:$('#address2').val()},
		url: "https://detbucket.com/index.php/powerupservice/register" }).done();		
		
	});
	
	$('.playBtn').click(function() {
		$(this).parent('#mech').removeClass('active').addClass('done');
		$(this).parent('#mech').siblings('#q1').addClass('active');
		document.getElementById('clocktick').play();
		$('#counter').countdown({
          image: 'css/images/digits.png',
          startTime: '00:10',
          timerEnd: function(){ endtime(); },
          format: 'mm:ss'
        });
	});
	
	
	$('.intel-chart a').each(function() {
		$(this).click(function() {
			if($(this).hasClass('i1')) {
				document.getElementById('clocktick').pause();
				$('#q1,.intel-chart').addClass('right').removeClass('wrong');
				$('.intel-chart').children().remove('a').delay(800).queue(function() {
					document.getElementById('clocktick').play();
					q2();
				});
				
			} else {
				$('#q1,.intel-chart').toggleClass('wrong');
			}
		});
	});
	$('.motor-chart a').each(function() {
		$(this).click(function() {
			if($(this).hasClass('m2')) {
				document.getElementById('clocktick').pause();
				$('#q2').addClass('right').removeClass('wrong');
				$('.motor-chart').addClass('right').removeClass('wrong');
				$('.motor-chart').children().remove('a').delay(800).queue(function() {
					document.getElementById('clocktick').play();
					q3();
				});
				
			} else {
				$('#q2,.motor-chart').toggleClass('wrong');
			}
		});
	});
	$('.emo-chart a').each(function() {
		$(this).click(function() {
			if($(this).hasClass('e4')) {
				document.getElementById('clocktick').pause();
				$('#q3').addClass('right').removeClass('wrong');
				$('.emo-chart').addClass('right').removeClass('wrong');
				$('.emo-chart').children().remove('a').delay(800).queue(function() {
					document.getElementById('clocktick').play();
					q4();
				});
				
			} else {
				$('#q3,.emo-chart').toggleClass('wrong');
			}
		});
	});
	$('.comm-chart a').each(function() {
		$(this).click(function() {
			if($(this).hasClass('c3')) {
				document.getElementById('clocktick').pause();
				$('#q4').addClass('right').removeClass('wrong');
				$('.comm-chart').addClass('right').removeClass('wrong');
				$('.comm-chart').children().remove('a').delay(800).queue(function() {
					document.getElementById('clocktick').play();
					q5();
				});
				
			} else {
				$('#q4,.comm-chart').toggleClass('wrong');
			}
		});
	});
	$('.clock-chart a').each(function() {
		$(this).click(function() {
			if($(this).hasClass('cl2')) {
				document.getElementById('clocktick').pause();
				$('#q5').addClass('right').removeClass('wrong');
				$('.clock-chart').addClass('right').removeClass('wrong');
				$('.clock-chart').children().remove('a').delay(800).queue(function() {
					qw();
				});
				
			} else {
				$('#q5,.clock-chart').toggleClass('wrong');
			}
		});
	});
	
	$('.contBtn').click(function() {
		$(this).parent('#gw').removeClass('active').addClass('done');
		$(this).parent('#gw').siblings('#fin').addClass('active');
	});
	
	$('.finBtn').click(function() {
		location.reload();
	});
	
	
	function q2() {
		if($('#q1 .righttxt').is(":visible")) {
			$('#q1').delay(5000).removeClass('active').addClass('done');
			$('#q2').delay(5000).addClass('active');			
		}
		
	}
	function q3() {
		if($('#q2 .righttxt').is(":visible")) {
			$('#q2').delay(5000).removeClass('active').addClass('done');
			$('#q3').delay(5000).addClass('active');
		}
		
	}
	function q4() {
		if($('#q3 .righttxt').is(":visible")) {
			$('#q3').delay(5000).removeClass('active').addClass('done');
			$('#q4').delay(5000).addClass('active');
		}
		
	}
	
	function q5() {
		if($('#q4 .righttxt').is(":visible")) {
			$('#q4').delay(5000).removeClass('active').addClass('done');
			$('#q5').delay(5000).addClass('active');
		}
		
	}
	
	function qw() {
		if($('#q5 .righttxt').is(":visible")) {
			$('#q5').delay(5000).removeClass('active').addClass('done');
			$('#gw').delay(5000).addClass('active');
			$('#counter').remove();
		}
		
	}
	
	
	function endtime() {
		var active = $('div.active').attr('id');
		$('#' + active).delay(5000).removeClass('active').addClass('done');
		$('#gw').delay(5000).addClass('active');
		$('#counter').remove();

	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

});