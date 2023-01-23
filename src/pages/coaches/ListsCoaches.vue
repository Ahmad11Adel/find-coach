<template>
    <base-dialog :show="!!error" title="an error happened" @close="handleError">{{ error }}</base-dialog>
    
    <section>
        <coach-filtration @change-filter="SetFilter"></coach-filtration>
    </section>
    
<base-card>
    <section>
        <div class="controls">
            <base-button mode="outline" @click="loadCoaches(true)">Refresh</base-button>
            <base-button link to="/auth?redirect=register" v-if="!isLoggedIn">login to Register as coach</base-button>
            <base-button link to="/register"  v-if="isLoggedIn&&!isLoading &&!isCoach">Register as coach</base-button>
        </div>

        <div v-if="isLoading">
            <base-spinner></base-spinner>

        </div>

        <ul v-else-if="HasCoaches">

            <coach-item 
            v-for="coach in filteredCoaches"
            :id="coach.id"
            :key="coach.id"
            :firstName="coach.firstName"
            :LastName="coach.lastName"
            :areas="coach.areas"
            :rate="coach.hourlyRate" 
            ></coach-item>

        </ul>
        <p v-else>No coaches Founded</p>
    </section>
</base-card>
</template>


<script>


import CoachFiltration from '../../components/coaches/CoachFiltration.vue'
import CoachItem from '../../components/coaches/CoachItem.vue'
import BaseButton from '../../components/UI/BaseButton.vue'

export default {
  components: { CoachItem,CoachFiltration, BaseButton   },
  data(){
    return{
        isLoading:false,

        IsActive:{
                Frontend:true,
                Backend:true,
                career:true
        },
        error:null
    }
  },
    computed:{
        isLoggedIn(){
            return this.$store.getters.isLoggedIn
        },
        isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },
        filteredCoaches(){
            const coaches= this.$store.getters['coaches/coaches'] ; //first coaches for key module and sec name for getter name

            return coaches.filter((coach)=>
            {
                if(this.IsActive.Frontend && coach.areas.includes('frontend')){
                    return true;
                }
                if(this.IsActive.Backend && coach.areas.includes('backend')){
                    return true;
                }
                if(this.IsActive.career && coach.areas.includes('career')){
                    return true;
                }
                return false;
            })
        },
        HasCoaches(){
            return  !this.isLoading &&this.$store.getters['coaches/HasCoaches']
        }
    },
    created(){
        this.loadCoaches();
    },
    methods:{
        SetFilter(UpdateFilter){
            this.IsActive=UpdateFilter;
            console.log(this.IsActive)

        },

         async loadCoaches(Refresh =false){
            this.isLoading=true
            try{
                await this.$store.dispatch('coaches/loadCoaches',{ForceRefresh: Refresh}); 
            }catch(error){
                 this.error= error.message ||"there are errors"
            }  
            this.isLoading=false;  
        },
        
        handleError(){
            this.error=null;
        }

    },
    
    
}
</script>


<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>