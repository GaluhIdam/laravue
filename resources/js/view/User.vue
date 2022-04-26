<template>
    <div>
    
        <section v-if="name">
    
            <h1>{{name}} Page</h1>
    
        </section>
    
        <section v-else>
    
            <h1>Kosong</h1>
    
        </section>
    
    </div>
</template>

<script>
export default {
    props: ['name']
}
</script>

<style>

</style>