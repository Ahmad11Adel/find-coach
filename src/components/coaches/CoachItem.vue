<template>
<li>
    <h1>{{ fullName }}</h1>
    <h2>${{ rate }}/hour</h2>
    <div>
        <base-badge v-for="area in areas" :key="area" :title="area" :type="area"></base-badge>
    </div>
    <div class="actions">
        <base-button link mode="outline" :to="contactLink">contact </base-button>
        <base-button link  :to="ViewDetailsLink">view details</base-button>
    </div>
</li>
</template>

<script>
import BaseBadge from '../UI/BaseBadge.vue';
import BaseButton from '../UI/BaseButton.vue';
export default {
  components: { BaseButton, BaseBadge },
    props:['id', 'firstName','LastName','rate','areas'],
    computed:{
        fullName(){
          return   this.firstName+" "+this.LastName;
        },
        ViewDetailsLink(){
            return "/coaches/"+ this.id
            
        },
        contactLink(){{
            return "/coaches/"+ this.id+'/contact'
        }}
    }
}
</script>


<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>