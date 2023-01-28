<template>
    <header>
        <nav>
            <router-link to="/">Find a coach</router-link>
        </nav>
        <ul>
            <li> <router-link to="/">All Coaches</router-link> </li>
            <li v-if="isLoggedIn"> <router-link to="/requests">Requests</router-link> </li>
            <li v-else> <router-link to="./auth">login</router-link> </li>
            <li v-if="isLoggedIn"> <base-button @click="logout">logout</base-button></li>
        </ul>
    </header>
</template>


<script>
export default {
  computed:{
    isLoggedIn(){
            return this.$store.getters.isLoggedIn
        },
  },
  methods:{
    logout(){
      this.$store.dispatch('logout')
      this.$router.replace('./coaches')
    }
  }
}
</script>

























<style scoped>
header {
  width: 100%;
  height: 5rem;
  
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid wheat;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
  
}
</style>