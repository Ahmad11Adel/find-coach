import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"


export default {
    state(){
        return{
            UserId:null,
            token:null,
            tokenExpiration:null
        }
    },
    mutations,
    actions,
    getters
}