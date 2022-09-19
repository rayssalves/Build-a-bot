import { createStore } from 'vuex';

export default createStore({
    state: {
        cart: [],
    },
// all changes must go though a mutation
    mutations: {
        addRobotToCart(state, robot) {
            state.cart.push(robot);
        },
    },
});
