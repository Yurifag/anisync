window.onload = function() {
  var password_input = document.getElementsByClassName("hidden")[0];
  var checkbox = document.getElementsByName("private")[0];
  checkbox.addEventListener("click", function() {
    if(checkbox.checked) {
      password_input.className = "";
    }
    else {
      password_input.className = "hidden";
    }
  });
}