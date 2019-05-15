import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    player1: "",
    player2: "",
    game: {}
  },
  getters: {
    getPlayer: state => XO => {
      if (XO === "X") return state.player1;

      return state.player2;
    }
  },
  mutations: {
    setPlayer1(state, name) {
      state.player1 = name;
    },
    setPlayer2(state, name) {
      state.player2 = name;
    },
    setWinner(state, name) {
      state.game.winner = name;
    },
    setDraw(state, name) {
      state.game.draw = name;
    }
  },
  actions: {}
});
