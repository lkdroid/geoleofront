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
            <a class="waterNr" id="waterNr" href="#">{{ card1.water }}</a>
            <p class="height">kõrgus</p>
            <a class="heightNr" id="heightNr" href="#">{{ card1.avgHeight }}</a>
          </div>
          <a href="#"><img class="countryFlag" src="pictures/flags/AF.png" alt="cards flag"></a>
          <hr class="cardHr">
          <div class="country">
            <a class="countryLink" v-on:click="choose('countryName')" id="country" href="#">{{ card1.countryName }}</a>
          </div>
          <div class="capital">
            <a class="capitalLink" id="capital" href="#">{{ card1.capital }}</a>
          </div>
          <div class="mapsPic">
            <img class="countryMap" src="pictures/maps/AF.png" alt="cards map">
          </div>
          <div class="countryData">
            <p class="population">Rahvaarv</p>
            <a class="populationNumber" id="populationNumber" v-on:click="choose('population')"
               href="#">{{ card1.population }}</a>
            <p class="area">Pindala</p>
            <a id="area" href="#">
              <div class="areaNumbers">
                <p class="areaNumber1" id="areaNumber1">{{ card1.area }}</p>
                <p class="areaNumber2" id="areaNumber2">{{ card1.density }}</p>
              </div>
            </a>
            <p class="hdi">hdi</p>
            <a class="hdiNumber" id="hdiNumber" href="#">{{ card1.hdi }}</a>
          </div>

          <a id="highestPointDiv" href="#">
            <div class="highestPointDiv">
              <p class="highestPoint">{{ card1.highestName }}</p>
              <p class="highestPointNumber" id="highestPointNumber">{{ card1.highestPointNumber }}</p>
            </div>
          </a>
          <a id="lowestPointDiv" href="#">
            <div class="lowestPointDiv">
              <p class="lowestPoint">{{ card1.lowestName }}</p>
              <p class="lowestPointNumber" id="lowestPointNumber">{{ card1.lowestPointNumber }}</p>
            </div>
          </a>
        </div>
      </div>
      <div class="interactiveBlock">
        <p class="whosTurn">SINU KORD <br> Vali suurus!</p>
        <button v-if="state == 1" type="submit" class="buttons" id="changeCards">Jätka</button>
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
                <p class="waterNumber" id="opponentWaterNumber">{{ card2.water }}</p>
                <p class="height">kõrgus</p>
                <p class="heightNumber" id="opponentHeightNumber">{{ card2.avgHeight }}</p>
              </div>
              <img class="countryFlag" id="opponentCountryFlag" src="pictures/flags/AF.png" alt="cards flag">
              <hr class="cardHr">
              <div class="country">
                <p id="opponentCountry">{{ card2.countryName }}</p>
              </div>
              <div class="capital">
                <p id="opponentCapital">{{ card2.capital }}</p>
              </div>
              <div class="mapsPic">
                <img class="countryMap" src="pictures/maps/AF.png" alt="cards map">
              </div>
              <div class="countryData">
                <p class="population">Rahvaarv</p>
                <p class="opponentPopulationNumber" id="opponentPopulationNumber">{{ card2.population }}</p>
                <p class="area">Pindala</p>
                <div class="opponentAreaNumbers">
                  <p class="areaNumber1" id="opponentAreaNumber1">{{ card2.area }}</p>
                  <p class="areaNumber2" id="opponentAreaNumber2">{{ card2.density }}</p>
                </div>
                <p class="hdi">hdi</p>
                <p class="opponentHdiNumber" id="opponentHdiNumber">{{ card2.hdi }}</p>
              </div>
              <div class="opponentHighestPointDiv">
                <p class="highestPoint" id="opponentHighestPoint">{{ card2.highestName }}</p>
                <p class="highestPointNumber" id="opponentHighestPointNumber">{{ card2.highestPointNumber }}</p>
              </div>
              <div class="opponentLowestPointDiv">
                <p class="lowestPoint" id="opponentLowestPoint">{{ card2.lowestName }}</p>
                <p class="lowestPointNumber" id="opponentLowestPointNumber">{{ card2.lowestPointNumber }}</p>
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
      removeClass: false,
      player_name: localStorage.playerName,
      playerId: localStorage.playerID,
      gameId: localStorage.gameID,
      mover: '',
      cardcount: '',
      card1: {},
      card2: {},
      pollInterval: {},
      state: 0
    }
  },
  methods: {

     //      this.removeClass = true

    choose: function (chosenField) {
      console.log("country choise")
      if (chosenField == 'population') {
        console.log("population")
        if (this.card1.population > this.card2.population) {
          console.log("hurraa")
        } else {
          console.log("jama")
        }
      }
      this.$http.get("/sendChosenField/" + chosenField + "/" + this.playerId + "/" + this.gameId + "/" + this.cardcount)
          .then(response => {

          })

    }, pollData: function () {
      this.pollInterval = setInterval(() => {
        console.log('poll')
        this.hasPlayerMoved()
      }, 2000)
    }, hasPlayerMoved: function () {
      if(this.mover == false){
        this.$http.get('/checkIfInputYes/' + this.gameId + "/" + this.cardcount)
            .then(response => {
              if (response.data.result === true) {
                console.log(response);
                console.log("Andmed olemas")
                this.mover = true;
                this.state = 1;
                //siin tekita nüüd jätka nupp
              }
            })
      }
    }
  },
  mounted() {
    this.pollData();

    this.cardcount = 1;
    this.player_name = localStorage.playerName,
        this.playerId = localStorage.playerID,
        this.gameId = localStorage.gameID
    this.$http.get("/checkwhoisfirst/" + this.gameId + "/" + this.playerId)
        .then(response => {
          this.mover = response.data
          if (this.mover) {
            //this.$http.get('/randomcards/' + this.gameID)
            //.then(response => {
            this.$http.get("choose1card/" + this.gameId + "/" + this.cardcount)
                .then(response => {
                      console.log(response)
                      this.card1 = response.data.card1
                      this.card2 = response.data.card2
                    }
                )
          } else {
            this.$http.get("choose1card/" + this.gameId + "/" + this.cardcount)
                .then(response => {
                  console.log(response)
                  this.card2 = response.data.card1
                  this.card1 = response.data.card2
                })
          } //else kinni
        })
  }
}
</script>
