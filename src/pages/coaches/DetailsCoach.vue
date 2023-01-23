<template>

  <section>
      <base-card>
        <h1>{{ fullName }}</h1>
        <h2>${{ this.SelectedCoach.hourlyRate }}/hour</h2>
      </base-card>
  </section>

  <section>
    <base-card>
      <header>
        <h1>Are U interested?</h1>
        <base-button link :to="connectLink">connect</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>

  <section>
    <base-card>
      <base-badge v-for="area in this.SelectedCoach.areas" :key="area" :title="area" :type="area"></base-badge>
      <p>{{ this.SelectedCoach.description }}</p>
    </base-card>
  </section>
  
  
</template>


<script>
export default {
    props:['id'],
    
    data(){
        return{
            SelectedCoach:null
        }
    },
    computed:{
        fullName(){
            return this.SelectedCoach.firstName+" "+this.SelectedCoach.lastName
        },
        connectLink(){
            return '/coaches/'+this.id+'/contact'
        }


    },
    created(){
            this.SelectedCoach=this.$store.getters['coaches/coaches'].find((coach)=>coach.id==this.id);
        },
    
}
</script>