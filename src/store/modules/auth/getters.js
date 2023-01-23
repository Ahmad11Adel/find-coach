export default {
   
        UserId(state){
            return state.UserId;
        },
        Token(state){
            return state.token
        },
        isLoggedIn(state){
            return !!state.token
        }
}