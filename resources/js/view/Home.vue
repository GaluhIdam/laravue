<template>
  <div>
  <h1>{{ Page }}</h1>
  <ul>
     <li v-for="pro in provinsi" v-bind:key="pro.name">
    <router-link :to="profile_uri(pro.name)">{{pro.name}}</router-link>
    </li>
  </ul>
  </div>
</template>

<script>
export default {
        data() {
            return {
              Page: 'Home Page',
              provinsi: []
            }
          },
            mounted () {
      axios.get('/api/users').then((response) => {
        // console.log(response)
        this.provinsi = response.data
      })
    },
          methods: {
            profile_uri(name) {
              return '/user/' +name.toLowerCase()
            }
          },
}
</script>

<style>

</style>