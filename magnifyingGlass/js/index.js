// 缩略图
var nextIndex = 0;
var liEls = document.querySelectorAll(".image-list>li");
document.querySelectorAll(".big-image-list>li.show")
var num = liEls.length;
document.querySelector(".prev").addEventListener("click", function() {
	if (nextIndex === 0) return;
	slide(--nextIndex)
})
document.querySelector(".netx").addEventListener("click", function() {
	if (nextIndex + 5 >= num) return;
	slide(++nextIndex)
	console.log(nextIndex)
})


// 移动
function slide(nextIndex) {
	document.querySelector(".image-list").style.transform = `translateX(-${nextIndex*20}%)`;
}

// 展示大图片
liEls.forEach((item, index) => {
	item.onclick = function() {
		console.log(index)

		document.querySelector(".big-image-list>li.show").className = "";
		document.querySelectorAll(".big-image-list>li")[index].className = "show";
	}
})


// 放大镜
document.querySelector(".big-image-list-wrapper").onmousemove = function(event) {
	var zoomEl = this.querySelector(".zoom"),
		x,
		y,
		mouseX = event.clientX - this.getBoundingClientRect().left,// event.clientX，它提供事件发生时的应用客户端区域的水平坐标
		mouseY = event.clientY - this.getBoundingClientRect().top,
		minX = zoomEl.getBoundingClientRect().width / 2,
		minY = zoomEl.getBoundingClientRect().height / 2,
		maxX = this.getBoundingClientRect().width - minX,
		maxY = this.getBoundingClientRect().height - minY;

	// 计算方框x轴位置
	if (mouseX <= minX) {
		x = 0;
	} else if (mouseX >= maxX) {
		x = maxX - minX
	} else {
		x = mouseX - minX;
	}

	// 计算方框y轴位置
	if (mouseY <= minY) {
		y = 0;
	} else if (mouseY >= maxY) {
		y = maxY - minY;
	} else {
		y = mouseY - minY;
	}

	zoomEl.style.left = `${ x }px`;
	zoomEl.style.top = `${ y }px`;
	// 加1减1是为了减去边框 
	zoomEl.style.backgroundPosition = `${-x+1}px ${-y+1}px`;

}

// 设置背景图片

// MouseEvent 接口指用户与指针设备( 如鼠标 )交互时发生的事件
document.querySelector(".big-image-list-wrapper").onmouseover = function() {
	var imgPath = this.querySelector("li.show img").src;
	var zoomEl = this.querySelector(".zoom");
	zoomEl.style.backgroundImage = `url(${imgPath})`;

	var width = this.getBoundingClientRect().width;
	var height = this.getBoundingClientRect().height;
	zoomEl.style.backgroundSize = `${ width -2}px ${ height-2 }px`

}
