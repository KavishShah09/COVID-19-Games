var checkboxes = document.querySelectorAll('input');
var audio = document.getElementById('sound1');

checkboxes.forEach((checkbox) => {
	checkbox.addEventListener('click', function (e) {
		audio.currentTime = 0;
		audio.play();
	});
});
