<template>

  <div class="indexBody">
    <div class="container">
      <h1 class="titleH1">Geoleo lipukaardid</h1>
      <h2 class="titleH2">Õpi tundma riike ja lippe!</h2>
      <div class="CardsUI">
        <div class="formContainer">
          <form action="">
            <fieldset class="fieldInput">
              <!-- <input class="form-input" type="text" v-model="player_name" placeholder="Sinu nimi">-->
              <!-- <button v-on:click="enterPlayerName" type="submit" class="form-submit">Start</button>-->
              <input class="form-input" type="text" placeholder="Sinu nimi">
              <button @click="()=>$router.push('game')" type="submit" class="form-submit">Start</button>
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
                <input class="form-input" type="text" :placeholder="[[ IdMessage ]]">

                <!-- <button v-on:click="enterPlayerID" type="submit" class="form-submit">Lisa ID</button>-->
                <button type="submit" class="form-submit">Lisa ID</button>

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
          <button @click="addId" type="submit" class="buttons btn btn-round material-design"
                  data-color="#f0e9d7">Uus mäng
          </button>
          <button @click="generateNewGame" type="submit"
                  class="buttons btn btn-round material-design"
                  data-color="#f0e9d7">Uus mäng sõbraga
          </button>
          <button @click="playWithFriend()" type="submit" class="buttons btn btn-round material-design"
                  data-color="#f0e9d7">Sõbra mäng
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
      IdMessage: ""
    }
  },
  methods: {
    addId: function () {
      // this.hideInput = !this.hideInput
      if (this.hideInput = false) {
        this.hideInput = true
      } else if (this.hideInput = true) {
        this.hideInput = true
      }
      this.IdMessage = "Sinu ID";
      this.message = "Sellise nimega kasutaja on juba andmebaasis olemas. Sisesta oma ID:";
      // this.message = this.message.replace("Sisesta sõbra mängu ID", "Sellise nimega kasutaja on juba andmebaasis olemas. Sisesta oma ID:");
    },
    generateNewGame: function () {
      if (this.hideInput = true) {
        this.hideInput = false
      } else if (this.hideInput = false) {
        this.hideInput = false
      }
    },
    playWithFriend: function () {
      if (this.hideInput = false) {
        this.hideInput = true
      } else if (this.hideInput = true) {
        this.hideInput = true
      }
      this.IdMessage = "Mängu ID";
      this.message = "Sisesta sõbra mängu ID";
      // this.message = this.message.replace("Sellise nimega kasutaja on juba andmebaasis olemas. Sisesta oma ID:", "Sisesta sõbra mängu ID");
    }
  }
}
</script>

<!--<script>-->
<!--export default {-->
<!--  name: 'addID',-->
<!--  data: function () {-->
<!--    return {-->
<!--      active: true-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<script>-->
<!--export default {-->
<!--  name: 'addID',-->
<!--  data: function () {-->
<!--    return {-->
<!--      isUnique: false-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<script>-->
<!--export default {-->
<!--  name: 'CardsUI',-->
<!--  data: function () {-->
<!--    return {-->
<!--      visible: true-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->


<!--<script>-->
<!--export default {-->
<!--  name: 'CardsUI',-->
<!--  data: function () {-->
<!--    return {-->
<!--      player_name: '',-->
<!--      isUnique: '',-->
<!--      notUnique: '',-->
<!--      playerID: '',-->
<!--      buddyGame: ''-->


<!--    }-->
<!--  },-->
<!--  methods: {-->

<!--    enterPlayerName: function () {-->
<!--      this.$http.get("/uniquename/" + this.player_name)-->
<!--          .then(response => {-->
<!--            this.isUnique = !response.data //service tagastab true kui on unique-->
<!--            if (response.data) {-->
<!--              this.$http.get()("/insertname/" + this.player_name)-->
<!--                  .then(response => {-->
<!--                    this.playerID = response.data-->
<!--                  })-->
<!--            }-->
<!--          })-->
<!--    },-->
<!--    enterPlayerID: function () {-->
<!--      this.notUnique = true-->
<!--    },-->
<!--    findNewGame: function () {-->
<!--      this.buddyGame = false-->
<!--      this.$http.get("/checkgame/" + this.playerID + this.buddyGame)   //kui on olemas poolik mäng, siis lisab READY-->
<!--          .then(response => {-->
<!--            console.log(response.data)-->
<!--            this.gameID = response.data-->
<!--            this.$http.get("/updateplayer/" + this.playerID + this.gameID)    //kui-->
<!--                .then(response => {-->
<!--                  console.log(response.data)-->
<!--                })-->
<!--          })-->
<!--    },-->
<!--    createBuddyGame: function () {-->
<!--      this.buddyGame = true-->
<!--      this.$http.get("/creategame/" + this.playerID + this.buddyGame)-->
<!--          .then(response => {-->
<!--            console.log(response.data)-->
<!--            this.$http.get("/updateplayer/" + this.playerID)-->
<!--                .then(response => {-->
<!--                  console.log(response.data)-->
<!--                })-->
<!--          })-->
<!--    },-->
<!--    joinBuddyGame: function () {-->
<!--      this.buddyGame = true-->
<!--      gameID-->
<!--      this.$http.get("/joingame/" + this.player_name + this.gameID)-->
<!--          .then(response => {-->
<!--            console.log(response.data)-->
<!--            this.$http.get("/updateplayer/" + this.playerID)-->
<!--                .then(response => {-->
<!--                  console.log(response.data)-->
<!--                })-->
<!--          })-->

<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->