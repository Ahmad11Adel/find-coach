export default {
    async login(context,payload){
        {

            const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=
            AIzaSyDzGhjnn-PTMAgwF89v8ejD9Ni90ABFVI0`,{
                method:'POST',
                body: JSON.stringify({
                    email:payload.email,
                    password:payload.password,
                    returnSecureToken:true
                })
            })
    
            const responseData = await response.json();
            if (!response.ok){
                console.log(responseData)
                throw  new Error(responseData.message ||'failed to sign in')
                
            }

            console.log(responseData)

            localStorage.setItem('token',responseData.idToken)
            localStorage.setItem('userId',responseData.localId)
            context.commit('setUser',{
                token:responseData.idToken,
                userId:responseData.localId,
                tokenExpiration:responseData.expiresIn
            }) 
        }
    },





    async signup(context,payload){

        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=
        AIzaSyDzGhjnn-PTMAgwF89v8ejD9Ni90ABFVI0`,{
            method:'POST',
            body: JSON.stringify({
                email:payload.email,
                password:payload.password,
                returnSecureToken:true
            })
        })

        const responseData = await response.json();
        if (!response.ok){
            console.log(responseData)
            throw  new Error(responseData.message ||'failed to sign up')
            
        }


        console.log(responseData)
        localStorage.setItem('token',responseData.idToken)
        localStorage.setItem('userId',responseData.localId)
        context.commit('setUser',{
            token:responseData.idToken,
            userId:responseData.localId,
            tokenExpiration:responseData.expiresIn
        })
    },





    tryAgain(context){
        const token=localStorage.getItem('token');
        const userId=localStorage.getItem('userId');

        if(token&&userId){
            context.commit('setUser',{
                token:token,
                userId:userId,
                tokenExpiration:null
            })
        }
        
    },





    logout(context){
        localStorage.removeItem('token');
        localStorage.removeItem('userId');

        context.commit('setUser',{
           token:null,
           userId:null,
           tokenExpiration:null
        })
    }
}