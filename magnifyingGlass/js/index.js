var nextIndex = 0;
var liEls=document.querySelectorAll(".image-list>li");
document.querySelectorAll(".big-image-list>li.show")
var num =liEls.length;
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
liEls.forEach((item,index)=>{
	item.onclick=function(){
		console.log(index)
		
		document.querySelector(".big-image-list>li.show").className="";
		document.querySelectorAll(".big-image-list>li")[index].className="show";
	}
})
