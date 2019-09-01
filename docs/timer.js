const timer_days = document.querySelector("h1");
const timer_hours = document.querySelector("h2");
const timer_minutes = document.querySelector("h3");
const timer_seconds = document.querySelector("h4");
const targetDate = new Date("Mar 12, 2020 00:00:00").getTime();
const CLICKED_CLASS = "clicked";

function getTime(){
	const now = new Date().getTime();
	const diff = targetDate - now;
	const days = Math.floor(diff/(1000*60*60*24));
	const hours = Math.floor(diff%(1000*60*60*24)/(1000*60*60));
	const minutes = Math.floor(diff%(1000*60*60)/(1000*60));
	const seconds = Math.floor(diff%(1000*60)/1000);
  timer_days.innerText = `${days} Days`
  timer_hours.innerText = `${hours < 10 ? `0${hours}` : hours} Hours`
  timer_minutes.innerText = `${minutes < 10 ? `0${minutes}` : minutes} Minutes`
  timer_seconds.innerText = `${seconds < 10 ? `0${seconds}` : seconds} Seconds`
	return diff;
}

function handleClick(){
	timer_days.classList.toggle(CLICKED_CLASS);
  timer_hours.classList.toggle(CLICKED_CLASS);
  timer_minutes.classList.toggle(CLICKED_CLASS);
  timer_seconds.classList.toggle(CLICKED_CLASS);
}

function init(){
	setInterval(function(){
		const diff = getTime();
		if(diff<0){
			clearInterval();
			timer.innerText = "Freedom!"
		}
	}, 1000);
	timer_days.addEventListener("click", handleClick);
  timer_hours.addEventListener("click", handleClick);
  timer_minutes.addEventListener("click", handleClick);
  timer_seconds.addEventListener("click", handleClick);
}
init();