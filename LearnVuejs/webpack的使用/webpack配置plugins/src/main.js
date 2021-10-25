import {sum, mul} from "./mathUtils";

console.log(sum(10, 20));
console.log(mul(10, 30));

require("./normal.css")

require('./special.less')

document.write('<h2>hello world</h2>')

import Vue from 'vue'
import cpn from "./app.vue";
new Vue({
    el:'#app',
    template:`<cpn></cpn>`,
    components:{
        cpn
    }
})


