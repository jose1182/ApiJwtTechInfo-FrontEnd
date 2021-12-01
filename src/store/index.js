import Vue from 'vue';
import Vuex from 'vuex';

import { account } from './account.module.js';
import { profile } from './profile.module.js';
import { alert } from './alert.module.js';
import { posts } from './posts.module.js';
import { category } from './categories.module.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules:{
        account,
        profile,
        alert,
        posts,
        category
    }
});