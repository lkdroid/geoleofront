<template>

  <div class="body">
    <div>
      <div class="header">
        <div class="headerData">
          <div class="activePlayerWrapper" id="activePlayerWrapper">
            <p class="activePlayer" id="activePlayer">Mängija nimi:{{ player_name }}</p>
            <p class="activePlayerId" id="activePlayerId">(Mängija ID:{{ playerId }})</p>
          </div>
          <div class="gameId" id="gameId">
            <p class="geoheeIdText" id="geoheeIdText">Mängu ID:</p>
            <p class="idNumber" id="idNumber">{{ gameId }}</p>
          </div>
          <p class="opponentPlayer" id="opponentPlayer">Teine mängija</p>
        </div>
      </div>
    </div>

    <div class="gameContainer">
      <div class="card" id="mainGamersCard">
        <div class="cardsInnerBorder">
          <div class="cardsTopText">
            <p class="water">vesi</p>
            <a @click="water1" class="waterNr" id="waterNr" href="#">{{ card1.water }}</a>
            <p class="height">kõrgus</p>
            <a class="heightNr" id="heightNr" href="#">{{ card1.avgHeight }}</a>
          </div>
          <a href="#"><img class="countryFlag" v-bind:src="'pictures/flags/' + card1.countryCode + '.png'" alt="cards flag"></a>

          <hr class="cardHr">
          <div class="country">
            <a class="countryLink" v-on:click="choose('countryName')" id="country" href="#">{{ card1.countryName }}</a>
          </div>
          <div class="capital">
            <a class="capitalLink" v-on:click="choose('capital')" id="capital" href="#">{{ card1.capital }}</a>
          </div>
          <div class="mapsPic">
            <img class="countryMap" v-bind:src="'pictures/maps/' + card1.contourCode + '.png'" alt="cards map">
          </div>
          <div class="countryData">
            <p class="population">Rahvaarv</p>
            <a class="populationNumber" v-show="mover" v-on:click="choose('population')"
               href="#">{{ card1.population }}</a>
            <p class="populationNumber" v-show="!mover">{{ card1.population }}</p>
            <p class="area">Pindala</p>
            <a id="area" href="#">
              <div class="areaNumbers">
                <p class="areaNumber1" v-on:click="choose('area')" id="areaNumber1">{{ card1.area }}</p>
                <p class="areaNumber2" v-on:click="choose('density')" id="areaNumber2">{{ card1.density }}</p>
              </div>
            </a>
            <p class="hdi">HDI</p>
            <a class="hdiNumber" v-on:click="choose('hdi')" id="hdiNumber" href="#">{{ card1.hdi }}</a>
          </div>

          <a id="highestPointDiv" href="#">
            <div class="highestPointDiv">
              <p class="highestPoint">{{ card1.highestName }}</p>
              <p class="highestPointNumber" v-on:click="choose('highestpoint')" id="highestPointNumber">
                {{ card1.highestPointNumber }}</p>
            </div>
          </a>
          <a id="lowestPointDiv" href="#">
            <div class="lowestPointDiv">
              <p class="lowestPoint">{{ card1.lowestName }}</p>
              <p class="lowestPointNumber" v-on:click="choose('lowestpoint')" id="lowestPointNumber">
                {{ card1.lowestPointNumber }}</p>
            </div>
          </a>
        </div>
      </div>
      <div class="interactiveBlock">
        <p class="whosTurn">{{ message1 }}<br>{{ message2 }}</p>
        <button v-if="state == 1 || state==2" type="submit" v-on:click="continueButton" class="buttons"
                id="changeCards">JÄTKA
        </button>
      </div>


      <div class="card flip-card" id="flip-card">
        <div class="flip-card-inner" v-bind:class="{ letsFlip: removeClass }" id="flip-card-inner">
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
              <img class="countryFlag" id="opponentCountryFlag" v-bind:src="'pictures/flags/' + card2.countryCode + '.png'" alt="cards flag">
              <hr class="cardHr">
              <div class="country">
                <p id="opponentCountry">{{ card2.countryName }}</p>
              </div>
              <div class="capital">
                <p id="opponentCapital">{{ card2.capital }}</p>
              </div>
              <div class="mapsPic">
                <img class="countryMap" v-bind:src="'pictures/maps/' + card2.contourCode + '.png'" alt="cards map">
              </div>
              <div class="countryData">
                <p class="population">Rahvaarv</p>
                <p class="opponentPopulationNumber" id="opponentPopulationNumber">{{ card2.population }}</p>
                <p class="area">Pindala</p>
                <div class="opponentAreaNumbers">
                  <p class="areaNumber1" id="opponentAreaNumber1">{{ card2.area }}</p>
                  <p class="areaNumber2" id="opponentAreaNumber2">{{ card2.density }}</p>
                </div>
                <p class="hdi">HDI</p>
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
      state: 0,
      message1: '',
      message2: '',
      roundresult:''
    }
  },
  methods: {

    //      this.removeClass = true

    continueButton: function () {

      this.state = 0;


      this.$http.get("choose1card/" + this.gameId + "/" + this.cardcount)
          .then(response => {
            console.log(response)
            if (this.mover) {
              this.message1 = "Sinu kord! Vali suurus kaardilt!"
              this.card1 = response.data.card1
              this.card2 = response.data.card2
            } else {
              this.message1 = "Oota vastase käiku!"
              this.card2 = response.data.card1
              this.card1 = response.data.card2
            }
          })


    },
    choose: function (chosenField) {
      console.log("input choice done")
      if (chosenField == "population") {
        if (card1.population > card2.population) {this.roundresult="winner"} else {this.roundresult="loser"}
      }

      this.$http.get("/sendChosenField/" + chosenField + "/" + this.playerId + "/" + this.gameId + "/" + this.cardcount)
          .then(response => {
            console.log(response.data)
            if (this.roundresult == this.playerId) {
              this.message1 = "Sa küsisid suurust " + response.data.chosenField + " ning SINA VÕITSID!"
              this.message2 = "Vajuta nupule JÄTKA"
            } else {
              this.message1 = "Sa küsisid suurust " + response.data.chosenField + " ning TEMA VÕITIS!"
              this.message2 = "Vajuta nupule JÄTKA"
            }
          })
      this.mover = !this.mover
      this.state = 2;
      this.cardcount = this.cardcount + 2


    }, pollData: function () {
      this.pollInterval = setInterval(() => {
        console.log('polling')
        this.hasPlayerMoved()
      }, 3000)
    }, hasPlayerMoved: function () {
      if (this.mover == false) {
        this.$http.get('/checkIfInputYes/' + this.gameId + "/" + this.cardcount)
            .then(response => {
              if (response.data.result === true) {
                console.log(response.data);
                console.log("Andmed olemas")
                this.mover = true;
                this.state = 1;
                this.cardcount = this.cardcount + 2
                if (response.data.winner === this.playerId) {
                  this.message1 = "Vastane küsis suurust " + response.data.chosenField + " ning SINA VÕITSID!"
                  this.message2 = "Vajuta nupule JÄTKA"
                } else {
                  this.message1 = "Vastane küsis suurust " + response.data.chosenField + " ning TEMA VÕITIS!"
                  this.message2 = "Vajuta nupule JÄTKA"
                }
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
          this.$http.get("choose1card/" + this.gameId + "/" + this.cardcount)
              .then(response => {
                console.log(response)
                if (this.mover) {
                  this.message1 = "Sinu kord! Vali suurus kaardilt!"
                  this.message2 = ""
                  this.card1 = response.data.card1
                  this.card2 = response.data.card2
                } else {
                  this.message1 = "Oota vastase käiku!"
                  this.message2 = ""
                  this.card2 = response.data.card1
                  this.card1 = response.data.card2
                }
              })

        })
  }
}
</script>
