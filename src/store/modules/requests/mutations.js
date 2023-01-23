export default{
    send(state,payload){
        state.Requests.push(payload)
    },
    setRequests(state,payload){
        state.Requests=payload;
    }
}
