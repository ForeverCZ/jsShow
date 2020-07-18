var slideIndex = 1;
var time;

showSlides(slideIndex)

function plusSlides(n) {
	clearInterval(time)
	showSlides(slideIndex += n)
	auto();
}

function plusSlides(n) {
	clearInterval(time)
	showSlides(slideIndex += n)
	auto();
}

function currentSlide(obj, n) {
	clearInterval(time)
	slideIndex = n
	showSlides(slideIndex)
	auto();
	console.log(obj.dataset.index)
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none"
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "")
	}
	slides[slideIndex - 1].style.display = "block"
	dots[slideIndex - 1].className += " active"
}

function auto() {
	time = setInterval(res => {
		slideIndex++
		showSlides(slideIndex)

	}, 2000)
}
// 自动播放
auto();
