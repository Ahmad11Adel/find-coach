export default{
    async sendRequests(context, payload) {
        const newRequest = {
          UserEmail: payload.email,
          message: payload.message
        };
        const response = await fetch(`https://find-coach-87a59-default-rtdb.firebaseio.com//requests/${payload.coachId}.json`, {
          method: 'POST',
          body: JSON.stringify(newRequest)
        });
    
        const responseData = await response.json();
    
        if (!response.ok) {
          const error = new Error(responseData.message || 'Failed to send request.');
          throw error;
        }
    
        newRequest.id = responseData.name;
        newRequest.coachId = payload.coachId;
    
        context.commit('send', newRequest);
      },


      async fetchRequests(context) {
        const coachId = context.rootGetters.UserId;
        const token =context.rootGetters.Token;
        const response = await fetch(`https://find-coach-87a59-default-rtdb.firebaseio.com/requests/${coachId}.json?auth=` +token);
        const responseData = await response.json();
      
        if (!response.ok) {
          const error = new Error(responseData.message || 'Failed to fetch requests.');
          throw error;
        }


        const requests = [];
        for (const key in responseData) {
          const request = {
            id: key,
            coachId: coachId,
            UserEmail: responseData[key].UserEmail,
            message: responseData[key].message
          };
          requests.push(request);
        }
        console.log(requests)
    
        context.commit('setRequests', requests);
      }
};

