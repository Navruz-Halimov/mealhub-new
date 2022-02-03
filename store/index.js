import Vue from 'vue'
import Vuex from 'vuex'
import modules from "@/store/modules";

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

const  store = () =>
  new Vuex.Store({
    modules,
    strict: debug
  })
// Автоматически запустить действие `init` для каждого существующего модуля
for (const moduleName of Object.keys(modules)) {
    if ((modules[moduleName].actions || {}).init) {
      store.dispatch(`${moduleName}/init`);
    }
  }
export default store
