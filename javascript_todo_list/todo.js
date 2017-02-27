//Each item should look like this:
// <li><input type="checkbox" name=""><span> Write this tutorial</span></li>

// Lessions learned
// - Avoid global variables
// - Strive to make functions reusable

// function addNewItem() {
// 	var listItem =document.createElement("li");
// 	listItem.innerText = "Hello";

// 	var list = document.getElementById("todoList");
// 	list.appendChild(listItem);
// }

// var btnNew = document.getElementById("btnAdd");
// btnNew.onclick = addNewItem;

function updateItemStatus() {
	var cbId = this.id.replace("cb_", "");
	var itemText = document.getElementById("item_" + cbId);

	if (this.checked) {
		itemText.style.textDecoration = "line-through";
		itemText.style.color = "#c00";
		itemText.style.fontWeight = "800";
	} else {
		itemText.style.textDecoration = "none";
		itemText.style.color = "#000";
		itemText.style.fontWeight = "400";
	}
}

function addNewItem(list, itemText) {
//Each item should look like this:
// <li>
//	<input type="checkbox" name="">
//	<span> Write this tutorial</span>
//</li>
	totalItems++;
	var listItem =document.createElement("li"); // variable global
	
	var checkBox = document.createElement("input");
	checkBox.type = "checkBox";
	checkBox.id = "cb_" + totalItems;
	checkBox.onclick = updateItemStatus;

	var span = document.createElement("span");
	span.id = "item_" + totalItems;
	span.innerText = itemText;

	listItem.appendChild(checkBox);
	listItem.appendChild(span);

	
	list.appendChild(listItem);
}

var totalItems = 0;
var inItemText = document.getElementById("inItemText");
inItemText.focus();
inItemText.onkeyup = function(event) {

	//var itemText =prompt("What should we name this new item?");
	//var inItemText = document.getElementById("inItemText");
	
	// Event.which(13) -> Enter
	if (event.which == 13) {

		var itemText = inItemText.value;
		if (!itemText || itemText == "" || itemText == " "){
			return false;
		}

		addNewItem(document.getElementById("todoList"), itemText);

		inItemText.focus();
		inItemText.select();
	}
};