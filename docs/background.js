const body = document.querySelector("body");
const IMG_NUM = 11;

function generateRandom(){
	const num = Math.floor(Math.random()*IMG_NUM)+1;
	return num;
}
function paintImage(){
	const num = generateRandom();
	const img = new Image();
	img.src = `./images/${num}.jpg`;
	img.classList.add("bgImage");
	body.prepend(img);
}

function init(){
	paintImage();
}
init();
