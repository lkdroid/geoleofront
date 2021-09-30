<template>

  <div class="indexBody">
    <div class="container">
      <h1 class="titleH1">Geoleo lipukaardid</h1>
      <h2 class="titleH2">Õpi tundma riike ja lippe!</h2>
      <div class="CardsUI">
        <div class="formContainer">
          <p class="titleH2">{{ message2 }}</p>
          <form action=""><h1 class="titleH1"></h1>
            <fieldset class="fieldInput">
              <!-- <input class="form-input" type="text" v-model="player_name" placeholder="Sinu nimi">-->
              <!-- <button v-on:click="enterPlayerName" type="submit" class="form-submit">Start</button>-->
              <input class="form-input" type="text" v-model="player_name" placeholder="Sinu nimi">
              <button @click="checkName" type="button" class="form-submit">Lisa</button>
            </fieldset>
          </form>
        </div>
        <!--         <div v-if="isUnique" class="addId" id="addId">-->

        <div class="initial " :class="{ addId: hideInput }" id="addId">

          <!--          <p class="addIdText">Sellise nimega kasutaja on juba andmebaasis olemas. Sisesta oma ID:</p>-->
          <p class="addIdText">{{ message }}</p>


          <div class="formContainer">
            <form action="">
              <fieldset class="fieldInput">
                <!-- <input class="form-input" type="text" v-model="playerID" placeholder="Sinu ID">-->
                <input class="form-input" type="text" v-model="playerID" :placeholder="[[ IdMessage ]]">

                <!-- <button v-on:click="enterPlayerID" type="submit" class="form-submit">Lisa ID</button>-->
                <button type="button" @click="insertButton" class="form-submit">Edasi</button>

              </fieldset>
            </form>
          </div>
        </div>
        <div class="modeButtons">
          <!--        <button v-on:click="findNewGame" type="submit" class="buttons btn btn-round material-design"-->
          <!--                data-color="#f0e9d7">Uus mäng-->
          <!--        </button>-->
          <!--                  <button v-on:click="createBuddyGame" type="submit" class="buttons btn btn-round material-design"-->
          <!--                          data-color="#f0e9d7">Uus mäng sõbraga-->
          <!--                  </button>-->
          <!--        <button v-on:click="joinBuddyGame" type="submit" class="buttons btn btn-round material-design"-->
          <!--                data-color="#f0e9d7">Sõbra mäng-->
          <!--        </button>-->
          <button @click="randomNewGame" type="submit" class="buttons btn btn-round material-design"
                  data-color="#f0e9d7">Uus mäng
          </button>
          <button @click="createFriendGame" type="submit"
                  class="buttons btn btn-round material-design"
                  data-color="#f0e9d7">Loo mäng sõbraga
          </button>
          <button @click="playWithFriend()" type="submit" class="buttons btn btn-round material-design"
                  data-color="#f0e9d7">Ühine mänguga
          </button>
        </div>
      </div>
    </div>


    <!--    <div id="myId" ref="myId">{{ message }}</div>-->
    <!--    <button @click="myFunction()">Click Me</button>-->


  </div>
</template>


<script>
export default {
  name: 'additionalInputs',
  data: function () {
    return {
      hideInput: false,
      message: "!",
      IdMessage: "",
      player_name: '',
      isUnique: '',
      notUnique: '',
      playerID: '',
      gameType: '',
      gameID: '',
      isJoin: '',
      buttonState: 'new',
      message2: '',
      temporaryId:''
    }
  },
  methods: {
    randomNewGame: function () {
      this.gameType = false
      this.hideInput = false
      this.$http.get("/checkgame/" + this.playerID + "/" + this.gameType)
          .then(response => {
            this.gameID = response.data
            this.message2 = "Otsin mängu. Oota palun..."
            this.pollReady()
          })


    },
    createFriendGame: function () {
      this.gameType = true
      this.$http.get("/creategame/" + this.playerID + "/" + this.gameType)
          .then(response => {
            console.log(response.data)
            this.gameID = response.data
            this.message2 = "Mäng tehtud. Edasta mängu ID: " + response.data + " Ootame teist mängijat..."
            this.pollReady()
          })

    },

    playWithFriend: function () {
      this.hideInput = false
      this.buttonState = "join"
      this.IdMessage = "Mängu ID";
      this.message = "Sisesta sõbra mängu ID";
      this.playerID=''
      this.hideInput = true


    }
    ,
    checkName: function () {
      console.log(this.buttonState)
      this.buttonState = "new"
      console.log(this.$http)
      this.$http.get("/uniquename/" + this.player_name)
          .then(response => {
            this.hideInput = !(response.data)
            if (response.data) {
              this.$http.get("/insertname/" + this.player_name)
                  .then(response => {
                    this.message2 = "Uus mängija - "+this.player_name+" - kelle ID on : " + response.data + " lisatud, vali nüüd altpoolt mängutüüp."
                    this.playerID = response.data
                  })
            } else {
              console.log(this.hideInput)
              this.playerID = null
              this.IdMessage = "Sinu ID";
              this.message = "Sellise nimega kasutaja on juba andmebaasis olemas. Sisesta oma ID:";
            }
          })


    },
    insertButton: function () {
      console.log(this.buttonState)
      if (this.buttonState == "join") {
        console.log(this.temoraryId)
        console.log(this.playerID)
        this.gameID = this.playerID
        this.temporaryId = localStorage.playerID
        this.$http.get("/joingame/" + this.temporaryId + "/" + this.gameID)
            .then(response => {
              console.log(response.data)
              this.pollReady()
            })
      } else {
        localStorage.playerID = this.playerID
        console.log(this.playerID)
        console.log(this.temporaryId)
        this.$http.get("/checkNameId/" + this.player_name + "/" + this.playerID)
            .then(response => {
              if (response.data) {
                this.hideInput=false
                this.message2 = "Õige mängija ID! Vali nüüd altpoolt mängutüüp";
                              } else {
                this.hideInput = false
                this.message2 = "See ei ole õige ID! Sisesta mängijanimi!"
              }
            })
      }
    },

    pollReady: function () {
      if (this.gameID) {
        this.$http.get('/checkready/' + this.gameID)
            .then(response => {
              if (response.data === true) {
                console.log(response);
                console.log("Andmed olemas, salvestan ja liigun järgmisele lehele.")
                localStorage.playerName = this.player_name
                localStorage.gameID = this.gameID
                localStorage.playerID = this.playerID
                this.$router.push('game')
                clearInterval(this.pollInterval)
              }
              this.status = response;
            })
            .catch(function (error) {
              console.log(error);
            });
      }
    }
  },
  mounted() {
    this.pollReady()
    if (this.status !== true) {
      this.pollInterval = setInterval(this.pollReady, 3000)
      setTimeout(() => {
        clearInterval(this.pollInterval)
      }, 600000)
    }
  }
}

</script>
