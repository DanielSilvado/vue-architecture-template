import Vue from "vue";
import Vuex from "vuex";

import StoreUsers from './modules/store_users'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users: StoreUsers,
  },
});
