var picFullBg = document.getElementById("picFullBg");
var picFullImg = document.getElementById("picFullImg");
var picBigFullBg = document.getElementById("picBigFullBg");
var picBigFullImg = document.getElementById("picBigFullImg");
function openPicFull(Img){
	picFullBg.style.display = "flex";
	picFullImg.src = Img;
}
function openBigPicFull(Img){
	picBigFullBg.style.display = "flex";
	picBigFullImg.src = Img;
}
function closePicFull(){
	picFullBg.style.display = "none";
}
function closeBigPicFull(){
	picBigFullBg.style.display = "none";
}