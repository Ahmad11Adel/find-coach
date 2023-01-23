export default {
    coaches(state){
        return state.coaches
    },
    HasCoaches(state){
        return state.coaches&&state.coaches.length > 0;  //return true or false
    },
    isCoach(_, getters, _2, rootGetters) {  // for hide "register as coach" button 
        const coaches = getters.coaches;
        const userId = rootGetters.UserId;

        return coaches.some((coach) => coach.id === userId);  //return true or false
      },
      shouldBeUpdate(state){
        const lastFetch=state.lastFetch
        if(!lastFetch){
            return true
        }
        const current=new Date;
        const currentTime=current.getTime()
        return (currentTime-lastFetch)/1000 >60 ;
      }

}