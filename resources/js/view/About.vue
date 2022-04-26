<template>
    <div>
    
        <h1>{{ Page }}</h1>
    
        <button @click="count++">Count is: {{ count }}</button>
    
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 1 + 5,
            Page: 'Home About'
        }
    }
}
</script>

<style>
button {
    font-weight: bold;
}
</style>