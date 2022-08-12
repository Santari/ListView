var input = document.getElementById("input");
var button = document.getElementById("button");
var alert = document.getElementById("alert");
var list = document.getElementById("list");

button.onclick = function() {
  var field = input.value.trim;
  if (field == "") {
    alert.style.display = "block";
  } else {
    list.append(field);
  }
}
