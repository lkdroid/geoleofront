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
            <a class="waterNr" id="waterNr" href="#">0</a>
            <p class="height">kõrgus</p>
            <a class="heightNr" id="heightNr" href="#">1884</a>
          </div>
          <a href="#"><img class="countryFlag" src="pictures/flags/AF.png" alt="cards flag"></a>
          <hr class="cardHr">
          <div class="country">
            <a class="countryLink" id="country" href="#">{{ card1.countryName }}</a>
          </div>
          <div class="capital">
            <a class="capitalLink" id="capital" href="#">{{ card1.capital }}</a>
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
        <button @click="letsFlip" type="submit" class="buttons" id="changeCards">Jätka</button>
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
                <p class="waterNumber" id="opponentWaterNumber">0</p>
                <p class="height">kõrgus</p>
                <p class="heightNumber" id="opponentHeightNumber">1884</p>
              </div>
              <img class="countryFlag" id="opponentCountryFlag" src="pictures/flags/AF.png" alt="cards flag">
              <hr class="cardHr">
              <div class="country">
                <p id="opponentCountry">{{card2.countryName}}</p>
              </div>
              <div class="capital">
                <p id="opponentCapital">{{ card2.capital }}</p>
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
      card1: {},
      card2: {}
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

    }
  },

  mounted() {

    this.cardcount = 0;
    this.player_name = localStorage.playerName,
        this.playerId = localStorage.playerID,
        this.gameId = localStorage.gameID
    this.$http.get("/checkwhoisfirst/" + this.gameId + "/" + this.playerId)
        .then(response => {
          this.mover = response.data
          if (this.mover) {
            //this.$http.get('/randomcards/' + this.gameID)
                //.then(response => {
                      this.$http.get("choose1card/" + this.gameId + "/" + (this.cardcount + 1))
                          .then(response => {
                                console.log(response)
                                this.card1 = response.data.card1
                                this.card2 = response.data.card2
                                // this.$http.get("choose1card/" + this.gameId + "/" + (this.cardcount + 2))
                                //     .then(response => {
                                //       this.country2 = response.data
                                //
                                //       //display ja oota nupule vajutust
                                //
                                //
                                //     })

                              }
                          )
                //    }
                //)
          } else {
            this.$http.get("choose1card/" + this.gameId + "/" + (this.cardcount + 1))
                .then(response => {
                  console.log(response)
                  this.card1 = response.data
                  this.$http.get("choose1card/" + this.gameId + "/" + (this.cardcount + 2))
                      .then(response => {
                        this.card2 = response.data


                        // display kaardid ja
                        //
                        // start polling kas real kus on thisgameid ning cardcount+1 on olemas player id

                        this.$http.get('/checkIfInputYes/' + this.gameID + "/" + this.cardcount)
                            .then(response => {
                              if (response.data === true) {
                                console.log(response);
                                console.log("Andmed olemas")
                                //siin tekita nüüd jätka nupp
                                clearInterval(this.pollInterval)
                              }
                              this.status = response.data

                                  .catch(function (error) {
                                    console.log(error);
                                  })
                            })
                        //ainult see osa oli eelmises failis mounted all
                        if (this.status !== true) {
                          this.pollInterval = setInterval(this.pollReady, 3000)
                          setTimeout(() => {
                            clearInterval(this.pollInterval)
                          }, 600000)


                        }


                      })
                })
          } //else kinni
        })
  }
}
</script>
