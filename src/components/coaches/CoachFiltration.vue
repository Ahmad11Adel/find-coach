<template>
    <base-card>
      <h1>Find your coach</h1>

      <span class="filter-option ">
          <input type="checkbox" id="Frontend"  checked @change="SetFilter"/>
          <label for="Frontend">Frontend</label>
      </span>

      <span class="filter-option ">
          <input type="checkbox" id="Backend"  checked @change="SetFilter"/>
          <label for="Backend">Backend</label>
      </span>

      <span class="filter-option ">
          <input type="checkbox" id="career"  checked @change="SetFilter"/>
          <label for="career">career</label>
      </span>

</base-card>
</template>


<script>
import BaseCard from '../UI/BaseCard.vue';


export default {
  components: { BaseCard },
    emits:['change-filter'],

    data(){
        return {
            Filters:{
                Frontend:true,
                Backend:true,
                career:true
            }
        };

    },
    methods:{
        SetFilter(event){
            const inputId= event.target.id
            const isActive= event.target.checked
            
            const UpdateFilter={
                ...this.Filters,
                [inputId]: isActive
            };
            
            this.Filters=UpdateFilter;
            this.$emit('change-filter',UpdateFilter)
        },
    }
    
}
</script>






<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>