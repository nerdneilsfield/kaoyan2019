// /**
//  * https://kaoyan2019.dengqi.org/
//  *  .--,       .--,
//  * ( (  \.---./  ) )
//  *  '.__/o   o\__.'
//  *     {=  ^  =}
//  *      >  -  <
//  *     /       \
//  *    //       \\
//  *   //|   .   |\\
//  *   "'\       /'"_.-~^`'-.
//  *      \  _  /--'         `
//  *    ___)( )(___
//  *   (((__) (__)))    高山仰止,景行行止.虽不能至,心向往之。
//  */
// /**

import Vue from 'vue'
// import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import VApp from 'vuetify/es5/components/VApp'
import Vuetify from 'vuetify/es5/components/Vuetify'
import transitions from 'vuetify/es5/components/transitions'
import directives from 'vuetify/es5/directives'
import VFooter from 'vuetify/es5/components/VFooter'
import VGrid from 'vuetify/es5/components/VGrid'

Vue.use(Vuetify, {
    components: {
        VApp,
        Vuetify,
        VFooter,
        VGrid,
     },
     directives,
     transitions,
})
