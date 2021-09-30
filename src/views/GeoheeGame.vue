<template>

  <div class="body">
    <div>
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
    </div>

    <div class="gameContainer">
      <div class="card" id="mainGamersCard">
        <div class="cardsInnerBorder">
          <div class="cardsTopText">
            <p class="water">vesi</p>
            <a class="waterNr" id="waterNr" href="#"></a>
            <p class="height">kõrgus</p>
            <a class="heightNr" id="heightNr" href="#"></a>
          </div>
          <a href="#"><img class="countryFlag" id="countryFlag" src="" alt="cards flag"></a>
          <hr class="cardHr">
          <div class="country">
            <a class="countryLink" id="country" href="#"></a>
          </div>
          <div class="capital">
            <a class="capitalLink" id="capital" href="#"></a>
          </div>
          <div class="mapsPic">
            <img class="countryMap" id="countryMap" src="" alt="cards map">
          </div>
          <div class="countryData">
            <p class="population">Rahvaarv</p>
            <a class="populationNumber" id="populationNumber" href="#"></a>
            <p class="area">Pindala</p>
            <a id="area" href="#">
              <div class="areaNumbers">
                <p class="areaNumber1" id="areaNumber1"></p>
                <p class="areaNumber2" id="areaNumber2"></p>
              </div>
            </a>
            <p class="hdi">hdi</p>
            <a class="hdiNumber" id="hdiNumber" href="#"></a>
          </div>

          <a id="highestPointDiv" href="#">
            <div class="highestPointDiv">
              <p class="highestPoint" id="highestPoint"></p>
              <p class="highestPointNumber" id="highestPointNumber"></p>
            </div>
          </a>
          <a id="lowestPointDiv" href="#">
            <div class="lowestPointDiv">
              <p class="lowestPoint" id="lowestPoint">Amu Darya</p>
              <p class="lowestPointNumber" id="lowestPointNumber">258</p>
            </div>
          </a>
        </div>
      </div>
      <div class="interactiveBlock">
        <p class="whosTurn">SINU KORD <br> Vali suurus!</p>
        <button @click="letsFlip" type="submit" class="buttons" id="changeCards">Jätka</button>
        <button @click="testButton()" type="submit" class="buttons" id="testButton">Let's test</button>

      </div>


      <div class=" card flip-card" id="flip-card">
        <div class="flip-card-inner" :class="{ letsFlip: removeClass }" id="flip-card-inner">
          <div class="flip-card-front" id="flip-card-front">
            <img src="pictures/backCard.png" alt="cards back Side" style="width:356px;height:554px">
          </div>
          <div class="flip-card-back" id="flip-card-back">


            <!-- <div class="card"> -->
            <div class="cardsInnerBorder">
              <div class="cardsTopText">
                <p class="water">vesi</p>
                <p class="waterNumber" id="opponentWaterNr"></p>
                <p class="height">kõrgus</p>
                <p class="heightNumber" id="opponentHeightNr"></p>
              </div>
              <img class="countryFlag" id="opponentCountryFlag" src="" alt="cards flag">
              <hr class="cardHr">
              <div class="country">
                <p id="opponentCountry"></p>
              </div>
              <div class="capital">
                <p id="opponentCapital"></p>
              </div>
              <div class="mapsPic">
                <img class="countryMap" id="opponentCountryMap" src="" alt="cards map">
              </div>
              <div class="countryData">
                <p class="population"></p>
                <p class="opponentPopulationNumber" id="opponentPopulationNumber"></p>
                <p class="area"></p>
                <div class="opponentAreaNumbers">
                  <p class="areaNumber1" id="opponentAreaNumber1"></p>
                  <p class="areaNumber2" id="opponentAreaNumber2"></p>
                </div>
                <p class="hdi">hdi</p>
                <p class="opponentHdiNumber" id="opponentHdiNumber"></p>
              </div>
              <div class="opponentHighestPointDiv">
                <p class="highestPoint" id="opponentHighestPoint"></p>
                <p class="highestPointNumber" id="opponentHighestPointNumber"></p>
              </div>
              <div class="opponentLowestPointDiv">
                <p class="lowestPoint" id="opponentLowestPoint"></p>
                <p class="lowestPointNumber" id="opponentLowestPointNumber"></p>
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
  </div>

</template>

<script>
export default {
  name: 'addFlipClass',
  data: function () {
    return {
      removeClass: true,
      player_name: localStorage.playerName,
      playerId: localStorage.playerID,
      gameId: localStorage.gameID,
      mover: '',
      cardcount: '',
      country1: '',
      country2: ''
    }
  },
  methods: {

    letsFlip: function () {
      // if (this.removeClass = false) {
      //   this.removeClass = true
      // } else if (this.removeClass = true) {
      //   this.removeClass = false
      // }
      this.removeClass = !this.removeClass

    },

    testButton: function () {
      let randomNrOne = Math.floor(Math.random() * 4) + 1;
      console.log(randomNrOne);
      let randomNrTwo = Math.floor(Math.random() * 4) + 1;
      console.log(randomNrTwo);
      this.$http.get('/countrydata/' + randomNrOne)
          .then(response => {
            let countryData = response.data;
            console.log(countryData);
            let countryFlag = document.getElementById("countryFlag");
            countryFlag.src = 'pictures/flags/' + countryData.countryCode + '.png';
            let countryMap = document.getElementById("countryMap");
            countryMap.src = 'pictures/maps/' + countryData.contourCode + '.png';
            let waterNr = document.getElementById("waterNr");
            waterNr.innerText = countryData.water;
            let heightNr = document.getElementById("heightNr");
            heightNr.innerText = countryData.avgHeight;
            let country = document.getElementById("country");
            country.innerText = countryData.countryName;
            let capital = document.getElementById("capital");
            capital.innerText = countryData.capital;
            let populationNumber = document.getElementById("populationNumber");
            populationNumber.innerText = countryData.population.toLocaleString('et');
            let areaNumber1 = document.getElementById("areaNumber1");
            areaNumber1.innerText = countryData.area.toLocaleString('et');
            let areaNumber2 = document.getElementById("areaNumber2");
            areaNumber2.innerText = countryData.density;
            let hdiNumber = document.getElementById("hdiNumber");
            hdiNumber.innerText = countryData.hdi;
            let highestPoint = document.getElementById("highestPoint");
            highestPoint.innerText = countryData.highestName;
            let highestPointNumber = document.getElementById("highestPointNumber");
            highestPointNumber.innerText = countryData.highestPointNumber.toLocaleString('et');
            let lowestPoint = document.getElementById("lowestPoint");
            lowestPoint.innerText = countryData.lowestName;
            let lowestPointNumber = document.getElementById("lowestPointNumber");
            lowestPointNumber.innerText = countryData.lowestPointNumber.toLocaleString('et');
          })
      this.$http.get('/countrydata/' + randomNrTwo)
          .then(response => {
            let countryData = response.data;
            console.log(countryData);
            let opponentCountryFlag = document.getElementById("opponentCountryFlag");
            opponentCountryFlag.src = 'pictures/flags/' + countryData.countryCode + '.png';
            let opponentCountryMap = document.getElementById("opponentCountryMap");
            opponentCountryMap.src = 'pictures/maps/' + countryData.contourCode + '.png';
            let opponentWaterNr = document.getElementById("opponentWaterNr");
            opponentWaterNr.innerText = countryData.water;
            let opponentHeightNr = document.getElementById("opponentHeightNr");
            opponentHeightNr.innerText = countryData.avgHeight;
            let opponentCountry = document.getElementById("opponentCountry");
            opponentCountry.innerText = countryData.countryName;
            let opponentCapital = document.getElementById("opponentCapital");
            opponentCapital.innerText = countryData.capital;
            let opponentPopulationNumber = document.getElementById("opponentPopulationNumber");
            opponentPopulationNumber.innerText = countryData.population.toLocaleString('et');
            let opponentAreaNumber1 = document.getElementById("opponentAreaNumber1");
            opponentAreaNumber1.innerText = countryData.area.toLocaleString('et');
            let opponentAreaNumber2 = document.getElementById("opponentAreaNumber2");
            opponentAreaNumber2.innerText = countryData.density;
            let opponentHdiNumber = document.getElementById("opponentHdiNumber");
            opponentHdiNumber.innerText = countryData.hdi;
            let opponentHighestPoint = document.getElementById("opponentHighestPoint");
            opponentHighestPoint.innerText = countryData.highestName;
            let opponentHighestPointNumber = document.getElementById("opponentHighestPointNumber");
            opponentHighestPointNumber.innerText = countryData.highestPointNumber.toLocaleString('et');
            let opponentLowestPoint = document.getElementById("opponentLowestPoint");
            opponentLowestPoint.innerText = countryData.lowestName;
            let opponentLowestPointNumber = document.getElementById("opponentLowestPointNumber");
            opponentLowestPointNumber.innerText = countryData.lowestPointNumber.toLocaleString('et');
          })
  },

  mounted() {

    this.cardcount = 0;
    this.player_name = localStorage.playerName,
        this.playerId = localStorage.playerID,
        this.gameId = localStorage.gameID
    this.$http.get("/checkwhoisfirst/" + this.gameID + "/" + this.playerID)
        .then(response => {
          this.mover = response.data
          if (this.mover) {
            this.$http.get('/randomcards/' + this.gameID)
                .then(response => {
                      this.$http.get("choose1card/" + this.gameId + "/" + this.cardcount + 1)
                          .then(response => {
                                console(response)
                                this.country1 = response.data
                                this.$http.get("choose1card/" + this.gameId + "/" + this.cardcount + 2)
                                    .then(response => {
                                      this.country2 = response.data

                                      //display ja oota input



                                    })

                              }
                          )


                    }
                )


          }
          else {
            this.$http.get("choose1card/" + this.gameId + "/" + this.cardcount + 1)
                .then(response => {
                  console(response)
                  this.country1 = response.data
                  this.$http.get("choose1card/" + this.gameId + "/" + this.cardcount + 2)
                      .then(response => {
                        this.country2 = response.data
                      })
                })
            //start polling kas real kus on thisgameid ning cardcount+1 on olemas player id
          }
        })




  }
}}
</script>
