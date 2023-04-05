function getMessage() {
    var time = new Date().getHours();

    if (time < 12) {
      return "Good morning!";
    } else if (time < 18) {
      return "Good afternoon!";
    } else {
      return "Good evening!";
    }
  }

  window.onload = function() {
    var greeting = document.getElementById("introText");
    greeting.innerText = getMessage();
  };