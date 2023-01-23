export default {
    requests(state,_,_2,rootGetters) {
      const userId=rootGetters.UserId;
      return state.Requests.filter((req)=>req.coachId==userId) //for filtering the requests
  
    },
    hasRequests(_,getters) {
      return getters.requests && getters.requests.length > 0; //return true or false
    }
  };