<template>
    <div>
    
        <section v-if="id">
    
            <h1>ID : {{provinsi.id}}</h1>
            <h1>Nama : {{provinsi.name}}</h1>
    
        </section>
    
        <section v-else>
    
            <h1>Kosong</h1>
    
        </section>
    
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            Page: 'Home Page',
            provinsi: []
        }
    },
    mounted() {
        axios.get('/api/users/' +this.id).then((response) => {
            // console.log(response)
            this.provinsi = response.data
        })
    },
}
</script>

<style>

</style>