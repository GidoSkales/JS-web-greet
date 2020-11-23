(function greet() {
	//MIN ACT.JS
	let closeBtn = document.querySelector("#close");
	let closeWin = document.querySelector("#win");
	let msg = document.querySelector("#msg");
	closeBtn.addEventListener("click", function(){
		closeWin.setAttribute("style", "display: none;");
		closeBtn.setAttribute("style", "display: none;");
	});
	//TIME.JS
	let date = new Date();
	let hr = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();
	let allTime = `${hr} : ${min} : ${sec}`;
	console.log(allTime);
	let greeted;
	
	if (hr >= 1 && hr < 11) {
		console.log(`Good Morning Gido`);
		alert(`Good Morning Gido. The time is ${allTime}`);
		msg.innerHTML = `THE TIME IS ${allTime}`;
	}
	else if (hr >= 12 && hr < 16) {
		console.log(`Good Afternoon Gido`);
		alert(`Good Afternoon Gido. The time is ${allTime}`);
		msg.innerHTML = `THE TIME IS ${allTime}`;
	}
	else if (hr >= 17 && hr < 20) {
		console.log(`Good Evening Gido`);
		alert(`Good Evening Gido. The time is ${allTime}`);
		msg.innerHTML = `THE TIME IS ${allTime}`;
	}
	else if (hr >= 21 && hr < 23) {
		console.log(`Good Night Gido`);
		alert(`Good Night Gido the time is ${allTime}`);
		msg.innerHTML = `THE TIME IS ${allTime}`;
	}
}())
