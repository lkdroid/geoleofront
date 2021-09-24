<template>
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="style/reset.css">
    <link rel="stylesheet" type="text/css" href="style/fonts.css">
    <link rel="stylesheet" type="text/css" href="style/style.css">

    <title>Game</title>
  </head>

  <header>
    <div class="header">
      <div class="headerData">
        <div class="activePlayerWrapper" id="activePlayerWrapper">
          <p class="activePlayer" id="activePlayer">Ronaldo</p>
          <p class="activePlayerId" id="activePlayerId">(84954)</p>
        </div>
        <div class="gameId" id="gameId">
          <p class="geoheeIdText" id="geoheeIdText">Geohee Game ID:</p>
          <p class="idNumber" id="idNumber">32465</p>
        </div>
        <p class="opponentPlayer" id="opponentPlayer">Messi</p>
      </div>

    </div>
  </header>

  <body>
  <div class="gameContainer">
    <div class="card" id="mainGamersCard">
      <div class="cardsInnerBorder">
        <div class="cardsTopText">
          <p class="water">vesi</p>
          <a class="waterNr" id="waterNr" href="#">0</a>
          <p class="height">kõrgus</p>
          <a class="heightNr" id="heightNr" href="#">1884</a>
        </div>
        <a href="#"><img class="countryFlag" src="pictures/flags/AF.png" alt="cards flag"></a>
        <hr class="cardHr">
        <div class="country">
          <a class="countryLink" id="country" href="#">Ameerika Ühendriigid</a>
        </div>
        <div class="capital">
          <a class="capitalLink" id="capital" href="#">Kabul Karakabul</a>
        </div>
        <div class="mapsPic">
          <img class="countryMap" src="pictures/maps/AF.png" alt="cards map">
        </div>
        <div class="countryData">
          <p class="population">Rahvaarv</p>
          <a class="populationNumber" id="populationNumber" href="#">31 575 018</a>
          <p class="area">Pindala</p>
          <a id="area" href="#">
            <div class="areaNumbers">
              <p class="areaNumber1" id="areaNumber1">652 230</p>
              <p class="areaNumber2" id="areaNumber2">(46)</p>
            </div>
          </a>
          <p class="hdi">hdi</p>
          <a class="hdiNumber" id="hdiNumber" href="#">0,4988</a>
        </div>

        <a id="highestPointDiv" href="#">
          <div class="highestPointDiv">
            <p class="highestPoint">Noshaq</p>
            <p class="highestPointNumber" id="highestPointNumber">7492</p>
          </div>
        </a>
        <a id="lowestPointDiv" href="#">
          <div class="lowestPointDiv">
            <p class="lowestPoint">Amu Darya</p>
            <p class="lowestPointNumber" id="lowestPointNumber">258</p>
          </div>
        </a>
      </div>
    </div>
    <div class="interactiveBlock">
      <p class="whosTurn">SINU KORD <br> Vali suurus!</p>
      <button class="buttons" id="changeCards">Jätka</button>
    </div>


    <div class=" card flip-card" id="flip-card">
      <div class="flip-card-inner" id="flip-card-inner">
        <div class="flip-card-front" id="flip-card-front">
          <img src="pictures/backCard.png" alt="cards back Side" style="width:356px;height:554px">
        </div>
        <div class="flip-card-back" id="flip-card-back">


          <!-- <div class="card"> -->
          <div class="cardsInnerBorder">
            <div class="cardsTopText">
              <p class="water">vesi</p>
              <p class="waterNumber" id="opponentWaterNumber">0</p>
              <p class="height">kõrgus</p>
              <p class="heightNumber" id="opponentHeightNumber">1884</p>
            </div>
            <img class="countryFlag" id="opponentCountryFlag" src="pictures/flags/AF.png" alt="cards flag">
            <hr class="cardHr">
            <div class="country">
              <p id="opponentCountry">Ameerika Ühendriigid</p>
            </div>
            <div class="capital">
              <p id="opponentCapital">Kabul Karakabul</p>
            </div>
            <div class="mapsPic">
              <img class="countryMap" src="pictures/maps/AF.png" alt="cards map">
            </div>
            <div class="countryData">
              <p class="population">Rahvaarv</p>
              <p class="opponentPopulationNumber" id="opponentPopulationNumber">31 575 018</p>
              <p class="area">Pindala</p>
              <div class="opponentAreaNumbers">
                <p class="areaNumber1" id="opponentAreaNumber1">652 230</p>
                <p class="areaNumber2" id="opponentAreaNumber2">(46)</p>
              </div>
              <p class="hdi">hdi</p>
              <p class="opponentHdiNumber" id="opponentHdiNumber">0,498</p>
            </div>
            <div class="opponentHighestPointDiv">
              <p class="highestPoint" id="opponentHighestPoint">Noshaq</p>
              <p class="highestPointNumber" id="opponentHighestPointNumber">7492</p>
            </div>
            <div class="opponentLowestPointDiv">
              <p class="lowestPoint" id="opponentLowestPoint">Amu Darya</p>
              <p class="lowestPointNumber" id="opponentLowestPointNumber">258</p>
            </div>
          </div>
          <!-- </div> -->


        </div>
      </div>
    </div>
  </div>
<!--  <script>-->
<!--    document.getElementById("changeCards").addEventListener("click", blur);-->

<!--    function blur() {-->
<!--      let mainGamersCard = document.getElementById("mainGamersCard");-->
<!--      mainGamersCard.classList.add("blur");-->
<!--    }-->
<!--  </script>-->
  </body>

  </html>
</template>

