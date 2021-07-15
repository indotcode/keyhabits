import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import 'es6-promise/auto';

const store = new Vuex.Store({
  
  state: {
    list: [
      {
        name: 'Пшеница',
        params: [
          {name: 2025, value: 49},
          {name: 2026, value: 48},
          {name: 2027, value: 52},
          {name: 2028, value: 44},
        ]
      },
      {
        name: 'Гречиха',
        params: [
          {name: 2025, value: 35},
          {name: 2026, value: 29},
          {name: 2027, value: 37},
          {name: 2028, value: 30},
        ]
      },
      {
        name: 'Ячмень',
        params: [
          {name: 2025, value: 23},
          {name: 2026, value: 13},
          {name: 2027, value: 14},
          {name: 2028, value: 16},
        ]
      }
    ],
    params: [2025, 2026, 2027, 2028]
  },
  actions: {
    
  },
  mutations: {
    checkFormStore(state, data) {
      // state.list.unshift(this.input);
      Vue.set(state.list, this.state.list.length, {name: data.name, params: data.params})
    }
  },
  getters: {
    paramsStore(state) {
      return state.params;
    },
    listStore(state) {
      return state.list;
    }
  }
})

export default store;