const finishDate = new Date("Mar 12, 2020 00:00:00").getTime();
const startDate = new Date("April 23, 2018 00:00:00").getTime();
const duration = finishDate - startDate;
const percent = document.querySelector(".percentage");

function handleTransition(){
 	percent.style.fontSize = "70%";
}

function init(){
	const today = new Date().getTime();
	const diff = today - startDate;
	const ratio = (diff/duration*100).toFixed(1);
	const barRatio = (ratio*0.98).toFixed(1);
	percent.addEventListener("transitionend", handleTransition);
	percent.style.width = `${barRatio}%`;
	percent.innerText = `${ratio}%`;
}
init();