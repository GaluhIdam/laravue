<template>
    <div>
    
        <h1>{{ Page }}</h1>
    
        <ul>
    
            <li v-for="pro in provinsi" v-bind:key="pro.id">
    
                <router-link :to="profile_uri(pro.id)">{{pro.name}}</router-link>
    
                <!-- <a href="" @click.prevent="lihatki(pro.id)">{{pro.name}}</a> -->
    
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
    mounted() {
        axios.get('/api/users').then((response) => {
            // console.log(response)
            this.provinsi = response.data
        })
    },
    methods: {
        profile_uri(id) {
            return '/user/' + id
        },
    }
}
</script>

<style>

</style>