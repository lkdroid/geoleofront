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

    <title>Geoleo</title>
  </head>

  <body class="indexBody">
  <div class="container">
    <h1 class="titleH1">Geoleo lipukaardid</h1>
    <h2 class="titleH2">Õpi tundma riike ja lippe!</h2>
    <div class="CardsUI">
      <div class="formContainer">
        <form action="">
          <fieldset class="fieldInput">
            <input class="form-input" type="text" v-model="player_name" placeholder="Sinu nimi">
            <button v-on:click="enterPlayerName" type="submit" class="form-submit">Start</button>
          </fieldset>
        </form>
      </div>
      <div v-if="isUnique" class="addId">
        <p class="addIdText">Sellise nimega kasutaja on juba andmebaasis olemas. Sisesta oma ID:</p>
        <div class="formContainer">
          <form action="">
            <fieldset class="fieldInput">
              <input class="form-input" type="text" v-model="playerID" placeholder="Sinu ID">
              <button v-on:click="enterPlayerID" type="submit" class="form-submit">Lisa ID</button>
            </fieldset>
          </form>
        </div>
      </div>
      <div class="modeButtons">
        <button v-on:click="findNewGame" type="submit" class="buttons btn btn-round material-design"
                data-color="#f0e9d7">Uus mäng
        </button>
        <button v-on:click="createBuddyGame" type="submit" class="buttons btn btn-round material-design"
                data-color="#f0e9d7">Uus mäng sõbraga
        </button>
        <button v-on:click="joinBuddyGame" type="submit" class="buttons btn btn-round material-design"
                data-color="#f0e9d7">Sõbra mäng
        </button>
      </div>
    </div>
  </div>
  </body>

  </html>

</template>

<script>


export default {
  name: 'CardsUI',
  data: function () {
    return {

      player_name: '',
      isUnique: '',
      notUnique: '',
      playerID: '',
      buddyGame: ''


    }
  },
  methods: {

    enterPlayerName: function () {
      this.$http.get("/uniquename/" + this.player_name)
          .then(response => {
            this.isUnique = !response.data //service tagastab true kui on unique
            if (response.data) {
              this.$http.get()("/insertname/" + this.player_name)
                  .then(response => {
                    this.playerID = response.data
                  })
            }
          })
    },
    enterPlayerID: function () {
      this.notUnique = true
    },
    findNewGame: function () {
      this.buddyGame = false
      this.$http.get("/checkgame/" + this.playerID + this.buddyGame)   //kui on olemas poolik mäng, siis lisab READY
          .then(response => {
            console.log(response.data)
            this.gameID = response.data
            this.$http.get("/updateplayer/" + this.playerID + this.gameID)    //kui
                .then(response => {
                  console.log(response.data)
                })
          })
    },
    createBuddyGame: function () {
      this.buddyGame = true
      this.$http.get("/creategame/" + this.playerID + this.buddyGame)
          .then(response => {
            console.log(response.data)
            this.$http.get("/updateplayer/" + this.playerID)
                .then(response => {
                  console.log(response.data)
                })
          })
    },
    joinBuddyGame: function () {
      this.buddyGame = true
      gameID
      this.$http.get("/joingame/" + this.player_name + this.gameID)
          .then(response => {
            console.log(response.data)
            this.$http.get("/updateplayer/" + this.playerID)
                .then(response => {
                  console.log(response.data)
                })
          })

    }
  }
  // POLLING

  // SAATMA JÄRGMISELE LEHELE - player_name gameID playerID

}
</script>