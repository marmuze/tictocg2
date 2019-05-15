<template>
  <div id="welcome">
    <div class="titleBlock" style="width:80%;margin:auto">
      <h1>tictactoe Georges</h1>
      <form @submit.prevent style="width:50%;margin:auto">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Player X"
            v-model="player1"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Player O"
            v-model="player2"
          />
        </div>
        <div class="form-group">
          <button class="btn btn-primary" @click="init">Play</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "welcom",
  computed: {
    player1: {
      get() {
        return this.$store.state.player1;
      },
      set(value) {
        this.$store.commit("setPlayer1", value);
      }
    },
    player2: {
      get() {
        return this.$store.state.player2;
      },
      set(value) {
        this.$store.commit("setPlayer2", value);
      }
    }
  },
  methods: {
    init() {
      this.$router.push("game");
    }
  }
};
</script>
<style scoped>
.square :hover {
  opacity: 0.8;
}

.square :active {
  background: rgb(173, 119, 224);
}

.titleBlock {
  text-align: center;
}
</style>
