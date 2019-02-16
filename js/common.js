$(function() {


	function animation(name){
		$('html , body').stop().animate({scrollTop: $(name).offset().top}, 'slow', 'swing');
	}

	$(window).scroll(function update(){
		if($(this).scrollTop() > $('.bottom-line').height()){
			$('.up-arrow').addClass('active');
		} else {
			$('.up-arrow').removeClass('active');
		}

		if($(this).scrollTop() > $('#about').offset().top-50){
			$('li').removeClass('active');
			$('li.b-about').addClass('active');
		} else $('li').removeClass('active');

		if($(this).scrollTop() > $('#price').offset().top-50){
			$('li').removeClass('active');
			$('li.b-price').addClass('active');
		}

		if($(this).scrollTop() > $('#works').offset().top-50){
			$('li').removeClass('active');
			$('li.b-works').addClass('active');
		}

		if($(this).scrollTop() > $('#contact').offset().top-50){
			$('li').removeClass('active');
			$('li.b-contact').addClass('active');
		}
	})


	$('.up-arrow').click(function(){
		animation('.ishome');
	});
	$('.b-about').click(function(){
		animation('#about');
	});
	$('.b-price').click(function(){
		animation('#price');
	});
	$('.b-works').click(function(){
		animation('#works');
	});
	$('.b-contact').click(function(){
		animation('#contact');
	});

	$(document).ready(function (){
		update();
		});
	
});

function openTab(evt, tabName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tabName).style.display = "flex";
	evt.currentTarget.className += " active";
  }
  document.getElementById("defaultOpen").click();

  function openTab_price(evt_price, tabName_price) {
	var i, tabcontent_price, tablinks_price;
	tabcontent_price = document.getElementsByClassName("tabcontent_price");
	for (i = 0; i < tabcontent_price.length; i++) {
	  tabcontent_price[i].style.display = "none";
	}
	tablinks_price = document.getElementsByClassName("tablinks_price");
	for (i = 0; i < tablinks_price.length; i++) {
	  tablinks_price[i].className = tablinks_price[i].className.replace(" active", "");
	}
	document.getElementById(tabName_price).style.display = "flex";
	evt_price.currentTarget.className += " active";
  }
  document.getElementById("defaultOpen_price").click();


  //acc
  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
	  this.classList.toggle("active");
	  var panel = this.nextElementSibling;
	  if (panel.style.display == "block") {
		panel.style.display = "none";
	  } else {
		panel.style.display = "block";
	  }
	});
  }

  function burger(x) {
	x.classList.toggle("burger");
  }