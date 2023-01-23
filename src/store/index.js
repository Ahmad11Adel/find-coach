import { createStore } from "vuex";

import couchesModule from './modules/coaches/index'
import requestsModule from "./modules/requests/index"
import authModule from "./modules/auth/index"

const store =createStore({
    modules:{
        coaches: couchesModule,
        requests: requestsModule,
        auth:authModule
    },
   
})

export default store;