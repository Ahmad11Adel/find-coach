export default {

     async registerCoach(context,data){
        const userId= context.rootGetters.UserId    //  /c3
        const  FormData={        
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        };
        
        const token =context.rootGetters.Token;
        const response = await fetch(`https://find-coach-87a59-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=` +token,{
            method :'put' ,   //put is for overWriting and for one time 
            body:JSON.stringify(FormData)
        })

       // const  responseData= await response.json();

        if(!response.ok){
            // for error
        }


        context.commit('register',{
            ...FormData,
            id:userId
        })
    },



    async loadCoaches(context,payload){
        if(!payload.ForceRefresh&&!context.getters.shouldBeUpdate){
            return ;
        }

        const response = await fetch(`https://find-coach-87a59-default-rtdb.firebaseio.com/coaches.json`)

        const  responseData= await response.json();

        if(!response.ok){
           throw new Error(responseData.message)
        }


        const coaches = []
        for (const key in responseData) {
          const coach = {
            id: key,
            firstName: responseData[key].firstName,
            lastName: responseData[key].lastName,
            description: responseData[key].description,
            hourlyRate: responseData[key].hourlyRate,
            areas: responseData[key].areas
          };
          coaches.push(coach);
        }
    
        context.commit('setCoaches', coaches);
        context.commit('setFetchTime')
    }




    
}