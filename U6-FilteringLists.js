# List Filter Pattern
## Filtering One List
### Filter on starting letter
var list = ["apples", "oranges", "apricots", "bananas"];

var filteredList = [];

filter();

function filter(){
  for(var i = 0; i < list.length; i++){
	var firstLetter = list[i].substring(0, 1);
	if(firstLetter == "a"){
	  appendItem(filteredList, list[i]);
	}
  }
}


### Filter on string length
var list = ["apples", "oranges", "apricots", "bananas"];

var filteredList = [];

filter();

function filter(){
  for(var i = 0; i < list.length; i++){
	var wordLength = list[i].length;
	if(wordLength > 7){
	  appendItem(filteredList, list[i]);
	}
  }
}


## Filter multiple lists
var studentNameList = ["Sal", "Maya", "Rudy", "Gina", "Paris"];
var studentGradeList = [10, 11, 10, 12, 11];
var studentAgeList = [16, 18, 15, 17, 17];

var filteredStudentNameList = [];
var filteredStudentGradeList = [];
var filteredStudentAgeList = [];

filter();

function filter(){
  // start with blank lists
  filteredStudentNameList = [];
  filteredStudentGradeList = [];
  filteredStudentAgeList = [];
  
  for(var i = 0; i < studentGradeList.length; i++){
	if(studentGradeList[i] == 11){
	  appendItem(filteredStudentNameList, studentNameList[i]);
	  appendItem(filteredStudentGradeList, studentGradeList[i]);
	  appendItem(filteredStudentAgeList, studentAgeList[i]);
	}
  }
}
