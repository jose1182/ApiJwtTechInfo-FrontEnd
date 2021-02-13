import Vue from 'vue';
import Vuex from 'vuex';

import { account } from './account.module.js';
import { users } from './users.module.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules:{
        account,
        users
    }
});