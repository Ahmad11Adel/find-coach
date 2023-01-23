<template>
  <base-dialog :show="!!error" title="an error happened" @close="handleError">{{ error }}</base-dialog>
    <section>
        <base-card>
            <header>
                <h1>Received message</h1>
            </header>
         
            
            <ul v-if="HasRequests ">
                <requests-item v-for="req in  ReceivedMessages"
                    :key="req.id"
                    :email="req.UserEmail"
                    :message="req.message"
                    ></requests-item>
            
            </ul>
            <p v-else>you have no messages </p>
        </base-card>
   </section>
</template>




<script>
import RequestsItem from '../../components/requests/RequestsItem.vue'
export default {
  components: { RequestsItem },
  data(){
    return {
      isLoading:false,
      error:null
    }

  },
    computed:{
        ReceivedMessages(){
            return this.$store.getters['requests/requests']
        },
        HasRequests(){
            return this.$store.getters['requests/hasRequests']
        },

    },
    methods:{
     async loadRequests(){
        this.isLoading=true;
        try{
          await this.$store.dispatch('requests/fetchRequests')
        }catch(error){
          this.error=error.message||"failed to load requests"
        }
        this.isLoading=true;
      },
      handleError(){
        this.error=null;
      }
    },
    created(){
      this.loadRequests();
    }
   
}
</script>



<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>