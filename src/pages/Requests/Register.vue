<template>
    <section>
      <base-card>
        <h2>Register as a coach now!</h2>
        <coach-form @save-date="RegisterNew"></coach-form>
      </base-card>
    </section>
  </template>
  

  <script>
  import CoachForm from '../../components/coaches/CoachForm.vue';
  
  export default {
    components: {
      CoachForm,
    },


    methods:{
        RegisterNew(formData){
          this.$store.dispatch('coaches/registerCoach', formData);
          this.$router.replace('/coaches');                        //replace is different to push

        }
    }

  };
  </script>