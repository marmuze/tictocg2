<template>
  <div id="reset">
    <div class="titleBlock">
      <h1 v-if="!game.draw">
        <span>{{ game.winner }}</span> wins you are the best!!
      </h1>
      <h1 v-if="game.draw">
        <span>draw stay good friends</span>
      </h1>
      <div class="form-group">
        <button class="btn btn-primary " @click="init">Play Again?</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "reloadGame",
  computed: {
    ...mapState(["game"])
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
