<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">This website under construction</div>
                    <div class="card-body">
                       <router-link :to="{name: 'home'}">Home</router-link>
                       <router-link :to="{name: 'about'}">About</router-link>
                       <router-link :to="{name: 'user'}">User</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>
