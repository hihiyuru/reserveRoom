import Vue from 'vue';
import Vuex from 'vuex';
import init from "./init.js";
import personal from './modules/personal';

import * as api from "@/http";


Vue.use(Vuex);

const modules = {
  personal: personal(api),
}


const store = new Vuex.Store({
  modules
})

export default store;

init(store);
