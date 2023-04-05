function getMessage() {
    var time = new Date().getHours();

    if (time < 12) {
      return "Goeiemorgen";
    } else if (time < 18) {
      return "Goeie!";
    } else {
      return "Good evening!";
    }
  }

  window.onload = function() {
    var greeting = document.getElementById("introText");
    greeting.innerText = getMessage();
  };