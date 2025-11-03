var index = 0;
var myList = ["banana", "apple", "pear"];

onEvent("leftButton", "click", function() {
  if (index > 0) {
	index = index - 1;
  }
  updateScreen();
});

onEvent("rightButton", "click", function() {
  if (index < myList.length - 1) {
	index = index + 1;
  }
  updateScreen();
});

function updateScreen() {
  setProperty("fruitLabel", "text", myList[index]);
}
