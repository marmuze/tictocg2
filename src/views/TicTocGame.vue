<template>
  <div id="main" style="width:80%;margin:auto">
    <div class="alert alert-success" style="width:50%;margin:auto">
      Your turn : {{ getPlayer()(turn) || turn }}
    </div>
    <table id="board" style="margin:auto">
      <tr v-for="(row, i) in board" :key="i">
        <td v-for="(box, j) in row" :key="j">
          <div
            class="square"
            @click="mark(box)"
            :class="{ 'square active': box.bg }"
          >
            {{ box.val }}
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import { mapMutations, mapState, mapGetters } from "vuex";
export default {
  name: "ticTocGame",
  data() {
    return {
      turn: "X",
      player: {
        X: "",
        O: ""
      },

      board: [
        [{ val: "", bg: "" }, { val: "", bg: "" }, { val: "", bg: "" }],
        [{ val: "", bg: "" }, { val: "", bg: "" }, { val: "", bg: "" }],
        [{ val: "", bg: "" }, { val: "", bg: "" }, { val: "", bg: "" }]
      ],

      windex: [
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
      ]
    };
  },
  computed: {
    ...mapState(["game"]),
    arr() {
      return this.board.map(x => x.map(y => y.val));
    },

    winArr() {
      return this.windex.map(x => x.map(y => this.board[y[0]][y[1]].val));
    }
  },
  methods: {
    ...mapMutations(["setWinner", "setDraw", "resetWinner"]),
    ...mapGetters(["getPlayer"]),
    /**
     * fonction qui écrit dans la case si autorisé et vérifie si ce coup fait gagner
     */
    mark(box) {
      if (box.val == "") {
        box.val = this.turn;
        this.turn = this.turn == "X" ? "O" : "X";
        this.checkEndGame();
      }
    },
    /**
     * vérification de la victoire et du null
     */
    checkEndGame() {
      const windex = this.winArr;
      const draw = this.arr.every(x => x.every(y => y != ""));

      windex.forEach((x, ind) => {
        const vector = this.windex[ind];
        let over = false;

        if (x.every(y => y == "X")) {
          this.setWinner(this.getPlayer()("X") || "X");
          over = true;
        }

        if (x.every(y => y == "O")) {
          this.setWinner(this.getPlayer()("O") || "O");
          over = true;
        }

        if (draw) {
          this.setDraw(true);
          over = true;
        }

        if (over) {
          this.setWin(vector);
        }
      });
    },
    /**
     * animation victoire
     */
    setWin(vector) {
      if (!this.game.draw) {
        vector.forEach(x => {
          this.board[x[0]][x[1]].bg = "active";
        });
      }

      setTimeout(() => {
        this.$router.push("reload");
      }, 500);
    }
  },
  mounted() {
    this.resetWinner();
  }
};
</script>
<style scoped>
.square {
  width: 15vw;
  height: 15vw;
  background: rgb(154, 130, 240);
  cursor: pointer;
  font-size: 15vw;
  line-height: 15vw;
  text-align: center;
  color: white;
}

.square :hover {
  opacity: 0.8;
}

.square :active {
  background: rgb(173, 119, 224);
}
</style>
