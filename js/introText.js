function getMessage() {
    var time = new Date().getHours();

    if (time < 12) {
      return "Goeiemorgen!";
    } else if (time < 18) {
      return "Goeiemiddag!";
    } else {
      return "Goeieavond!";
    }
  }

  window.onload = function() {
    var greeting = document.getElementById("greeting");
    greeting.innerText = getMessage();
  };

//   function getMessage() {

//     window.onload = function() {
//         var introText = document.getElementById("introText")
//         introText.innerText = getMessage() + "Welkom op de website van Draak in Nood. Wij zijn een stichting die gewonde draakjes langs de weg helpt een nieuw thuis te zoeken.";
//     }
//   }
