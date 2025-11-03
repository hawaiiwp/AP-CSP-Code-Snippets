var count =0;
updateScreen();

onEvent("upButton", "click", function() {
  count = count + 1;
  updateScreen();
});

function updateScreen (){
  setText("countLabel", count);
  if (count > 20){
    setProperty("countLabel", "text-color", "green");
  }
}
