import {createLocalVue, shallowMount } from "@vue/test-utils";
import TicTocGame from "@/views/TicTocGame.vue";
import Vuex from "vuex";
const localVue = createLocalVue();
localVue.use(Vuex);
let store = new Vuex.Store({
	state: {
		"game": {}
	
  },
  getters:{
    getPlayer:state=>jest.fn()
  },
  mutations:{
    resetWinner:jest.fn()
  }
});

describe("TicToc.vue", () => {
  it("test your turn ", () => {
    const msg = "X";
    const wrapper = shallowMount(TicTocGame, {
      store,
      localVue
      
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
