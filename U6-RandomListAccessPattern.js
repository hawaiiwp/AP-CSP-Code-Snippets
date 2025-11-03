var index = 0;
var fruitList = ["banana", "apple", "pear"];

onEvent("randomFruitButton", "click", function() {
  index = randomNumber(0, fruitList.length - 1);
  updateScreen();
});

function updateScreen() {
  setProperty("fruitLabel", "text", fruitList[index]);
}