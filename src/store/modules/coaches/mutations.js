export default {
    
    register(state,payload){
        state.coaches.push(payload)
    },

    setCoaches(state,payload){
        state.coaches=payload
    },
    setFetchTime(state){
        const last=new Date;
        state.lastFetch=last.getTime();
    }
    
}