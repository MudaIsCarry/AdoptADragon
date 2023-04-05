function getMessage() {
    var time = new Date().getHours();

    if (time < 12) {
      return "Goeiemorgen! Welkom op de website van Draak in Nood. Wij zijn een stichting die gewonde draakjes langs de weg helpt een nieuw thuis te zoeken.";
    } else if (time < 18) {
      return "Goeiemiddag! Welkom op de website van Draak in Nood. Wij zijn een stichting die gewonde draakjes langs de weg helpt een nieuw thuis te zoeken.";
    } else {
      return "Goeieavond! Welkom op de website van Draak in Nood. Wij zijn een stichting die gewonde draakjes langs de weg helpt een nieuw thuis te zoeken.";
    }
  }

  window.onload = function() {
    var greeting = document.getElementById("introText");
    greeting.innerText = getMessage();
  };
