import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blurred: '',
    reviews: [],
  },
  getters: {
    getBlurred(state) {
      return state.blurred;
    },
    getReviews(state) {
      return state.reviews;
    },
  },
  mutations: {
    setBlurred(state, id) {
      state.blurred = id;
    },
    setReviews(state, { reviews, updateOperator, index }) {
      // state.reviews = reviews;
      if (!updateOperator || updateOperator === 'set') state.reviews = reviews;
      else if (updateOperator === 'unshift') state.reviews.unshift(reviews);
      else if (updateOperator === 'remove') state.reviews.splice(index, 1);
    },
  },
  actions: {
    setBlurred({ commit }, { id }) {
      commit('setBlurred', id);
    },
    setReviews({ commit }, payload) {
      commit('setReviews', payload);
    },
  },
});
