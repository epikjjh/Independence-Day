const timer = document.querySelector(".timer");
const targetDate = new Date("Mar 12, 2020 00:00:00").getTime();
const CLICKED_CLASS = "clicked";

function getTime(){
	const now = new Date().getTime();
	const diff = targetDate - now;
	const days = Math.floor(diff/(1000*60*60*24));
	const hours = Math.floor(diff%(1000*60*60*24)/(1000*60*60));
	const minutes = Math.floor(diff%(1000*60*60)/(1000*60));
	const seconds = Math.floor(diff%(1000*60)/1000);
	timer.innerText = `${days} Days : ${hours < 10 ? `0${hours}` : hours} Hours : ${minutes < 10 ? `0${minutes}` : minutes} Minutes : ${seconds < 10 ? `0${seconds}` : seconds} Seconds`;
	return diff;
}

function handleClick(){
	timer.classList.toggle(CLICKED_CLASS);
}

function init(){
	timer.addEventListener("click", handleClick);
	setInterval(function(){
		const diff = getTime();
		if(diff<0){
			clearInterval();
			timer.innerText = "Freedom!"
		}
	}, 1000);
}
init();
