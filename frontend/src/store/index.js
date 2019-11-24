import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const endpoint = 'http://localhost:8000';

export default new Vuex.Store({
    state: {
        products: [],
    },
    mutations: {
        SET_PRODUCTS(state, obj) {
            state.products = obj;
        },
        ADD_PRODUCT(state, obj) {
            state.products = [obj, ...state.products];
        },
        EDIT_PRODUCT(state, obj) {
            const products = [...state.products]
            const index = products.findIndex(p => p.pk == obj.pk);
            products[index] = { ...obj };
            state.products = products;
        },
        DELETE_PRODUCT(state, obj) {
            state.products = state.products.filter(p => p.pk !== obj.pk);
        }
    },
    actions: {
        loadProducts(options) {
            axios.get(endpoint + '/product/')
            .then(response => {
                options.commit('SET_PRODUCTS', response.data.data);
            })
        },
        addProduct(options, obj) {
          let bodyFormData = new FormData()
          bodyFormData.append('obj', JSON.stringify(obj))
          axios.post(endpoint + '/product/add/', bodyFormData)
          .then(response => {
            options.commit('ADD_PRODUCT', response.data);
          })
        },
        editProduct(options, obj) {
            let bodyFormData = new FormData()
            bodyFormData.append('obj', JSON.stringify(obj))
            axios.post(endpoint + '/product/' + obj.pk + '/', bodyFormData)
            .then(response => {
              options.commit('EDIT_PRODUCT', response.data);
            })
        },
        deletePdroduct(options, obj) {
            options.commit('DELETE_PRODUCT', obj);
        }
    }
});