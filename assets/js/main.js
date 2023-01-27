// scroll navbar
$(window).scroll(function () {
	var scroll = $(window).scrollTop();
	if (scroll > 90) {
		$("#navbar-fixed-top").css("background", "#FFEEEF");
		$("#navbar-fixed-top").css("box-shadow", "rgb(0 0 0 / 46%) 8px 8px 33px")
	}
	else {
		$("#navbar-fixed-top").css("background", "none");
		$("#navbar-fixed-top").css("box-shadow", "none")

	}
})
// scroll navbar
$(window).scroll(function () {
	var scroll = $(window).scrollTop();
	if (scroll > 100) {
		$("#register-form").css("background", "#000000");
		$("#register-form").css("box-shadow", "rgb(0 0 0 / 46%) 8px 8px 33px")
	}
	else {
		$("#register-form").css("background", "none");
		$("#register-form").css("box-shadow", "none")

	}
})
// MOBILE SCREEN SIDE NAV
var sidebarBox = document.querySelector('#box');
var sidebarBtn = document.querySelector('#btn');
var pageWrapper = document.querySelector('#main-content');

sidebarBtn.addEventListener('click', function (event) {

	if (this.classList.contains('active')) {
		this.classList.remove('active');
		sidebarBox.classList.remove('active');
	} else {
		this.classList.add('active');
		sidebarBox.classList.add('active');
	}
});

pageWrapper.addEventListener('click', function (event) {

	if (sidebarBox.classList.contains('active')) {
		sidebarBtn.classList.remove('active');
		sidebarBox.classList.remove('active');
	}
});

window.addEventListener('keydown', function (event) {

	if (sidebarBox.classList.contains('active') && event.keyCode === 27) {
		sidebarBtn.classList.remove('active');
		sidebarBox.classList.remove('active');
	}
});
// show and hide div
// function showDiv(that) {
//     var len = document.getElementById('div1').length;
//     for (var i = 0; i < len; i++) {
//         document.getElementById('div')[i].style.display = "none";
//     }
// var val =  that.value;
//  document.getElementById(val).style.display = "block";
// }
$('.Show').click(function() {
    $('#target').show(500);
    $('.Show').hide(0);
    $('.Hide').show(0);
});
$('.Hide').click(function() {
    $('#target').hide(500);
    $('.Show').show(0);
    $('.Hide').hide(0);
});
$('.toggle').click(function() {
    $('#target').toggle('slow');
});