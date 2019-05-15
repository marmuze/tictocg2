import { createLocalVue,shallowMount } from "@vue/test-utils";
import Welcom from "@/views/Welcom.vue";
import Vuex from "vuex";
const localVue = createLocalVue();
localVue.use(Vuex);
let store = new Vuex.Store({
	state: {
    player1: "",
    player2:""
	
  },
  getters:{
    getPlayer:jest.fn()
  }
});

describe("HelloWorld.vue", () => {
  it("test affichage page avec titre", () => {
    const msg = "tictactoe Georges";
    const wrapper = shallowMount(Welcom, {
      store,localVue
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
