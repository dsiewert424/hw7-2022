var video = document.querySelector("#player1");
var vol = document.querySelector("#volume");
var numTimesSlowed = 0;
var numTimesSpeed = 0;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;

});

document.querySelector("#play").addEventListener("click", function() {
	video.defaultPlaybackRate = 1.0;
	video.play()
	vol.innerHTML = slider.value + '%';
	video.volume = slider.value * 0.01;
	video.muted = false;
})

document.querySelector("#pause").addEventListener("click", function() {
	video.pause()
})

document.querySelector("#slower").addEventListener("click", function() {
	numTimesSlowed += 1;
	video.playbackRate = (1 - (numTimesSlowed * 0.1) + (numTimesSpeed * 0.1));
	console.log(video.playbackRate)
})

document.querySelector("#faster").addEventListener("click", function() {
	numTimesSpeed += 1;
	video.playbackRate = (1 - (numTimesSlowed * 0.1) + (numTimesSpeed * 0.1));
	console.log(video.playbackRate)
})

document.querySelector("#skip").addEventListener("click", function() {
	var curr = video.currentTime + 10;
	video.currentTime = curr;
	if (video.ended) {
		video.currentTime = 0;
	}

})

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true;
		document.querySelector("#mute").innerHTML = 'Unmute';
	}
	else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = 'Mute';
	}
	// video.volume = 0;
	// document.getElementById("volume").innerHTML = 0;
	// document.getElementById("slider").value = 0;
})

document.querySelector("#slider").addEventListener("input", function() {
	video.volume = document.getElementById("slider").value * 0.01;
	vol.innerHTML = document.getElementById("slider").value + '%';
})

document.querySelector("#vintage").addEventListener("click", function() {
	video.className = "oldSchool";
})
document.querySelector("#orig").addEventListener("click", function() {
	video.className = "oldSchool";
	video.className = video.className.replace( /(?:^|\s)oldSchool(?!\S)/g , '' )
})



