import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [{
            id: 1,
            name: 'Refrigerante',
            price: 4.25
        }, {
            id: 2,
            name: 'Sorvete',
            price: 2.5
        }, {
            id: 3,
            name: 'Hamburguer',
            price: 12.45
        }],
    },
    mutations: {
        ADD_PRODUCT(state, obj) {
            state.products = [obj, ...state.products];
        },
        EDIT_PRODUCT(state, obj) {
            const products = [...state.products]
            const index = products.findIndex(p => p.id == obj.id);
            products[index] = { ...obj };  
            state.products = products;
        },
        DELETE_PRODUCT(state, obj) {
            state.products = state.products.filter(p => p.id !== obj.id);
        }
    },
    actions: {
        addProduct(options, obj) {
            // Aqui você faz a chamada do Axios
            options.commit('ADD_PRODUCT', {
                ...obj,
                id: Math.random()
            });
        },
        editProduct(options, obj) {
            options.commit('EDIT_PRODUCT', obj);
        },
        deleteProduct(options, obj) {
            options.commit('DELETE_PRODUCT', obj);
        }
    }
});