let choiceButtons = document.querySelectorAll(".object")
let playButton = document.querySelector(".game__button-btn")
let robotImage = document.querySelector(".robot")
let resultBlock = document.querySelector(".result")
let resultText = document.querySelector(".result__text")
let indexOfChoice;

choiceButtons.forEach(button => {

	button.addEventListener("click", function () {

		choiceButtons.forEach(b => {
			if (b !== this) {

				button.classList.add("clicked")
				if (this === choiceButtons[0]) {
					indexOfChoice = 1;

				} else if (this === choiceButtons[1]) {
					indexOfChoice = 2;
				} else if (this === choiceButtons[2]) {
					indexOfChoice = 3;
				}
			}
			b.classList.remove("clicked")

		})
	})
});

function showAndHide(element) {
	element.style.display = "flex"
	playButton.style.display = "none"
	setTimeout(function () {
		element.style.display = "none"
		playButton.style.display = "block"

	}, 1000)

}


playButton.addEventListener("click", function () {
	let robotChoice = Math.floor(Math.random() * 3) + 1

	if (indexOfChoice) {

		robotImage.style.background = getComputedStyle(choiceButtons[robotChoice - 1]).background

		if (robotChoice === indexOfChoice) {
			resultText.innerHTML = "TIE"
			resultText.style.color = "yellow"
		} else if (
			robotChoice === 1 && indexOfChoice === 2
			|| robotChoice === 2 && indexOfChoice === 3
			|| robotChoice === 3 && indexOfChoice === 1
		) {
			resultText.innerHTML = "YOU WON"
			resultText.style.color = "green"

		} else {
			resultText.innerHTML = "YOU LOST"
			resultText.style.color = "red"
		}
		showAndHide(resultBlock)


	} else {
		alert("please choose")
	}

})


