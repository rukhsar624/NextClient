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


function displayDiv(target){
	
	let display = document.getElementById(target).style.display;
	if( display==='block'){
		document.getElementById(target).style.display ='none'
	}else{
		document.getElementById(target).style.display ='block'
	}
	console.log(display);

}
// video 
// Show loading animation.
var playPromise = video.play();

if (playPromise !== undefined) {
  playPromise.then(_ => {
	// Automatic playback started!
	// Show playing UI.
  })
  .catch(error => {
	// Auto-play was prevented
	// Show paused UI.
  });
}

