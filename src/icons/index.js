import Vue from 'vue';
import SvgIcon from '../components/icon.vue';


// 全局注册icon组件
Vue.component('SvgIcon', SvgIcon);

const req = require.context('./svg', false, /\.svg$/);
const requireAll = requireContext => requireContext.keys().map(requireContext);
requireAll(req);