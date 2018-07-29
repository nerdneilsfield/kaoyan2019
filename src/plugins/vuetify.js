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
