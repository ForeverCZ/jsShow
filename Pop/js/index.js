// 获取弹窗按钮
var modal = document.getElementById("myModel");

// 打开弹窗的按钮对象
var btn = document.getElementById("myBtn");

// 获取<span>元素,用于关闭弹窗
var span = document.querySelector(".close")

var showtext = document.querySelector(".showText")

var writeText = document.querySelector(".writeText")
// 点击按钮,打开弹窗
btn.onclick = () => {
	modal.style.display = "block"
}
// 点击<span>(x),关闭弹窗
span.onclick = () => {
	modal.style.display = "none"

}

// 在用户点击按钮时,关闭弹窗

window.onclick = (event) => {
	if (event.target == modal) {
		modal.style.display = "none"
	}
}

// 实时打印文字
function timeWrite(event) {
	var text = writeText.value;
	showtext.innerHTML = text
}
