<template>
    <base-card>
        <form @submit.prevent="SubmitMessage">

            <div class="form-control">
                <label for="email"> please enter your email</label>
                <input id="email" type="email" v-model.trim="email"/>
            </div>

            <div class="form-control">
                <label for="message"> please write your message</label>
                <textarea id="message" type="text" rows="5" v-model.trim="message"></textarea>
            </div>

            <p v-if="!FormValid">please fix the errors</p>
            <div class='actions'>
                <base-button >send message</base-button>
            </div>     
        </form>
    </base-card>
    
</template>


<script>

import BaseButton from '../../components/UI/BaseButton.vue'
export default {
  components: { BaseButton },
  data(){
    return{
        id:this.$route.params.id,
        email:'',
        message:'',
        FormValid:true
    };
  },
  methods:{
    SubmitMessage(){
        if(this.email==''||this.message==''){
            this.FormValid=false
            return  // don't continue the rest of function
        }



        const TheMessage={
            coachId:this.id,
            email :this.email,
            message:this.message
        }
        this.$store.dispatch('requests/sendRequests',TheMessage)
        this.$router.replace('/coaches');
        console.log(TheMessage)

        console.log(this.FormValid)
    }
  }
    
}
</script>







<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>