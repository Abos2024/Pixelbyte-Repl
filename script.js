
        $(document).ready(function() {
				var progressPath = document.querySelector('.progress-wrap path');
				var pathLength = progressPath.getTotalLength();

				progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
				progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
				progressPath.style.strokeDashoffset = pathLength;
				progressPath.getBoundingClientRect();
				progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear'

				var updateProgress = function() {
					var scroll = $(window).scrollTop();
					var height = $(document).height() - $(window).height();
					var progress = pathLength - (scroll * pathLength / height);
					progressPath.style.strokeDashoffset = progress;
				}

				updateProgress();
				$(window).scroll(updateProgress);

				var offset = 50;
				var duration = 550;

				jQuery(window).on('scroll', function() {
					if(jQuery(this).scrollTop() > offset) {
						jQuery('.progress-wrap').addClass('active-progress');
					} else {
						jQuery('.progress-wrap').removeClass('active-progress');
					}
				});

				jQuery('.progress-wrap').on('click', function(event) {
					event.preventDefault();
					jQuery('html, body').animate({scrollTop: 0}, duration);
					return false;
        })
var div1 = document.getElementById("myDIV1");
div1.style.display = 'none';
/*
  $('#click1').click(function () {
    var media = window.matchMedia("(max-width: 900px)");
    if($(this).text() == 'unfold_more')
         $(this).text('unfold_less');
    else
        $(this).text( 'unfold_more');
  if (div1.style.display === "none" && media.matches) {
    div1.style.display = "grid";
  } else if (div1.style.display === "grid" && media.matches) {
    div1.style.display = "none";
  } else if (div1.style.display === "flex") {
    div1.style.display = "none";
  }  else {
    div1.style.display = "flex";
  }     
});*/
 var div2 = document.getElementById("myDIV2");
div2.style.display = 'none';
  $('#click2').click(function () {
    var media = window.matchMedia("(max-width: 900px)");
    if($(this).text() == 'unfold_more')
         $(this).text('unfold_less');
    else
        $(this).text( 'unfold_more');
  if (div2.style.display === "none" && media.matches) {
    div2.style.display = "grid";
  } else if (div2.style.display === "grid" && media.matches) {
    div2.style.display = "none";
  } else if (div2.style.display === "flex") {
    div2.style.display = "none";
  }  else {
    div2.style.display = "flex";
  }     
});
/*var div3 = document.getElementById("myDIV3");
div3.style.display = 'none';
  $('#click3').click(function () {
    var media = window.matchMedia("(max-width: 900px)");
    if($(this).text() == 'unfold_more')
         $(this).text('unfold_less');
    else
        $(this).text( 'unfold_more');
  if (div3.style.display === "none" && media.matches) {
    div3.style.display = "grid";
  } else if (div3.style.display === "grid" && media.matches) {
    div3.style.display = "none";
  } else if (div3.style.display === "flex") {
    div3.style.display = "none";
  }  else {
    div3.style.display = "flex";
  }     
});*/
var div4 = document.getElementById("myDIV4");
div4.style.display = 'none';
  $('#click4').click(function () {
    var media = window.matchMedia("(max-width: 900px)");
    if($(this).text() == 'unfold_more')
         $(this).text('unfold_less');
    else
        $(this).text( 'unfold_more');
  if (div4.style.display === "none" && media.matches) {
    div4.style.display = "grid";
  } else if (div4.style.display === "grid" && media.matches) {
    div4.style.display = "none";
  } else if (div4.style.display === "flex") {
    div4.style.display = "none";
  }  else {
    div4.style.display = "flex";
  }     
});
var div5 = document.getElementById("myDIV5");
div5.style.display = 'none';
  $('#click5').click(function () {
    var media = window.matchMedia("(max-width: 900px)");
    if($(this).text() == 'unfold_more')
         $(this).text('unfold_less');
    else
        $(this).text( 'unfold_more');
  if (div5.style.display === "none" && media.matches) {
    div5.style.display = "grid";
  } else if (div5.style.display === "grid" && media.matches) {
    div5.style.display = "none";
  } else if (div5.style.display === "flex") {
    div5.style.display = "none";
  }  else {
    div5.style.display = "flex";
  }     
});


var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
$(function () {
  var includes = $('[data-include]')
  $.each(includes, function () {
    var file = 'views/' + $(this).data('include') + '.html'
    $(this).load(file)
  })})})